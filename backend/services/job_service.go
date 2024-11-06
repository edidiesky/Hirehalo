package services

import (
	"context"
	"fmt"
	"log"

	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/edidiesky/hirehalo/backend/models"
	"go.mongodb.org/mongo-driver/bson"
)

// @description  Get All Jobs Services
// @route  GET /jobs
// @access  Public
func GetAllJobsServices(filter bson.M) ([]models.Job, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return nil, fmt.Errorf("error connecting to the mongodb client")
	}
	jobCollection := client.Database("JOB_API").Collection("job")

	cursor, err := jobCollection.Find(context.TODO(), filter)
	if err != nil {
		log.Printf("Error in getting the jobs: %v", err)
		return nil, fmt.Errorf("error getting the jobs from the database")

	}
	defer cursor.Close(context.TODO())
	var jobs []models.Job
	if err := cursor.All(context.TODO(), &jobs); err !=nil {
		log.Printf("Error decoding the job data: %v", err)
		return nil, fmt.Errorf("Error decoding the job data")

	}
	
	return jobs, nil
}
