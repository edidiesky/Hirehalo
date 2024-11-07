package handlers

import (
	"log"
	"strconv"
	"github.com/edidiesky/hirehalo/backend/services"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// @description  Get All user Handler
// @route  GET /api/v1/user
// @access  Private/Admin
func GetAllUsersHandler(c *fiber.Ctx) error {
	// define the filter parametr
	filterParams := bson.M{}
	// filter based on user title

	if Name := c.Query("Name"); Name != "" {
		filterParams["Name"] = bson.M{
			"$regex":   Name,
			"$options": "i",
		}
	}
	page, err := strconv.Atoi(c.Query("page", "1"))
	if err != nil || page <= 0 {
		page = 1
	}
	pageSize, err := strconv.Atoi(c.Query("pageSize", "10"))
	if err != nil || pageSize <= 0 {
		pageSize = 10
	}
	users, count, err := services.GetAllUserService(filterParams, page, pageSize)

	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the mongodb client",
			})

		case "no user found:":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the user from the database",
			})

		case "Error decoding the user data":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error decoding the user data",
			})

		}
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"count": count,
		"user":  users,
	})
}

// @description  Get A single Job Handler
// @route  GET /api/v1/user/:jobid
// @access  Public
func GetSingleUsersHandler(c *fiber.Ctx) error {
	filterParams := bson.M{}
	// filter based on user title
	jobParamId := c.Params("jobid")
	jobId, err := primitive.ObjectIDFromHex(jobParamId)
	if err != nil {
		log.Printf("Invalid Job Id %s, %v", jobParamId, err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid Job Id",
		})
	}
	filterParams["id"] = jobId
	user, err := services.GetSingleUserService(filterParams)

	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "error getting the mongodb client",
			})

		case "error getting the user from the database":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "error getting the user from the database",
			})

		}
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"user": user,
	})
}

// @description  Create A Job Handler
// @route  POST /api/v1/user/:jobid
// @access  Private
func DeleteUsersHandler(c *fiber.Ctx) error {
	filterParams := bson.M{}
	userId := c.Params("id")
	ObjectID, err := primitive.ObjectIDFromHex(userId)
	if err != nil {
		log.Printf("Incorrect User Id, %s %v", userId, err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Internal server error. Please try again later.",
		})
	}
	filterParams["id"] = ObjectID
	
	deleteResult, err := services.DeleteAUserService(filterParams)

	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the mongodb client",
			})

		case "error in creating the user":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "error in creating the user",
			})

		}
	}
	if deleteResult.DeletedCount == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	return c.JSON(fiber.Map{
		"message": "User deleted successfully",
	})
}

func UpdateUserHandler(c *fiber.Ctx) error {
	// define the filter parametr
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "UpdateJobHandler",
	})
}
