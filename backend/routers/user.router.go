package routers

import (
	"github.com/edidiesky/Go_Job_Backend/controllers"
	"github.com/edidiesky/Go_Job_Backend/middleware"
	"github.com/gofiber/fiber/v2"
)

func UserRouter(app *fiber.App) {
	usercontroller := controllers.NewUserController()
	userrouter := app.Group("/api/v1/user")
	userrouter.Get("/", middlewares.RoleMiddleware(middlewares.RoleAdmin), usercontroller.GetAllUser)
	userrouter.Get("/:id", usercontroller.GetASingleUser)
	userrouter.Delete("/:id", usercontroller.DeleteASingleUser)
	userrouter.Put("/:id", usercontroller.UpdateSingleUser)
}
