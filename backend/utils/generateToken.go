package utils

import (
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
)

func GenerateToken(c *fiber.Ctx, userid string) error {
	// expiration time
	expirationTime := time.Now().Add(72 * time.Hour)
	// claims
	claims := jwt.MapClaims{
		"exp":    expirationTime.Unix(),
		"userid": userid,
	}
	// performs newwithclaims method sig hs256 token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// get the signedToken with signing method
	signedToken, err := token.SignedString([]byte(os.Getenv("jwt")))
	// check for validity and returen cookie
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Failed to generate token",
		})
	}
	c.Cookie(&fiber.Cookie{
		Value:    signedToken,
		Name:     "jwt",
		Expires:  expirationTime,
		SameSite: "None",
		HTTPOnly: true,
		Path:     "/",
		Secure:   os.Getenv("jwt") == "production",
	})
	return nil
}
