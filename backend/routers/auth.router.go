package routers

import (
	"github.com/edidiesky/hirehalo/backend/handlers"
	"github.com/gofiber/fiber/v2"
)

// @description  Authentication router
// @route  /api/v1/auth
func AuthRoute(app *fiber.App) {
    authroute := app.Group("/api/v1/auth")

	authroute.Post("register", handlers.RegistrationHandler)
	authroute.Post("logout", handlers.LoginHandler)
	authroute.Post("login", handlers.LoginHandler)
	// authroute.Post("verify-email", authcontroller.VerifyMail)
	
}
