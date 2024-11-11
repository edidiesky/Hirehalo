package handlers

import (
	"github.com/edidiesky/hirehalo/backend/models"
	"github.com/edidiesky/hirehalo/backend/services"
	"github.com/edidiesky/hirehalo/backend/utils"
	"github.com/gofiber/fiber/v2"
	"log"
	"os"
	"time"
)

// @description  Registration Handler
// @route  POST /api/v1/auth/reguster
// @access  Public
func RegistrationHandler(c *fiber.Ctx) error {
	// define the body parameter
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
	newUser, err := services.RegistrationService(user)
	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "error getting the mongodb client",
			})
		case "error finding user in database":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "You do not have a record with Us!",
			})
		case "user already exists":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "you already exist as a user",
			})
		case "Error generating a hash password for the user":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "error generating a hash password for the user",
			})

		case "Error Inserting the user in the db":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "error Inserting the user in the db",
			})

		}
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

// @description  Login Handler
// @route  POST /api/v1/auth/login
// @access  Public
func LoginHandler(c *fiber.Ctx) error {
	// define the body parameter
	var user models.User

	// get the data from the user
	if err := c.BodyParser(&user); err != nil {
		log.Println("Error Formating the data received from the user", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Error Formating the data received from the user",
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
	existingUser, err := services.LoginService(user)
	if err != nil {
		switch err.Error() {
		case "error connecting to the mongodb client":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error getting the mongodb client",
			})
		case "You already exist as a user":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "You already exist as a user",
			})
		case "Error generating a hash password for the user":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error generating a hash password for the user",
			})

		case "Error Inserting the user in the db":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Error Inserting the user in the db",
			})
		case "user not found":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "You have no record with Us!",
			})
		case "invalid password":
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "Incorrect password!",
			})
		}
	}

	// generate token for the user
	userId := existingUser.ID.Hex()
	if err := utils.GenerateToken(c, userId, string(existingUser.Role)); err != nil {
		log.Println("Error generating token:", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error generating token",
		})
	}
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
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

// @description  Logout Handler
// @route  POST /api/v1/auth/logout
// @access  Public
func LogoutHandler(c *fiber.Ctx) error {
	expirationTime := time.Now().Add(0 * time.Hour)

	c.Cookie(&fiber.Cookie{
		Value:    "",
		Name:     "jwt",
		Expires:  expirationTime,
		SameSite: "None",
		HTTPOnly: true,
		Path:     "/",
		Secure:   os.Getenv("jwt") == "production",
	})
	return nil
}
