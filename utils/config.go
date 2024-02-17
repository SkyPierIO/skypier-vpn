package utils

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
)

type Config struct {
	PrivateKey                string `json:"privateKey"`
	AdvertisePrivateAddresses bool   `json:"adverstisePrivateAddresses"`
}

func LoadConfiguration(file string) (Config, error) {
	var config Config
	configFile, err := os.Open(file)
	if err != nil {
		config = Config{"", false}
		return config, err
	} else {
		defer configFile.Close()
		jsonParser := json.NewDecoder(configFile)
		jsonParser.Decode(&config)
		return config, nil
	}
}

func GetConfiguration(c *gin.Context) {
	configContent, err := LoadConfiguration("./config.json")
	if err != nil {
		panic(err)
	}
	fmt.Println(configContent)
	c.IndentedJSON(200, configContent)
}

func checkFileExists(filePath string) bool {
	_, error := os.Open(filePath) // For read access.
	return error == nil
}

func InitConfiguration(file string) error {
	isConfigPresent := checkFileExists(file)
	if isConfigPresent {
		return nil
	} else {
		fmt.Println("Init configuration")
		config := Config{"", false}
		content, err := json.MarshalIndent(config, "", "    ")
		if err != nil {
			return err
		}
		err = os.WriteFile(file, content, 0664)
		if err != nil {
			return err
		}
		return nil
	}
}
