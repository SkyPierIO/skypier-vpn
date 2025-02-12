package utils

import (
	"encoding/json"
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

// InnerConfig Struct is not loaded from an external configuration file
// This is the internal static config
type InnerConfig struct {
	Port            int
	Protocol        string
	ProtocolVersion string
}

// Config loaded from the configuration file
type Config struct {
	Nickname                  string `json:"nickname"`
	Debug                     bool   `json:"debug"`
	PrivateKey                string `json:"privateKey"`
	AdvertisePrivateAddresses bool   `json:"advertisePrivateAddresses"`
	SwaggerEnabled            bool   `json:"swaggerEnabled"`
	DHTDiscovery              bool   `json:"dhtDiscovery"`
}

func LoadConfiguration(file string) (Config, error) {

	err := InitConfiguration(file)
	Check(err)

	var config Config
	configFile, err := os.Open(file)
	if err != nil {
		config = Config{"MySkypierNode", false, "", false, true, false}
		return config, err
	} else {
		defer configFile.Close()
		jsonParser := json.NewDecoder(configFile)
		jsonParser.Decode(&config)
		return config, nil
	}
}

// ListAccounts godoc
// @Summary      Get the configuration
// @Description  Get the content of the configuration file
// @Tags         config
// @Produce      json
// @Success      200
// @Failure      400
// @Failure      404
// @Failure      500
// @Router       /getConfig [get]
func GetConfiguration(c *gin.Context) {
	configContent, err := LoadConfiguration("/etc/skypier/config.json")
	if err != nil {
		log.Fatal(err)
	}
	log.Println(configContent)
	c.IndentedJSON(200, configContent)
}

// UpdateConfig godoc
// @Summary      Update the configuration
// @Description  Update the content of the configuration file
// @Tags         config
// @Produce      json
// @Success      200
// @Failure      400
// @Failure      404
// @Failure      500
// @Router       /updateConfig [post]
func UpdateConfiguration(c *gin.Context) {
	var newConfig Config

	log.Println("Updating configuration")

	// Parse the incoming JSON
	if err := c.ShouldBindJSON(&newConfig); err != nil {
		log.Println("Invalid JSON", newConfig)
		c.JSON(400, gin.H{"error": "Invalid JSON"})
		return
	}

	// Validate the new configuration (add any specific validation logic if needed)
	if newConfig.Nickname == "" {
		c.JSON(400, gin.H{"error": "Nickname is required"})
		return
	}

	// Save the new configuration
	if err := SaveConfig(newConfig); err != nil {
		c.JSON(500, gin.H{"error": "Failed to save configuration"})
		return
	}

	c.JSON(200, gin.H{"message": "Configuration updated successfully"})

}

// TODO set config
// func SetConfiguration(c *gin.Context) {}

func checkFileExists(filePath string) bool {
	_, error := os.Open(filePath) // For read access.
	return error == nil
}

func InitConfiguration(file string) error {
	if checkFileExists(file) {
		return nil
	} else {
		log.Println("Init configuration")
		config := Config{"MySkypierNode", false, "", false, true, false}
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

func SaveConfig(config Config) error {
	content, err := json.MarshalIndent(config, "", "    ")
	Check(err)
	err = os.WriteFile("/etc/skypier/config.json", content, 0664)
	Check(err)
	return nil
}
