package middlewares

import (
	"github.com/gofiber/fiber/v2"
)

type Role string

const (
	RoleJobseeker Role = "JOB_SEEKER"
	RoleRecruiter Role = "JOB_RECRUITER"
	RoleAdmin     Role = "JOB_ADMIN"
)

func RoleMiddleware(allowedRoles ...Role) fiber.Handler {
	return func(c *fiber.Ctx) error {
		role, ok := c.Locals("role").(Role)
		if !ok {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"message": "Not authorized, No roles assigned",
			})
		}
		for _, authorizedRoles := range allowedRoles {
			if role == authorizedRoles {
				return c.Next()
			}
		}
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "You are not allowed to perform this operation",
		})
	}
}
