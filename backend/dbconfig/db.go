package dbconfig

import (
	"context"
	"os"
	"sync"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// define the client and mongo once instance
var clientInstance *mongo.Client
var clientInstaceError error
var mongoOnce sync.Once

func GetMongoDBClient() (*mongo.Client, error) {
	// call this function once if only it has been called
	mongoOnce.Do(
		func() {
			clientOptions:= options.Client().ApplyURI(os.Getenv("DATABASE_URL"))
			client, err := mongo.Connect(context.TODO(), clientOptions)
			clientInstance = client
			clientInstaceError = err
		},
	)
	return 	clientInstance , clientInstaceError 
}
