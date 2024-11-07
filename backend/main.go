package main

import (
	"fmt"
	"log"
"os"
	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/edidiesky/hirehalo/backend/routers"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
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
	// .SetupAuthRoutes(app)
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins:os.Getenv("WEB_ORIGIN") ,
	}))
	routers.AuthRoute(app)
	routers.UserRouter(app)
	routers.JobRouter(app)
	routers.ApplicationRouter(app)
	app.Listen(":4000")

	if err != nil {
		fmt.Println("Error Starting the server")
	}
}
