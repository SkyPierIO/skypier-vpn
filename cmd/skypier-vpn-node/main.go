package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"strconv"
	"syscall"

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

	// Catch SIGINT when Ctrl+C is pressed, and exit gracefully
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		log.Println("Exiting Skypier...")
		vpn.HandleExit()
		os.Exit(1)
	}()

	utils.DefineAsNodeHost(true)

	// Setup System Context
	ctx := context.Background()

	// CONFIGURATION
	utils.Greetings("Skypier Node")
	utils.InitConfiguration("/etc/skypier/config.json")
	innerConfig := utils.InnerConfig{
		Port:            8081,
		Protocol:        "skypier",
		ProtocolVersion: "1.0",
	}

	// go vpn.SetInterfaceUp()
	node, dht := vpn.SetNodeUp(ctx, innerConfig)

	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	router.SetTrustedProxies(nil)
	router.Use(cors.Default())

	// Recovery middleware recovers from any panics and writes a 500 if there was one.
	router.Use(gin.Recovery())

	// React SPA Middleware (must be last middleware declared)
	router.Use(ui.NewHandler().ServeSPA)
	log.Printf("VPN UI available at http://skypier.localhost:%d/\n", innerConfig.Port)

	// API Router
	api := router.Group("/api/v0")
	api.GET("/", utils.Ok)
	api.GET("/id", vpn.GetLocalPeerId(node))
	api.GET("/me", vpn.GetLocalPeerDetails(node))
	api.GET("/ping", utils.Ping)
	api.GET("/nickname", utils.Nickname)
	api.GET("/getConfig", utils.GetConfiguration)
	api.GET("/ping/:peerId", vpn.TestConnectivity(node, dht))
	api.GET("/connect/:peerId", vpn.Connect(node, dht))

	// Run with HTTP
	err := router.Run("127.0.0.1:" + strconv.FormatUint(uint64(innerConfig.Port), 10))
	utils.Check(err)
}
