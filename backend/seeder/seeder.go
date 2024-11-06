package main
import (
	"fmt"
	"log"
	"context"

	"github.com/edidiesky/hirehalo/backend/data"
	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/joho/godotenv"
)

// Load environment variables
func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
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
	_, err = jobCollection.InsertMany(context.TODO(), data.JobData)
	if err != nil {
		log.Fatalf("Error seeding data: %v", err)
	}
	fmt.Println("Data imported successfully!")
}
