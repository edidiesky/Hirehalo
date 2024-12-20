package routers

import (
	"github.com/edidiesky/hirehalo/backend/middleware"
	"github.com/edidiesky/hirehalo/backend/handlers"
	"github.com/gofiber/fiber/v2"
)

func JobRouter(app *fiber.App) {
	// get the job controller
	// defining our job route
	jobrouter := app.Group("/api/v1/job")

	jobrouter.Get("", handlers.GetAllJobsHandler)
	jobrouter.Get(":jobid", handlers.GetSingleJobsHandler)
	jobrouter.Post("", middlewares.AuthMiddleware, middlewares.RoleMiddleware(middlewares.RoleRecruiter, middlewares.RoleAdmin), handlers.CreateJobsHandler)

	jobrouter.Put("/admin/:jobid", middlewares.AuthMiddleware, middlewares.RoleMiddleware(middlewares.RoleRecruiter, middlewares.RoleAdmin), handlers.UpdateJobHandler)
	jobrouter.Delete("/admin/:jobid", middlewares.AuthMiddleware, middlewares.RoleMiddleware(middlewares.RoleRecruiter, middlewares.RoleAdmin), handlers.DeleteJobHandler)
}
