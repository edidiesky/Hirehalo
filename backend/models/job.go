package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type Job struct {
	ID              primitive.ObjectID
	Title           string             `bson:"title"`
	Description     string             `bson:"description"`
	Company         string             `bson:"company"`
	Location        string             `bson:"location"`
	Remote          bool               `bson:"remote"`
	EmploymentType  string             `bson:"employmentType"`
	ExperienceLevel string             `bson:"ExperienceLevel"`
	Skills          []string           `bson:"skills"`
	Application     []Application      `bson:"application, noempty"`
	PostedAt        time.Time          `bson:"postedAt"`
	UpdatedAt       time.Time          `bson:"updatedAt"`
	AuthorId        primitive.ObjectID `bson:"authorId, noempty"`
}

type Application struct {
	ID                primitive.ObjectID
	ApplicantID       primitive.ObjectID  `bson:"applicantID"`
	AppliedAt         time.Time           `bson:"postedAt"`
	ApplicationStatus []ApplicationStatus `bson:"application"`
	ProgressUpdate    time.Time           `bson:"progressUpdate"`
}

type ApplicationStatus string

const (
	StatusApplied     ApplicationStatus = "APPLIED"
	StatusUnderReview ApplicationStatus = "UNDER_REVIEW"
	StatusInterview   ApplicationStatus = "INTERVIEW_SCHEDULED"
	StatusHired       ApplicationStatus = "HIRED"
	StatusRejected    ApplicationStatus = "REJECTED"
)


