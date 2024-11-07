package services

import (
	"context"
	"fmt"
	"log"
	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/edidiesky/hirehalo/backend/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
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
		log.Printf("Error in getting the Application: %v", err)
		return nil, 0, fmt.Errorf("error getting the Application from the database")

	}
	defer cursor.Close(context.TODO())
	var Application []models.Job
	if err := cursor.All(context.TODO(), &Application); err != nil {
		log.Printf("Error decoding the job data: %v", err)
		return nil, 0, fmt.Errorf("Error decoding the job data")

	}
	// count the whole documents without the pagination
	count, err := jobCollection.CountDocuments(context.TODO(), findOptions)
	if err != nil {
		log.Printf("Error counting the Application Data: %v", err)
		return nil, 0, fmt.Errorf("Error counting the Application Data")

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
		log.Printf("Error in getting the job: %v", err)
		return models.Job{}, fmt.Errorf("error getting the job from the database")

	}

	return job, nil
}

// @description  Create A Job Handler
// @route  POST /api/v1/Application/:jobid
// @access  Private

func CreateApplicationService(job models.Job) (models.Job, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return models.Job{}, fmt.Errorf("error connecting to the mongodb client")
	}
	jobCollection := client.Database("JOB_API").Collection("job")

	insertResult, err := jobCollection.InsertOne(context.TODO(), job)
	if err != nil {
		log.Printf("Error in creating the job: %v", err)
		return models.Job{}, fmt.Errorf("error in creating the job")
	}

	// Retrieve the inserted job, including its _id
	job.ID = insertResult.InsertedID.(primitive.ObjectID)

	return job, nil
}
