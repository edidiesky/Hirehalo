package routers

import (
	"github.com/edidiesky/hirehalo/backend/controllers"
	"github.com/edidiesky/hirehalo/backend/middleware"
	"github.com/gofiber/fiber/v2"
)

func JobRouter(app *fiber.App) {
	// get the job controller
	jobcontroller := controllers.NewJobController()
	// defining our job route
	jobrouter := app.Group("/api/v1/job")

	jobrouter.Get(":jobid", jobcontroller.GetASingleJob)
	jobrouter.Get("", jobcontroller.GetAllJob)
	jobrouter.Post("", middlewares.AuthMiddleware, middlewares.RoleMiddleware(middlewares.RoleRecruiter), jobcontroller.CreateASingleJob)

	jobrouter.Put(":jobid", middlewares.AuthMiddleware, middlewares.RoleMiddleware(middlewares.RoleRecruiter), jobcontroller.UpdateSingleJob)
	jobrouter.Delete(":jobid", middlewares.AuthMiddleware, middlewares.RoleMiddleware(middlewares.RoleRecruiter), jobcontroller.DeleteASingleJob)
}
