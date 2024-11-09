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

	// Get Users Job Application Route
	applicationrouter.Post(":jobid", middlewares.AuthMiddleware, handlers.CreateApplicationHandler)
	applicationrouter.Get("jobsapplied", middlewares.AuthMiddleware, handlers.GetUserApplicationHandler)
	// Get Users Job Application Route END

	// ------------ ADMIN /RECRUITER -----------------------/
	applicationrouter.Get("/admin/:applicationid",
		middlewares.AuthMiddleware,
		middlewares.RoleMiddleware(middlewares.RoleRecruiter, middlewares.RoleAdmin),
		handlers.GetSingleApplicationHandler)

	applicationrouter.Get("/admin",
		middlewares.AuthMiddleware,
		middlewares.RoleMiddleware(middlewares.RoleRecruiter, middlewares.RoleAdmin), handlers.GetAllApplicationHandler)

	applicationrouter.Put("/admin/:applicationid",
		middlewares.AuthMiddleware,
		middlewares.RoleMiddleware(middlewares.RoleRecruiter, middlewares.RoleAdmin),
		handlers.UpdateApplicationHandler)

	applicationrouter.Delete("/admin/:applicationid",
		middlewares.AuthMiddleware,
		middlewares.RoleMiddleware(middlewares.RoleRecruiter, middlewares.RoleAdmin),
		handlers.DeleteApplicationHandler)
	// ------------ ADMIN /RECRUITER -----------------------/

}
