package services

import (
	"context"
	"fmt"
	"log"

	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/edidiesky/hirehalo/backend/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// @description  Get All User Services
// @route  GET /api/v1/user
// @access  Private/Admin
func GetAllUserService(filter bson.M, page int, pageSize int) ([]models.User, int64, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return nil, 0, fmt.Errorf("error connecting to the mongodb client")
	}
	UserCollection := client.Database("JOB_API").Collection("user")
	// pagination

	skip := (page - 1) * pageSize
	limit := pageSize
	findOptions := options.Find().SetSkip(int64(skip)).SetLimit(int64(limit))
	cursor, err := UserCollection.Find(context.TODO(), filter, findOptions)
	if err != nil {
		log.Printf("Error in getting the User: %v", err)
		return nil, 0, fmt.Errorf("error getting the User from the database")

	}
	defer cursor.Close(context.TODO())
	var User []models.User
	if err := cursor.All(context.TODO(), &User); err != nil {
		log.Printf("Error decoding the User data: %v", err)
		return nil, 0, fmt.Errorf("error decoding the User data")

	}
	// count the whole documents without the pagination
	count, err := UserCollection.CountDocuments(context.TODO(), findOptions)
	if err != nil {
		log.Printf("Error counting the User Data: %v", err)
		return nil, 0, fmt.Errorf("error counting the User Data")

	}

	return User, count, nil
}

// @description  Get A single User Service
// @route  GET /api/v1/User/:Userid
// @access  Public
func GetSingleUserService(filter bson.M) (models.User, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return models.User{}, fmt.Errorf("error connecting to the mongodb client")
	}
	UserCollection := client.Database("JOB_API").Collection("user")
	var user models.User

	if err = UserCollection.FindOne(context.TODO(), filter).Decode(&user); err != nil {
		log.Printf("Error in getting the User: %v", err)
		return models.User{}, fmt.Errorf("error getting the User from the database")

	}

	return user, nil
}

// @description  Delete A User Handler
// @route  DELETE /api/v1/user/:Userid
// @access  Private/Admin

func DeleteAUserService(filter primitive.M) (*mongo.DeleteResult, error) {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error: %v", err)
		return nil, fmt.Errorf("error connecting to the mongodb client")
	}
	UserCollection := client.Database("JOB_API").Collection("User")

	deleteResult, err := UserCollection.DeleteOne(context.TODO(), filter)
	if err != nil {
		log.Printf("Error in creating the User: %v", err)
		return nil, fmt.Errorf("error in deleting the User")
	}
	return deleteResult, nil
}
