package utils

import (
	"encoding/json"
	"fmt"
	"os"
)

type Config struct {
	PrivateKey string `json:"privateKey"`
}

func LoadConfiguration(file string) Config {
	var config Config
	configFile, err := os.Open(file)
	if err != nil {
		fmt.Println("Loading default config...")
		config = Config{
			"PrivateKeyUndefined",
		}
		return config
	} else {
		defer configFile.Close()
		jsonParser := json.NewDecoder(configFile)
		jsonParser.Decode(&config)
		return config
	}
}
