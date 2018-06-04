package main

import (
	"github.com/vikram06/GoAngular/app"
	"github.com/vikram06/GoAngular/config"
)

func main() {
	config := config.GetConfig()

	app := &app.App{}
	app.Initialize(config)
	app.Run(":3000")
}
