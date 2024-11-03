package controllers

import (
	"context"
	"log"

	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/edidiesky/hirehalo/backend/models"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// define our struct
type UserControllerStruct struct {
}

// return the pointer memory
func NewUserController() *UserControllerStruct {
	return &UserControllerStruct{}
}

// different functions to handle req and response

// @description  Get all User
// @route  GET /user
// @access  Public
func (ac *UserControllerStruct) GetAllUser(c *fiber.Ctx) error {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Database connection error:", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the mongodb client",
		})
	}
	userCollection := client.Database("JOB_API").Collection("user")
	var users []models.User
	cursor, err := userCollection.Find(context.TODO(), bson.M{})
	if err != nil {
		log.Printf("No user found:", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the users form the DB",
			"users":   users,
		})
	}
	for cursor.Next(context.TODO()) {
		var user models.User
		if err := cursor.Decode(&user); err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error Decoding the users from the database",
			})
		}
		users = append(users, user)
	}
	return c.JSON(fiber.Map{
		"message": "GetAllUser controller",
		"users":   users,
	})
}

func sanitizeUserInformation(user models.User) fiber.Map {
	return fiber.Map{
		"id":       user.ID.Hex(),
		"name":     user.Name,
		"email":    user.Email,
		"username": user.Username,
		"image":    user.Image,
		"role":     user.Role,
	}
}

// @description  Get all User
// @route  GET /user
// @access  Public
func (ac *UserControllerStruct) GetASingleUser(c *fiber.Ctx) error {
	mongoClient, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Failed to connect to MongoDB: %v", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Internal server error. Please try again later.",
		})
	}
	userCollection := mongoClient.Database("JOB_API").Collection("user")

	var user models.User
	IdParams := c.Params("id")
	// check if it is hexamdecimal
	userID, err := primitive.ObjectIDFromHex(IdParams)
	if err != nil {
		log.Printf("Invalid User Id %s, %v", userID, err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid User Id",
		})
	}
	err = userCollection.FindOne(context.TODO(), bson.M{"id": userID}).Decode(&user)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			// Log user not found and return a 404
			log.Printf("User not found with ID: %s", userID)
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"message": "User not found.",
			})
		}
		// Log unexpected errors and return a generic response
		log.Printf("Error fetching user with ID: %s, error: %v", userID, err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to retrieve user information.",
		})
	}
	return c.JSON(fiber.Map{
		"message": "GetASingleUser controller",
		"user":    sanitizeUserInformation(user),
	})
}

// @description  Update a single User
// @route  PUT /user/363738
// @access  Public
func (ac *UserControllerStruct) UpdateSingleUser(c *fiber.Ctx) error {
	mongoClient, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Failed to connect to MongoDB: %v", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Internal server error. Please try again later.",
		})
	}
	userCollection := mongoClient.Database("JOB_API").Collection("user")

	userId := c.Params("id")
	ObjectId, err := primitive.ObjectIDFromHex(userId)
	if err != nil {
		log.Printf("Incorrect User Id, %s %v", userId, err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Internal server error. Please try again later.",
		})
	}
	var update bson.M
	// parse the value
	if err := c.BodyParser(&update); err != nil {
		log.Printf("Error getting the parsing the user field, %v", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the parsing the user field",
		})
	}
	updates := bson.M{"$set": update}
	result, err := userCollection.UpdateOne(context.TODO(), bson.M{"id": ObjectId}, updates)
	if err != nil {
		log.Printf("Error Updating the user field, %v", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error Updating the user field",
		})
	}
	if result.MatchedCount == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	var updatedUser bson.M
	err = userCollection.FindOne(context.TODO(), bson.M{"_id": ObjectId}).Decode(&updatedUser)
	if err != nil {
		log.Printf("Error fetching updated user, %v", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error fetching updated user information",
		})
	}

	return c.JSON(fiber.Map{
		"message":       "User updated successfully",
		"modifiedCount": result.ModifiedCount,
		"user":          updatedUser, // Return the updated user information
	})
}

// @description  Delete a single User
// @route  DELETE /user/363738
// @access  Public
func (user *UserControllerStruct) DeleteASingleUser(c *fiber.Ctx) error {
	mongoClient, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Printf("Failed to connect to MongoDB: %v", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Internal server error. Please try again later.",
		})
	}
	userCollection := mongoClient.Database("JOB_API").Collection("user")

	userId := c.Params("id")
	ObjectId, err := primitive.ObjectIDFromHex(userId)
	if err != nil {
		log.Printf("Incorrect User Id, %s %v", userId, err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Internal server error. Please try again later.",
		})
	}
	deleteResult, err := userCollection.DeleteOne(context.TODO(), bson.M{"id": ObjectId})
	if err != nil {
		log.Printf("Error deleting user: %v", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error deleting the user",
		})
	}

	// Check if any document was deleted
	if deleteResult.DeletedCount == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	return c.JSON(fiber.Map{
		"message": "User deleted successfully",
	})
}
