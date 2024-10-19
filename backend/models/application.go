package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type ApplicationStatus string

const (
	StatusApplied     ApplicationStatus = "APPLIED"
	StatusUnderReview ApplicationStatus = "UNDER_REVIEW"
	StatusInterview   ApplicationStatus = "INTERVIEW_SCHEDULED"
	StatusHired       ApplicationStatus = "HIRED"
	StatusRejected    ApplicationStatus = "REJECTED"
)

type Application struct {
	ID              primitive.ObjectID
	Application     []Application      `bson:"application, noempty"`
	PostedAt        time.Time          `bson:"postedAt"`
	UpdatedAt       time.Time          `bson:"updatedAt"`
	AuthorId        primitive.ObjectID `bson:"authorId, noempty"`
	JobId           primitive.ObjectID `bson:"authorId, noempty"`
}
