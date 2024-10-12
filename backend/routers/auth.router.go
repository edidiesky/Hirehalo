package routers

import (
	// "fmt"
	"github.com/edidiesky/hirehalo/backend/controllers"
	"github.com/gofiber/fiber/v2"
)

// @description  Authentication router
// @route  /api/v1/auth
func AuthRoute(app *fiber.App) {
	// imported the auth controller file
	authcontroller := controllers.NewAuthController()
	authroute := app.Group("/api/v1/auth")
	authroute.Post("login", authcontroller.LoginAUser)
	authroute.Post("register", authcontroller.RegisterAUser)
	authroute.Post("logout", authcontroller.LogoutAUser)
	authroute.Post("verify-email", authcontroller.VerifyMail)
}
