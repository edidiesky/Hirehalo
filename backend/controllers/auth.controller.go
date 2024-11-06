package controllers

import (
	"context"
	"log"
	"time"

	"github.com/edidiesky/hirehalo/backend/dbconfig"
	"github.com/edidiesky/hirehalo/backend/models"
	"github.com/edidiesky/hirehalo/backend/utils"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	Email    string `bson:"email"`
	Password string `bson:"password"`
}

type AuthController struct {
}

func NewAuthController() *AuthController {
	return &AuthController{}
}

// @description  Register a new User
// @route  POST /auth/register
// @access  Public

func (ac *AuthController) RegisterAUser(c *fiber.Ctx) error {
	//
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Println("Database connection error:", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error getting the mongodb client",
		})
	}
	// getting our user collections from our db
	userCollection := client.Database("JOB_API").Collection("user")
	// instantiate a struct of our collection
	var user models.User

	// get the data from the user
	if err := c.BodyParser(&user); err != nil {
		log.Println("Error Formating the data received from the user", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error Formating the data received from the user",
		})
	}

	if user.Name == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Name is required",
		})
	}
	if user.Username == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Username is required",
		})
	}
	if user.Email == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Email is required",
		})
	}
	if user.Password == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Password is required",
		})
	}
	// check if a user exist
	var existingUser models.User
	if err := userCollection.FindOne(context.TODO(), bson.M{"email": user.Email}).Decode(&existingUser); err == nil {
		log.Println("You already exist as a user", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "You already exist as a user",
		})
	}
	hashedpassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		log.Println("Error generating a hash password for the user", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error generating a hash password for the user",
		})
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
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error Inserting the user in the db",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "succesfully generated a user",
		"user": fiber.Map{
			"id":        newUser.InsertedID,
			"name":      user.Name,
			"username":  user.Username,
			"email":     user.Email,
			"image":     user.Image,
			"country":   user.Country,
			"city":      user.City,
			"role":      user.Role,
			"createdAt": user.CreatedAt,
			"updatedAt": user.UpdatedAt,
		},
	})
}

// @description  Login a new User
// @route  POST /auth/login
// @access  Public
func (ac *AuthController) LoginAUser(c *fiber.Ctx) error {
	client, err := dbconfig.GetMongoDBClient()
	if err != nil {
		log.Println("Database connection error:", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Database connection error",
		})
	}

	userCollection := client.Database("JOB_API").Collection("user")
	var user models.User

	if err := c.BodyParser(&user); err != nil {
		log.Println("Form data parsing error:", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Form data parsing error",
		})
	}

	var existingUser models.User
	if err = userCollection.FindOne(context.TODO(), bson.M{"email": user.Email}).Decode(&existingUser); err != nil {
		log.Println("User not found with email:", user.Email)
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	if err := bcrypt.CompareHashAndPassword([]byte(existingUser.Password), []byte(user.Password)); err != nil {
		log.Println("Invalid password attempt for user:", user.Email)
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Invalid password",
		})
	}

	userId := existingUser.ID.Hex()
	if err := utils.GenerateToken(c, userId, string(existingUser.Role)); err != nil {
		log.Println("Error generating token:", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error generating token",
		})
	}

	return c.JSON(fiber.Map{
		"message": "Login successful",
		"user": fiber.Map{
			"email":    existingUser.Email,
			"name":     existingUser.Name,
			"username": existingUser.Username,
			"image":    existingUser.Image,
			"role":     existingUser.Role,
		},
	})
}

// @description  Logout a User
// @route  POST /auth/logout
// @access  Public
func (ac *AuthController) LogoutAUser(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "Login Controller",
	})
}

func (ac *AuthController) VerifyMail(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "Verification controller",
	})
}
