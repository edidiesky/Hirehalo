package handlers

import (
	"github.com/edidiesky/hirehalo/backend/models"
	"github.com/edidiesky/hirehalo/backend/services"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"log"
	"strconv"
	"time"
)

// @description  Get All Application Handler
// @route  GET /api/v1/Application
// @access  Public
func GetAllApplicationHandler(c *fiber.Ctx) error {
	// define the filter parametr
	filterParams := bson.M{}
	// filter based on Application title

	if title := c.Query("title"); title != "" {
		filterParams["title"] = bson.M{
			"$regex":   title,
			"$options": "i",
		}
	}
	// filter based on company
	if company := c.Query("company"); company != "" {
		filterParams["company"] = bson.M{
			"$regex":   company,
			"$options": "i",
		}
	}
	// filter based on location
	if location := c.Query("location"); location != "" {
		filterParams["location"] = bson.M{
			"$regex":   location,
			"$options": "i",
		}
	}
	if remote := c.Query("remote"); remote != "" {
		// Convert to bool (assuming "true" means remote)
		if remote == "true" {
			filterParams["remote"] = true
		} else {
			filterParams["remote"] = false
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
	Application, count, err := services.GetAllApplicationService(filterParams, page, pageSize)

	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the mongodb client",
			})

		case "error getting the Application from the database":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the Application from the database",
			})

		case "Error decoding the Application data":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error decoding the Application data",
			})

		}
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"count":       count,
		"Application": Application,
	})
}

// @description  Get A single Application Handler
// @route  GET /api/v1/Application/:Applicationid
// @access  Public
func GetSingleApplicationHandler(c *fiber.Ctx) error {
	filterParams := bson.M{}
	// filter based on Application title
	ApplicationParamId := c.Params("Applicationid")
	ApplicationId, err := primitive.ObjectIDFromHex(ApplicationParamId)
	if err != nil {
		log.Printf("Invalid Application Id %s, %v", ApplicationParamId, err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid Application Id",
		})
	}
	filterParams["id"] = ApplicationId
	Application, err := services.GetSingleApplicationService(filterParams)

	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the mongodb client",
			})

		case "error getting the Application from the database":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the Application from the database",
			})

		}
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Application": Application,
	})
}

// @description  Create A Application Handler
// @route  POST /api/v1/Application/:Applicationid
// @access  Private
func CreateApplicationHandler(c *fiber.Ctx) error {
	var ApplicationBodyParameter models.Application
	userIDStr, ok := c.Locals("userid").(string)
	if !ok {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid user ID",
		})
	}
	userID, err := primitive.ObjectIDFromHex(userIDStr)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid user ID format",
		})
	}
	jobParamsID := c.Params("jobid")
	jobID, err := primitive.ObjectIDFromHex(jobParamsID)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error, Invalide Job ID",
		})
	}

	ApplicationBodyParameter.AuthorId = userID
	ApplicationBodyParameter.JobId = jobID
	ApplicationBodyParameter.PostedAt = time.Now()
	ApplicationBodyParameter.UpdatedAt = time.Now()
	ApplicationBodyParameter.Application = "APPLIED"
	Application, err := services.CreateApplicationService(ApplicationBodyParameter)

	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the mongodb client",
			})

		case "error in creating the Application":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error in creating the Application",
			})
		case "error starting the database session":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Internal Server Error",
			})
		case "job not found":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "job not found",
			})
		case "transaction failed, user has already applied for this job":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "User has already applied for this job",
			})
		case "error updating job":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Internal Server Error",
			})

		case "error committing transaction":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error committing transaction",
			})
		case "error checking existing applications":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error checking existing applications",
			})

		case "error inserting application":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error inserting application",
			})

		case "expected *mongo.InsertOneResult but got":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "expected *mongo.InsertOneResult but got",
			})

		case "unexpected error: result is nil":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "unexpected error: result is nil",
			})

		default:
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "User has already applied for this job",
			})
		}
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Application": Application,
	})
}

// @description  Get A User Job Application Handler
// @route  GET /api/v1/Application/
// @access  Public
func GetUserApplicationHandler(c *fiber.Ctx) error {
	// filter based on Application title
	UserParamId, ok := c.Locals("userid").(string)
	if !ok || UserParamId == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid or missing user ID",
		})
	}
	jobs, err := services.GetUserApplicationService(UserParamId)

	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the mongodb client",
			})

		case "error getting the jobs from the database":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the jobs from the database",
			})
		case "error getting the job from the database":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Internal Server Error! we could not get the job",
			})

		case "error decoding jobs":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Internal Server Error! we could not get the job",
			})
		}
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"jobs": jobs,
	})
}

func UpdateApplicationHandler(c *fiber.Ctx) error {
	// define the filter parametr
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "UpdateApplicationHandler",
	})
}

func DeleteApplicationHandler(c *fiber.Ctx) error {
	// define the filter parametr
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "DeleteApplicationHandler",
	})
}
