# Go and Angular 6 REST API Example  (Working In Process)
A RESTful API example for simple todo application with Go and Angular 6

It is a just simple tutorial or example for making simple RESTful API with Go using **gorilla/mux** (A nice mux library) and **gorm** (An ORM for Go)

## Installation & Run
```bash
# Download this project
go get github.com/vikram06/GoAngular
```

Before running API server, you should set the database config with yours or set the your database config with my values on [config.go](https://github.com/vikram06/GoAngular/blob/master/config/config.go)
```go
func GetConfig() *Config {
	return &Config{
		DB: &DBConfig{
			Dialect:  "mysql",
			Username: "guest",
			Password: "Guest0000!",
			Name:     "todoapp",
			Charset:  "utf8",
		},
	}
}
```

```bash
# Build and Run
cd GoAngular
go build
./GoAngular

# API Endpoint : http://127.0.0.1:3000
```

## Structure
```
├── app
│   ├── app.go
│   ├── handler          // Our API core handlers
│   │   ├── common.go    // Common response functions
│   │   ├── projects.go  // APIs for Project model
│   │   └── tasks.go     // APIs for Task model
│   └── model
│       └── model.go     // Models for our application
├── config
│   └── config.go        // Configuration
└── main.go
```

## API

#### /projects
* `GET` : Get all projects
* `POST` : Create a new project

#### /projects/:title
* `GET` : Get a project
* `PUT` : Update a project
* `DELETE` : Delete a project

#### /projects/:title/archive
* `PUT` : Archive a project
* `DELETE` : Restore a project 

#### /projects/:title/tasks
* `GET` : Get all tasks of a project
* `POST` : Create a new task in a project

#### /projects/:title/tasks/:id
* `GET` : Get a task of a project
* `PUT` : Update a task of a project
* `DELETE` : Delete a task of a project

#### /projects/:title/tasks/:id/complete
* `PUT` : Complete a task of a project
* `DELETE` : Undo a task of a project

## Todo

- [x] Organize the code with packages
- [x] Angular Project
- [x] Support basic REST APIs. (GOLANG)
- [ ] Support Authentication with user for securing the APIs.
- [ ] Make convenient wrappers for creating API handlers.
- [ ] Write the tests for all APIs.
- [ ] Make docs with GoDoc
- [ ] Building a deployment process 
