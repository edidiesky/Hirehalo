package middlewares

import (
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
)


func AuthMiddleware(c *fiber.Ctx) error {
	// get the token from the  cookies
	tokenString := c.Cookies("jwt")
	// check for empty token
	if tokenString == "" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Not authorized, no toekn has been provided",
		})
	}
	// the get the token by parsing
	token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
		_, ok := t.Method.(*jwt.SigningMethodHMAC)
		if !ok {
			return nil, fmt.Errorf("error getting the signing method %v", t.Header["alg"])
		}
		return []byte(os.Getenv("jwt")), nil
	})

	// perform checks on the signed Token
	if err != nil || !token.Valid {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Toekn is not valid",
		})
	}
	// get the claims
	claims, ok := token.Claims.(jwt.MapClaims)

	// perform checks on the claims (validity and errors)
	if ok && token.Valid {
		// set to the local machine when passwed or return
		c.Locals("userid", claims["userid"])
	} else {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Claims is not valid",
		})
	}

	return c.Next()
}


// func AuthMiddleware (c * fiber.Ctx) error {
// 	// get the cookie
// 	tokenString := c.Cookies("jwt")
// 	// get the token parse

// 	// check for errors 
// 	// get the signed token
// 	// check for validity
// 	// return the c.Local
// 	c.Next()
// }