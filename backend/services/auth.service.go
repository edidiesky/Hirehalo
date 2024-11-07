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
	"golang.org/x/crypto/bcrypt"
)

// @description  Get All Application Services
// @route  GET /Application
// @access  Public
func RegistrationService(user models.User) (*mongo.InsertOneResult, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return nil, fmt.Errorf("error connecting to the mongodb client")
	}
	userCollection := client.Database("JOB_API").Collection("user")
	// pagination

	var existingUser models.User
	err = userCollection.FindOne(context.TODO(), bson.M{"email": user.Email}).Decode(&existingUser)
	if err != nil && err != mongo.ErrNoDocuments {
		log.Println("Error finding user in database:", err)
		return nil, fmt.Errorf("error finding user in database %v", err)
	}
	if err == nil {
		log.Println("User already exists")
		return nil, fmt.Errorf("user already exists")
	}
	hashedpassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		log.Println("Error generating a hash password for the user", err)
		return nil, fmt.Errorf("error generating a hash password for the user %v", err)
	}
	user.Password = string(hashedpassword)
	user.ID = primitive.NewObjectID()
	user.CreatedAt = time.Now()
	user.UpdatedAt = time.Now()
	user.Role = "JOB_SEEKER"
	log.Println("Inserting user into database:", user)
	newUser, err := userCollection.InsertOne(context.TODO(), user)
	if err != nil {
		log.Println("Error Inserting the user in the db", err)
		return nil, fmt.Errorf("error Inserting the user in the db %v", err)

	}
	return newUser, nil
}

// @description  Create A User Handler
// @route  POST /api/v1/Application/:jobid
// @access  Private

func LoginService(user models.User) (models.User, error) {
	// database connection
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return models.User{}, fmt.Errorf("error connecting to the mongodb client")
	}
	// user connection
	userCollection := client.Database("JOB_API").Collection("user")

	var existingUser models.User
	if err = userCollection.FindOne(context.TODO(), bson.M{"email": user.Email}).Decode(&existingUser); err != nil {
		log.Println("User not found with email:", user.Email)
		return models.User{}, fmt.Errorf("user not found")
	}

	if err := bcrypt.CompareHashAndPassword([]byte(existingUser.Password), []byte(user.Password)); err != nil {
		log.Println("Invalid password attempt for user:", user.Email)
		return models.User{}, fmt.Errorf("invalid password")
	}
	return existingUser, nil
}
