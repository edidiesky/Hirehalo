package main

import (
	"context"
	"fmt"
	"log"

	"github.com/edidiesky/hirehalo/backend/data"
	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/edidiesky/hirehalo/backend/models"
	"github.com/joho/godotenv"
)

// Load environment variables
func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
}

// Convert []models.Job to []interface{}
func toInterfaceSlice(jobData []models.Job) []interface{} {
	var interfaceSlice []interface{}
	for _, job := range jobData {
		interfaceSlice = append(interfaceSlice, job)
	}
	return interfaceSlice
}

func main() {
	client, err := dbconfig.GetMongoDBClient()
	// Get MongoDB client from dbconfig
	if err != nil {
		log.Fatal("Failed to connect to MongoDB:", err)
	}
	defer client.Disconnect(nil)

	// Check if the connection to MongoDB is successful
	err = client.Ping(nil, nil)
	if err != nil {
		log.Fatal("Failed to ping MongoDB:", err)
	}

	fmt.Println("Connected to MongoDB Atlas")
	jobCollection := client.Database("JOB_API").Collection("job")
	
	// Convert job data to interface{}
	convertedJobData := toInterfaceSlice(data.JobData)

	// Insert the data
	_, err = jobCollection.InsertMany(context.TODO(), convertedJobData)
	if err != nil {
		log.Fatalf("Error seeding data: %v", err)
	}
	fmt.Println("Data imported successfully!")
}
