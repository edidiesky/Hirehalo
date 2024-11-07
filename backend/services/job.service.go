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

// @description  Get All Jobs Services
// @route  GET /jobs
// @access  Public
func GetAllJobsService(filter bson.M, page int, pageSize int) ([]models.Job, int64, error) {
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
		log.Printf("Error in getting the jobs: %v", err)
		return nil, 0, fmt.Errorf("error getting the jobs from the database")

	}
	defer cursor.Close(context.TODO())
	var jobs []models.Job
	if err := cursor.All(context.TODO(), &jobs); err != nil {
		log.Printf("Error decoding the job data: %v", err)
		return nil, 0, fmt.Errorf("Error decoding the job data")

	}
	// count the whole documents without the pagination
	count, err := jobCollection.CountDocuments(context.TODO(), findOptions)
	if err != nil {
		log.Printf("Error counting the jobs Data: %v", err)
		return nil, 0, fmt.Errorf("Error counting the jobs Data")

	}

	return jobs, count, nil
}

// @description  Get A single Job Service
// @route  GET /api/v1/jobs/:jobid
// @access  Public
func GetSingleJobsService(filter bson.M) (models.Job, error) {
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
// @route  POST /api/v1/jobs/:jobid
// @access  Private

func CreateAJobsService(job models.Job) (models.Job, error) {
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
