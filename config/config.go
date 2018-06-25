package config

type Config struct {
	DB *DBConfig
}

type DBConfig struct {
	Dialect  string
	Username string
	Password string
	Name     string
	Charset  string
}

func GetConfig() *Config {
	return &Config{
		DB: &DBConfig{
			Dialect:  "mssql",
			Username: "lend_usr",
			Password: "laps@123",
			Name:     "192.168.0.216",
			Charset:  "utf8",
		},
	}
}
