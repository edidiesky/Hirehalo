package routers

import (
	"github.com/edidiesky/hirehalo/backend/handlers"
	"github.com/edidiesky/hirehalo/backend/middleware"
	"github.com/gofiber/fiber/v2"
)

func UserRouter(app *fiber.App) {
	userrouter := app.Group("/api/v1/user")
	userrouter.Get("/", middlewares.RoleMiddleware(middlewares.RoleAdmin), handlers.GetAllUsersHandler)
	userrouter.Get("/:id", handlers.GetSingleUsersHandler)
	userrouter.Delete("/:id", handlers.DeleteUsersHandler)
	userrouter.Put("/:id", handlers.UpdateUserHandler)
}
