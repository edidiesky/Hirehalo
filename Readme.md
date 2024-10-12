# HireHalo (Job Board)

HireHalo is a platform which connects job seekers to wide range of remote job opportunites. It also creates rooms for startups to pitch their products and create jobs for their potential candidates, and also find the right talent for the posted jobs. Hirehalo is all about connecting job seekers to their dream jobs and Opportunities. I built Hirehalo with Go, NextJs,MongoDB, and Typescript.

![Project Screenshot](/dashboard.jpeg)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [Hosting](#hosting)
- [Contact](#contact)

## Technologies Used

- **Backend:** Golang, MongoDB, Socket.IO, Jest, Redis for Caching, 
- **Frontend:** Next.Js, Typescript, React.js, Cypress, Framer-motion, Gsap, Tailwind.CSS.
- **Database:** MongoDB
- **Hosting:** Vercel

## Features

- **User Authentication:** Secure login and registration.
- **Role Management:** Admin, User, and Recruiters roles.
- **Job Management:** Job can be managed by the recruiters.
- **Reservation System:** Status management for reservations.
- **Payment Integration:** Support for multiple payment statuses.
- **Review System:** Users can leave reviews and ratings.
- **Social System:** Users can chat with Sellers.
- **Notification System:** Sellers can receive notifications for every purchase .

## Getting Started

### Prerequisites

- Go installed on your machine.
- MongoDB database.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/edidiesky/hirehalo.git
   cd hirehalo
   ```
2. ```bash
   cd backend
   npm install
   ```

3. ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```bash
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
WEB_ORIGIN= http://localhost:5173
```

Also Create a `.env` file in the `frontend` directory and add the following:

```bash
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
WEB_ORIGIN= http://localhost:5173
```

### Running the Project

Go to the root directory and install the package.json file. This will run both the frontend and backend concurrently

```bash

npm install
npm run dev
```

Open your browser and navigate to

```bash
http://localhost:5173
```

## Backend Overview

### Go and MongoDB Setup

Your Go schema is configured to use MongoDB as the database provider. Here’s the basic setup:
```go
package dbconfig

import (
	"context"
	"os"
	"sync"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// define the client and mongo once instance
var clientInstance *mongo.Client
var clientInstaceError error
var mongoOnce sync.Once

func GetMongoDBClient() (*mongo.Client, error) {
	// call this function once if only it has been called
	mongoOnce.Do(
		func() {
			clientOptions:= options.Client().ApplyURI(os.Getenv("DATABASE_URL"))
			client, err := mongo.Connect(context.TODO(), clientOptions)
			clientInstance = client
			clientInstaceError = err
		},
	)
	return 	clientInstance , clientInstaceError 
}

```


### Controllers

Here is an example of one of the controllers I implemented in Go:

```go
func (ac *AuthController) LoginAUser(c *fiber.Ctx) error {
    // Get the MongoDB client
    client, err := dbconfig.GetMongoDBClient()
    if err != nil {
        log.Println("An error occurred while connecting to the database")
        return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
            "message": "An error occurred while connecting to the database",
        })
    }

    // Get the user collection
    userCollection := client.Database("JOB_API").Collection("user")
    var user models.User

    // Parse the incoming request body into the user struct
    if err := c.BodyParser(&user); err != nil {
        log.Println("Error in parsing the form data into the user struct")
        return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
            "message": "Error in parsing the form data into the user struct",
        })
    }

    // Find the user by email in the database
    var existingUser models.User
    if err = userCollection.FindOne(context.TODO(), bson.M{"email": user.Email}).Decode(&existingUser); err != nil {
        log.Println("No record found with this email")
        return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
            "message": "No record found with this email",
        })
    }

    // Compare the provided password with the hashed password in the database
    if err := bcrypt.CompareHashAndPassword([]byte(existingUser.Password), []byte(user.Password)); err != nil {
        log.Println("Invalid password")
        return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
            "message": "Invalid password",
        })
    }

    // Generate a JWT token
    userId := existingUser.ID.Hex()
    if err := utils.GenerateToken(c, userId); err != nil {
        log.Println("Error generating token")
        return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
            "message": "Error generating token",
        })
    }

    // Return the user information without the password
    return c.JSON(fiber.Map{
        "message": "Login successful",
        "user": fiber.Map{
            "email":    existingUser.Email,
            "name":     existingUser.Name,
            "username": existingUser.Username,
            "image":    existingUser.Image,
            "role":     existingUser.Role,
        },
    })
}
```

### Database Schema

The main models in the Hirehalo projects for now are `User`, `Job`, `Review`, `Payment`,`Conversation`,`Message`, etc. Here's an example of the `User` model:

```User Model
package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type Role string
type User struct {
	ID                  primitive.ObjectID
	Name                string             `bson:"name" validate:"required"`
	Username            string             `bson:"username" validate:"required"`
	Password            string             `bson:"password" validate:"required"`
	Email               string             `bson:"email" validate:"required"`
	Image               string             `bson:"image"`
	Country             string             `bson:"country"`
	City                string             `bson:"city"`
	ResetPasswordToken  string             `bson:"resetPasswordToken"`
	VerifyPasswordToken string             `bson:"verifyPasswordToken"`
	Role                Role               `bson:"role, empty"`
	CreatedAt           time.Time          `bson:"createdAt, omitempty"`
	UpdatedAt           time.Time          `bson:"updatedAt, omitempty"`
}

const (
	RoleJobseeker Role = "JOB_SEEKER"
	RoleRecruiter Role = "JOB_RECRUITER"
	RoleAdmin     Role = "JOB_AdDMIN"
)

```

### Auth Route

Here is how I implemented my authentication route in Go:

```go
package routers

import (
	// "fmt"
	"github.com/edidiesky/Go_Job_Backend/controllers"
	"github.com/gofiber/fiber/v2"
)

// @description  Authentication router
// @route  /api/v1/auth
func AuthRoute(app *fiber.App) {
	// imported the auth controller file
	authcontroller := controllers.NewAuthController()
	authroute := app.Group("/api/v1/auth")
	authroute.Post("login", authcontroller.LoginAUser)
	authroute.Post("register", authcontroller.RegisterAUser)
	authroute.Post("logout", authcontroller.LogoutAUser)
	authroute.Post("verify-email", authcontroller.VerifyMail)
}

```





## Frontend Overview

### Components

The main components include `home`, `cart`, `singlejobs`, etc. Each component resides in the `src/components` directory.

### Testing with Cypress

I’ve written end-to-end tests using Cypress. To run the tests:

```bash
cd frontend
npx cypress open
```

## Hosting

The project is hosted on Vercel. You can access it [here](https://hirehalo.vercel.app/).

## Contact

For any questions or suggestions, feel free to reach out:

- Email: [essienedidiong1000@gmail.com](mailto:essienedidiong1000@gmail.com)
- LinkedIn: [My LinkedIn Profile](https://www.linkedin.com/in/victorezekielessien)
