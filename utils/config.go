package utils

import (
	"encoding/json"
	"fmt"
	"os"
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

func checkFileExists(filePath string) bool {
	_, error := os.Open(filePath) // For read access.
	return error == nil

}

func InitConfiguration() error {

	isConfigPresent := checkFileExists("./config.json")

	if isConfigPresent {
		fmt.Println("file exist")
		return nil
	} else {
		fmt.Println("file not exists")
		config := Config{"", false}
		file, err := json.MarshalIndent(config, "", " ")
		if err != nil {
			return err
		}
		err = os.WriteFile("test.json", file, 0644)
		if err != nil {
			return err
		}
		return nil
	}
}
