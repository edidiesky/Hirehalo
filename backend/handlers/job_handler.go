package handlers

import (
	"strconv"

	"github.com/edidiesky/hirehalo/backend/services"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
)

// @description  Get All Jobs Handler
// @route  GET /api/v1/jobs
// @access  Public
func GetAllJobsHandler(c *fiber.Ctx) error {
	// define the filter parametr
	fiterParams := bson.M{}
	// filter based on job title

	if title := c.Query("title"); title != "" {
		fiterParams["title"] = bson.M{
			"$regex":   title,
			"$options": "i",
		}
	}
	// filter based on company
	if company := c.Query("company"); company != "" {
		fiterParams["company"] = bson.M{
			"$regex":   company,
			"$options": "i",
		}
	}
	// filter based on location
	if location := c.Query("location"); location != "" {
		fiterParams["location"] = bson.M{
			"$regex":   location,
			"$options": "i",
		}
	}
	if remote := c.Query("remote"); remote != "" {
		// Convert to bool (assuming "true" means remote)
		if remote == "true" {
			fiterParams["remote"] = true
		} else {
			fiterParams["remote"] = false
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
	job, count, err := services.GetAllJobsServices(fiterParams, page, pageSize)

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

		case "Error decoding the job data":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error decoding the job data",
			})

		}
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"count": count,
		"job":   job,
	})
}

func GetSingleJobsHandler(c *fiber.Ctx) error {
	// define the filter parametr

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "GetSingleJobsHandler",
	})
}

func CreateJobsHandler(c *fiber.Ctx) error {
	// define the filter parametr
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "CreateJobsHandler",
	})
}

func UpdateJobHandler(c *fiber.Ctx) error {
	// define the filter parametr
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "UpdateJobHandler",
	})
}

func DeleteJobHandler(c *fiber.Ctx) error {
	// define the filter parametr
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "DeleteJobHandler",
	})
}
