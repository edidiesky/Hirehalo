package main

import (
	"fmt"
	"log"

	"github.com/edidiesky/Go_Job_Backend/dbconfig"
	"github.com/edidiesky/Go_Job_Backend/routers"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {

	error := godotenv.Load()
	if error != nil {
		fmt.Println("Error getting the doetenv file")
	}
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
	// .SetupAuthRoutes(app)
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins:"",
	}))
	routers.AuthRoute(app)
	routers.UserRouter(app)
	routers.JobRouter(app)
	app.Listen(":4000")

	if err != nil {
		fmt.Println("Error Starting the server")
	}
}
