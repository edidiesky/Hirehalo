package services

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/edidiesky/hirehalo/backend/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// @description  Get All Application Services
// @route  GET /Application
// @access  Public
func GetAllApplicationService(filter bson.M, page int, pageSize int) ([]models.Job, int64, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return nil, 0, fmt.Errorf("error connecting to the mongodb client")
	}
	jobCollection := client.Database("JOB_API").Collection("job")
	// pagination

	skip := (page - 1) * pageSize
	limit := pageSize
	findOptions := options.Find().SetSkip(int64(skip)).SetLimit(int64(limit))
	cursor, err := jobCollection.Find(context.TODO(), filter, findOptions)
	if err != nil {
		log.Printf("error in getting the Application: %v", err)
		return nil, 0, fmt.Errorf("error getting the Application from the database")

	}
	defer cursor.Close(context.TODO())
	var Application []models.Job
	if err := cursor.All(context.TODO(), &Application); err != nil {
		log.Printf("error decoding the job data: %v", err)
		return nil, 0, fmt.Errorf("error decoding the job data")

	}
	// count the whole documents without the pagination
	count, err := jobCollection.CountDocuments(context.TODO(), findOptions)
	if err != nil {
		log.Printf("error counting the Application Data: %v", err)
		return nil, 0, fmt.Errorf("error counting the Application Data")

	}

	return Application, count, nil
}

// @description  Get A single Job Service
// @route  GET /api/v1/Application/:jobid
// @access  Public
func GetSingleApplicationService(filter bson.M) (models.Job, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return models.Job{}, fmt.Errorf("error connecting to the mongodb client")
	}
	jobCollection := client.Database("JOB_API").Collection("job")
	var job models.Job

	if err = jobCollection.FindOne(context.TODO(), filter).Decode(&job); err != nil {
		log.Printf("error in getting the job: %v", err)
		return models.Job{}, fmt.Errorf("error getting the job from the database")

	}

	return job, nil
}

// @description  Create A Job Handler
// @route  POST /api/v1/Application/:jobid
// @access  Private/USER/RECRUITER

func CreateApplicationService(application models.Application) (*mongo.InsertOneResult, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return nil, fmt.Errorf("error connecting to the mongodb client")
	}
	// Application and JOb Collections
	applicationCollection := client.Database("JOB_API").Collection("application")
	jobCollection := client.Database("JOB_API").Collection("job")

	// context creation with a timeout
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	// TRANSACTIONS
	// session start
	session, err := client.StartSession()
	if err != nil {
		log.Printf("error starting the database session: %v", err)
		return nil, fmt.Errorf("error starting the database session")
	}

	defer session.EndSession(ctx)
	// using the session to insert the application and job application update
	result, err := session.WithTransaction(ctx, func(sessCtx mongo.SessionContext) (interface{}, error) {
		// Check if the job exists before updating it
		var job models.Job
		err = jobCollection.FindOne(sessCtx, bson.M{"id": application.JobId}).Decode(&job)
		if err != nil {
			log.Printf("Job with ID %v not found", application.JobId)
			return nil, fmt.Errorf("job not found")
		}

		// Check if the usr has already applied for the job
		if err = applicationCollection.FindOne(sessCtx, bson.M{"authorId": application.AuthorId, "jobId": application.JobId}).Decode(&application); err == nil {
			log.Printf("error, the user has already applied for the job: %v", application.JobId)
			return nil, fmt.Errorf("user has already applied for this job")
		} else if err != mongo.ErrNoDocuments {
			// If any other error occurred, handle it accordingly
			log.Printf("error checking existing applications: %v", err)
			return nil, fmt.Errorf("error checking existing applications")
		}

		// set the id of the application
		application.ID = primitive.NewObjectID()
		// Insert the application document
		_, err := applicationCollection.InsertOne(sessCtx, application)
		if err != nil {
			log.Printf("error inserting application into application collection: %v", err)
			return nil, fmt.Errorf("error inserting application")
		}

		// Update the job document by adding the application to the "applications" array
		_, err = jobCollection.UpdateOne(sessCtx, bson.M{"id": application.JobId}, bson.M{
			"$push": bson.M{
				"application": application,
			},
		})
		if err != nil {
			log.Printf("error appending application to job's application array: %v", err)
			return nil, fmt.Errorf("error updating job")
		}

		// If both operations succeed, return nil and nil to indicate success
		return job, nil
	})

	// If any error occurs during the transaction, abort
	if err != nil {
		log.Printf("Transaction failed: %v", err)
		_ = session.AbortTransaction(ctx)
		return nil, fmt.Errorf("transaction failed")
	}

	// Commit the transaction after both operations succeed
	err = session.CommitTransaction(ctx)
	if err != nil {
		log.Printf("error committing transaction: %v", err)
		return nil, fmt.Errorf("error committing transaction")
	}
	if result != nil {
		insertResult, ok := result.(*mongo.InsertOneResult)
		if !ok {
			return nil, fmt.Errorf("expected *mongo.InsertOneResult but got %T", result)

		}
		return insertResult, nil
	}
	return nil, fmt.Errorf("unexpected error: result is nil")
}

func GetUserApplicationService(userID string) ([]models.Job, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return nil, fmt.Errorf("error connecting to the mongodb client")
	}
	jobCollection := client.Database("JOB_API").Collection("job")
	var jobs []models.Job

	cursor, err := jobCollection.Aggregate(context.TODO(), bson.A{
		bson.M{
			"$unwind": "$application",
		},
		bson.M{
			"$match": bson.M{
				"application.authorId": userID, // match job applications with the user's ID
			},
		},
		bson.M{
			"$project": bson.M{
				"title":           1,
				"company":         1,
				"location":        1,
				"responsibilites": 1,
				"application":     1,
			},
		},
	})

	if err != nil {
		log.Printf("error in getting the job: %v", err)
		return nil, fmt.Errorf("error getting the job from the database")

	}
	if err = cursor.All(context.TODO(), &jobs); err != nil {
		log.Printf("Error decoding jobs: %v", err)
		return nil, fmt.Errorf("error decoding jobs")
	}

	return jobs, nil
}
