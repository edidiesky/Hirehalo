package handlers

import (
	"log"
	"strconv"
	"strings"

	"github.com/edidiesky/hirehalo/backend/models"
	"github.com/edidiesky/hirehalo/backend/services"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// @description  Get All Jobs Handler
// @route  GET /api/v1/jobs
// @access  Public
func GetAllJobsHandler(c *fiber.Ctx) error {
	// define the filter parametr
	filterParams := bson.M{}
	// filter based on job title

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
	if joblocation := c.Query("joblocation"); joblocation != "" {
		filterParams["joblocation"] = bson.M{
			"$in": strings.Split(joblocation, ","),
		}
	}

	if role := c.Query("role"); role != "" {
		filterParams["title"] = bson.M{
			"$in": strings.Split(role, ","),
		}
	}
	if employmentType := c.Query("employmentType"); employmentType != "" {
		filterParams["employmentType"] = bson.M{
			"$in": strings.Split(employmentType, ","),
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
	job, count, err := services.GetAllJobsService(filterParams, page, pageSize)

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

// @description  Get A single Job Handler
// @route  GET /api/v1/jobs/:jobid
// @access  Public
func GetSingleJobsHandler(c *fiber.Ctx) error {
	filterParams := bson.M{}
	// filter based on job title
	jobParamId := c.Params("jobid")
	jobId, err := primitive.ObjectIDFromHex(jobParamId)
	if err != nil {
		log.Printf("Invalid Job Id %s, %v", jobParamId, err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid Job Id",
		})
	}
	filterParams["id"] = jobId
	job, err := services.GetSingleJobsService(filterParams)

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

		}
	}
	return c.Status(fiber.StatusOK).JSON(job)
}

// @description  Create A Job Handler
// @route  POST /api/v1/jobs/:jobid
// @access  Private
func CreateJobsHandler(c *fiber.Ctx) error {
	var jobsBodyParameter models.Job
	recruiterID := c.Locals("userid").(primitive.ObjectID)
	if err := c.BodyParser(&jobsBodyParameter); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error passing the formdata",
		})
	}
	jobsBodyParameter.AuthorId = recruiterID
	job, err := services.CreateAJobsService(jobsBodyParameter)

	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the mongodb client",
			})

		case "error in creating the job":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "error in creating the job",
			})

		}
	}
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"job": job,
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
