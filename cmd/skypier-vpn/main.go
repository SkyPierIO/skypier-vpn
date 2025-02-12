package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"strconv"
	"syscall"

	docs "github.com/SkyPierIO/skypier-vpn/pkg/docs"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	"github.com/SkyPierIO/skypier-vpn/pkg/ui"
	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/SkyPierIO/skypier-vpn/pkg/vpn"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// @title           Skypier
// @version         0.0.1
// @description     Skypier - Embark securely on web3

// @contact.name   Skypier
// @contact.url    http://skypier.io/
// @contact.email  info@skypier.io

// @license.name  MIT
// @license.url   https://choosealicense.com/licenses/mit/

// @host      localhost:8081
// @BasePath  /api/v0

// @externalDocs.description  OpenAPI
// @externalDocs.url          https://swagger.io/resources/open-api/
func main() {

	// var p string
	// fmt.Print("Unlock the app: ")
	// fmt.Scanln(&p)
	// utils.OedipusSphinx(p)

	// Catch SIGINT when Ctrl+C is pressed, and exit gracefully
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		log.Println("Exiting Skypier...")
		vpn.HandleExit()
		if err := utils.EnableIPv6(); err != nil {
			log.Fatalf("Error restablishing IPv6 addressing: %v", err)
		}
		os.Exit(0)
	}()

	utils.DefineAsNodeHost(false)

	// Setup System Context
	ctx := context.Background()

	// CONFIGURATION
	utils.Greetings("Skypier")
	configDir := "/etc/skypier"
	// Check if the directory exists
	log.Printf("Checking if directory %s exists", configDir)
	if _, err := os.Stat(configDir); os.IsNotExist(err) {
		// Create the directory
		err := os.MkdirAll(configDir, 0755)
		if err != nil {
			log.Fatalf("Failed to create directory %s: %v", configDir, err)
		} else {
			log.Printf("Directory %s created", configDir)
		}
	}
	utils.InitConfiguration("/etc/skypier/config.json")
	config, err := utils.LoadConfiguration("/etc/skypier/config.json")
	utils.Check(err)
	innerConfig := utils.InnerConfig{
		Port:            8081,
		Protocol:        "skypier",
		ProtocolVersion: "1.0",
	}

	// Disable IPv6 for Beta release
	// TODO: manage both IPv4 and IPv6 for the client
	// TODO: manage routing for IPv6
	if err := utils.DisableIPv6(); err != nil {
		log.Fatalf("Failed to disable IPv6: %v", err)
	}

	// go vpn.SetInterfaceUp()
	node, dht := vpn.SetNodeUp(ctx, innerConfig)
	if config.DHTDiscovery {
		go vpn.DiscoverPeersWithKademlia(ctx, node, dht)
	}

	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	router.SetTrustedProxies(nil)
	router.Use(cors.Default())

	// Recovery middleware recovers from any panics and writes a 500 if there was one.
	router.Use(gin.Recovery())

	// React SPA Middleware (must be last middleware declared)
	router.Use(ui.NewHandler().ServeSPA)
	log.Println("┌────────────────────────────────────────────────────┐")
	log.Printf("│ VPN UI available at http://skypier.localhost:%d/ │\n", innerConfig.Port)
	log.Println("└────────────────────────────────────────────────────┘\n")

	// API Router
	api := router.Group("/api/v0")
	api.GET("/", utils.Ok)
	api.GET("/id", vpn.GetLocalPeerId(node))
	api.GET("/me", vpn.GetLocalPeerDetails(node))
	api.GET("/ping", utils.Ping)
	api.GET("/quit", vpn.QuitSkypier)
	api.GET("/status", vpn.GetVPNStatus)
	api.GET("/nickname", utils.Nickname)
	api.GET("/getConfig", utils.GetConfiguration)
	api.GET("/ping/:peerId", vpn.TestConnectivity(node, dht))
	api.POST("/updateConfig", utils.UpdateConfiguration)
	api.GET("/connect/:peerId", vpn.Connect(node, dht))
	api.GET("/peer/:peerId/info", vpn.GetPeerIPAddresses(node, dht))
	api.GET("/disconnect/:peerId", vpn.Disconnect(node, dht))
	api.GET("/connected_peers_count", vpn.GetConnectedPeersCount(node, dht))

	// Add a route for Swagger UI if requested in the configuration
	if config.SwaggerEnabled {
		docs.SwaggerInfo.BasePath = "/api/v0"
		router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
		log.Println("Swagger UI available at http://skypier.localhost:8081/swagger/index.html")
	}

	// Run with HTTP
	err = router.Run("0.0.0.0:" + strconv.FormatUint(uint64(innerConfig.Port), 10))
	utils.Check(err)
}
