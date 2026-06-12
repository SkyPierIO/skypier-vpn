package utils

import (
	"encoding/json"
	"io"
	"log"
	"os"
	"path/filepath"
	"strings"

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
	Nickname                    string   `json:"nickname"`
	LogLevel                    string   `json:"logLevel"` // "debug", "info", "warn", "error" (default: "info")
	PrivateKey                  string   `json:"privateKey"`
	AdvertisePrivateAddresses   bool     `json:"advertisePrivateAddresses"`
	SwaggerEnabled              bool     `json:"swaggerEnabled"`
	DHTDiscovery                bool     `json:"dhtDiscovery"`
	NodeEnvironment             string   `json:"nodeEnvironment"`
	NodeTopicName               string   `json:"nodeTopicName"`
	NodeAnnouncementInterval    int      `json:"nodeAnnouncementIntervalSeconds"`
	NodeMetadataTTL             int      `json:"nodeMetadataTTLSeconds"`
	NodePubSubEnabled           bool     `json:"nodePubSubEnabled"`
	NodeRequireFreshForDial     bool     `json:"nodeRequireFreshForDial"`
	NodePubSubSeedPeers         []string `json:"nodePubSubSeedPeers"`
	NodePubSubMeshTargetPeers   int      `json:"nodePubSubMeshTargetPeers"`
	NodePubSubReconnectInterval int      `json:"nodePubSubReconnectIntervalSeconds"`
}

const defaultNodePubSubBootstrapPeerID = "16Uiu2HAkzHV1aH5R7rhayKSkUUMnXJa9EtU94SBHZUZJ5PPQauFd"

func defaultConfig() Config {
	return Config{
		Nickname:                    "MySkypierNode",
		LogLevel:                    "info",
		PrivateKey:                  "",
		AdvertisePrivateAddresses:   false,
		SwaggerEnabled:              true,
		DHTDiscovery:                false,
		NodeEnvironment:             "production",
		NodeTopicName:               "skypier-vpn-nodes-v1",
		NodeAnnouncementInterval:    20,
		NodeMetadataTTL:             120,
		NodePubSubEnabled:           true,
		NodeRequireFreshForDial:     true,
		NodePubSubSeedPeers:         []string{defaultNodePubSubBootstrapPeerID},
		NodePubSubMeshTargetPeers:   3,
		NodePubSubReconnectInterval: 30,
	}
}

func applyConfigDefaults(config *Config) {
	defaults := defaultConfig()

	if config.Nickname == "" {
		config.Nickname = defaults.Nickname
	}
	if config.LogLevel == "" {
		config.LogLevel = defaults.LogLevel
	}
	if config.NodeEnvironment == "" {
		config.NodeEnvironment = defaults.NodeEnvironment
	}
	if config.NodeTopicName == "" {
		config.NodeTopicName = defaults.NodeTopicName
	}
	if config.NodeAnnouncementInterval <= 0 {
		config.NodeAnnouncementInterval = defaults.NodeAnnouncementInterval
	}
	if config.NodeMetadataTTL <= 0 {
		config.NodeMetadataTTL = defaults.NodeMetadataTTL
	}
	if config.NodePubSubMeshTargetPeers <= 0 {
		config.NodePubSubMeshTargetPeers = defaults.NodePubSubMeshTargetPeers
	}
	if config.NodePubSubReconnectInterval <= 0 {
		config.NodePubSubReconnectInterval = defaults.NodePubSubReconnectInterval
	}
	if len(config.NodePubSubSeedPeers) == 0 {
		config.NodePubSubSeedPeers = append([]string{}, defaults.NodePubSubSeedPeers...)
	}
	config.NodePubSubSeedPeers = normalizeSeedPeers(config.NodePubSubSeedPeers)
}

func normalizeSeedPeers(seedPeers []string) []string {
	if len(seedPeers) == 0 {
		return []string{}
	}

	seen := make(map[string]struct{}, len(seedPeers))
	normalized := make([]string, 0, len(seedPeers))
	for _, seed := range seedPeers {
		trimmed := strings.TrimSpace(seed)
		if trimmed == "" {
			continue
		}
		if _, exists := seen[trimmed]; exists {
			continue
		}
		seen[trimmed] = struct{}{}
		normalized = append(normalized, trimmed)
	}

	return normalized
}

func LoadConfiguration(file string) (Config, error) {

	err := InitConfiguration(file)
	Check(err)

	var config Config
	configFile, err := os.Open(file)
	if err != nil {
		config = defaultConfig()
		return config, err
	} else {
		defer configFile.Close()

		rawContent, readErr := io.ReadAll(configFile)
		if readErr != nil {
			return defaultConfig(), readErr
		}

		if err := json.Unmarshal(rawContent, &config); err != nil {
			return defaultConfig(), err
		}

		var rawFields map[string]json.RawMessage
		if err := json.Unmarshal(rawContent, &rawFields); err == nil {
			if _, exists := rawFields["nodePubSubEnabled"]; !exists {
				config.NodePubSubEnabled = true
			}
			if _, exists := rawFields["nodeRequireFreshForDial"]; !exists {
				config.NodeRequireFreshForDial = true
			}
		}

		applyConfigDefaults(&config)
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
	_, err := os.Stat(filePath)
	return err == nil
}

func ensureConfigDir(file string) error {
	configDir := filepath.Dir(file)
	return os.MkdirAll(configDir, 0700)
}

func InitConfiguration(file string) error {
	if err := ensureConfigDir(file); err != nil {
		return err
	}

	if checkFileExists(file) {
		return nil
	} else {
		log.Println("Init configuration")
		config := defaultConfig()
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
	applyConfigDefaults(&config)
	content, err := json.MarshalIndent(config, "", "    ")
	Check(err)
	err = ensureConfigDir("/etc/skypier/config.json")
	Check(err)
	err = os.WriteFile("/etc/skypier/config.json", content, 0664)
	Check(err)
	return nil
}
