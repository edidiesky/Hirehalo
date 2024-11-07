package routers

import (
	"github.com/edidiesky/hirehalo/backend/handlers"
	"github.com/edidiesky/hirehalo/backend/middleware"
	"github.com/gofiber/fiber/v2"
)

func ApplicationRouter(app *fiber.App) {
	// get the application controller
	// defining our application route
	applicationrouter := app.Group("/api/v1/application")

	applicationrouter.Get("", handlers.GetAllApplicationHandler)
	applicationrouter.Get(":applicationid", handlers.GetSingleApplicationHandler)
	applicationrouter.Post("", middlewares.AuthMiddleware, handlers.CreateApplicationHandler)

	applicationrouter.Put(":applicationid",
		middlewares.AuthMiddleware,
		middlewares.RoleMiddleware(middlewares.RoleRecruiter, middlewares.RoleAdmin),
		handlers.UpdateApplicationHandler)
	applicationrouter.Delete(":applicationid",
		middlewares.AuthMiddleware,
		middlewares.RoleMiddleware(middlewares.RoleRecruiter, middlewares.RoleAdmin), handlers.DeleteApplicationHandler)
}
