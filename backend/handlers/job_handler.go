package handlers

import (
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
	job, err := services.GetAllJobsServices(fiterParams)

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
	return c.Status(fiber.StatusOK).JSON(job)
}

func GetSingleJobsHandler(c *fiber.Ctx) error {
	// define the filter parametr
	fiterParams := bson.M{}
	job, err := services.GetAllJobsServices(fiterParams)

	if err.Error() == "error connecting to the mongodb client" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the mongodb client",
		})
	}
	if err.Error() == "error getting the jobs from the database" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the jobs from the database",
		})
	}
	if err.Error() == "Error decoding the job data" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error decoding the job data",
		})
	}
	return c.Status(fiber.StatusOK).JSON(job)
}

func CreateJobsHandler(c *fiber.Ctx) error {
	// define the filter parametr
	fiterParams := bson.M{}
	job, err := services.GetAllJobsServices(fiterParams)

	if err.Error() == "error connecting to the mongodb client" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the mongodb client",
		})
	}
	if err.Error() == "error getting the jobs from the database" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the jobs from the database",
		})
	}
	if err.Error() == "Error decoding the job data" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error decoding the job data",
		})
	}
	return c.Status(fiber.StatusOK).JSON(job)
}

func UpdateJobHandler(c *fiber.Ctx) error {
	// define the filter parametr
	fiterParams := bson.M{}
	job, err := services.GetAllJobsServices(fiterParams)

	if err.Error() == "error connecting to the mongodb client" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the mongodb client",
		})
	}
	if err.Error() == "error getting the jobs from the database" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the jobs from the database",
		})
	}
	if err.Error() == "Error decoding the job data" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error decoding the job data",
		})
	}
	return c.Status(fiber.StatusOK).JSON(job)
}

func DeleteJobHandler(c *fiber.Ctx) error {
	// define the filter parametr
	fiterParams := bson.M{}
	job, err := services.GetAllJobsServices(fiterParams)

	if err.Error() == "error connecting to the mongodb client" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the mongodb client",
		})
	}
	if err.Error() == "error getting the jobs from the database" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the jobs from the database",
		})
	}
	if err.Error() == "Error decoding the job data" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error decoding the job data",
		})
	}
	return c.Status(fiber.StatusOK).JSON(job)
}
