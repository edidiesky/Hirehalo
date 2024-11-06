package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type Job struct {
	ID              primitive.ObjectID
	CompanyLogo     string             `bson:"companyImage"`
	BgColor         string             `bson:"bgColor"`
	Title           string             `bson:"title, noempty"`
	Responsibility  []string           `bson:"responsibilites, noempty"`
	Description     string             `bson:"description, noempty"`
	Company         string             `bson:"company"`
	Location        string             `bson:"location"`
	Remote          bool               `bson:"remote"`
	EmploymentType  string             `bson:"employmentType"`
	ExperienceLevel string             `bson:"experienceLevel"`
	Experience      int                `bson:"experience"`
	Skills          []string           `bson:"skills"`
	Application     []Application      `bson:"application, noempty"`
	PostedAt        time.Time          `bson:"postedAt"`
	UpdatedAt       time.Time          `bson:"updatedAt"`
	AuthorId        primitive.ObjectID `bson:"authorId, noempty"`
}
