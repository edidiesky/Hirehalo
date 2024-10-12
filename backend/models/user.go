package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type Role string
type User struct {
	ID                  primitive.ObjectID
	Name                string             `bson:"name" validate:"required"`
	Username            string             `bson:"username" validate:"required"`
	Password            string             `bson:"password" validate:"required"`
	Email               string             `bson:"email" validate:"required"`
	Image               string             `bson:"image"`
	Country             string             `bson:"country"`
	City                string             `bson:"city"`
	ResetPasswordToken  string             `bson:"resetPasswordToken"`
	VerifyPasswordToken string             `bson:"verifyPasswordToken"`
	Role                Role               `bson:"role, empty"`
	CreatedAt           time.Time          `bson:"createdAt, omitempty"`
	UpdatedAt           time.Time          `bson:"updatedAt, omitempty"`
}

const (
	RoleJobseeker Role = "JOB_SEEKER"
	RoleRecruiter Role = "JOB_RECRUITER"
	RoleAdmin     Role = "JOB_AdDMIN"
)
