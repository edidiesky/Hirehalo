package handlers

import (
	"context"
	"fmt"
	"log"

	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/edidiesky/hirehalo/backend/models"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)


// @description  Get All Jobs Handler
// @route  GET /jobs
// @access  Public
func GetAllJobsHandler(c * fiber.Ctx)error {
	// define the filter parametr
	return  nil
}
