package controllers

import (
	"context"

	"github.com/edidiesky/Go_Job_Backend/dbconfig"
	"github.com/edidiesky/Go_Job_Backend/models"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// define our struct
type JobControllerStruct struct{}

// return the pointer memory
func NewJobController() *JobControllerStruct {
	return &JobControllerStruct{}
}

// different functions to handle req and response

// @description  Get all Job
// @route  GET /Job
// @access  Public
func (Job *JobControllerStruct) GetAllJob(c *fiber.Ctx) error {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "An error did occurred",
		})
	}
	var jobs []models.Job
	jobCollection := client.Database("JOB_API").Collection("jobs")

	cursor, err := jobCollection.Find(context.TODO(), bson.D{primitive.E{}})
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "An error did occurred",
		})
	}
	for cursor.Next(context.TODO()) {
		var job models.Job
		err = cursor.Decode(job)
		if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "An error did occurred",
		})
	}
		jobs = append(jobs, job)

	}
	return c.JSON(fiber.Map{
		"message": "GetAllJob controller",
		"jobs":    jobs,
	})
}

// @description  Get all Job
// @route  GET /Job
// @access  Public
func (Job *JobControllerStruct) GetASingleJob(c *fiber.Ctx) error {
	// get the client
	// get the job id from params
	// get the job id from params
	return c.JSON(fiber.Map{
		"message": "GetASingleJob controller",
	})
}

// @description  Create a single Job
// @route  Post /Job
// @access  Public
func (Job *JobControllerStruct) CreateASingleJob(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "CreateASingleJob controller",
	})
}

// @description  Update a single Job
// @route  PUT /Job/363738
// @access  Public
func (Job *JobControllerStruct) UpdateSingleJob(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "UpdateSingleJob controller",
	})
}

// @description  Delete a single Job
// @route  DELETE /Job/363738
// @access  Public
func (Job *JobControllerStruct) DeleteASingleJob(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "DeleteASingleJob controller",
	})
}
