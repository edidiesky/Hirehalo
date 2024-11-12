package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type JobType string

const (
	ONSITE JobType = "ON SITE"
	REMOTE JobType = "REMOTE"
	HRBRID JobType = "HYRBID"
)

type Job struct {
	ID              primitive.ObjectID
	CompanyLogo     string             `bson:"companyImage" validate:"required"`
	BgColor         string             `bson:"bgColor" validate:"required"`
	Salary          int                `bson:"salary" validate:"required"`
	Title           string             `bson:"title" validate:"required"`
	JobType         JobType            `bson:"jobtype"`
	Responsibility  []string           `bson:"responsibilites" validate:"required"`
	Description     string             `bson:"description" validate:"required"`
	Company         string             `bson:"company" validate:"required"`
	Location        string             `bson:"location" validate:"required"`
	EmploymentType  string             `bson:"employmentType" validate:"required"`
	ExperienceLevel string             `bson:"experienceLevel" validate:"required"`
	Experience      int                `bson:"experience" validate:"required"`
	Skills          []string           `bson:"skills" validate:"required"`
	Application     []Application      `bson:"application"`
	PostedAt        time.Time          `bson:"postedAt" validate:"required"`
	UpdatedAt       time.Time          `bson:"updatedAt" validate:"required"`
	AuthorId        primitive.ObjectID `bson:"authorId" validate:"required"`
}
