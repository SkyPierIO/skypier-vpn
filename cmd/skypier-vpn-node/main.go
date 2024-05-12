package main

import (
	"log"
	"strconv"

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

	// CONFIGURATION
	utils.Greetings("Skypier")
	utils.InitConfiguration("/etc/skypier/config.json")
	config, err := utils.LoadConfiguration("/etc/skypier/config.json")
	utils.Check(err)
	innerConfig := utils.InnerConfig{
		Port:            8081,
		Protocol:        "skypier",
		ProtocolVersion: "1.0",
	}

	go vpn.SetInterfaceUp()
	go vpn.SetNodeUp(innerConfig)

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
	api.GET("/ping", utils.Ping)
	api.GET("/nickname", utils.Nickname)
	api.GET("/getConfig", utils.GetConfiguration)
	api.GET("/id", vpn.GetPeerId)

	// Add a route for Swagger UI if requested in the configuration
	if config.SwaggerEnabled {
		docs.SwaggerInfo.BasePath = "/api/v0"
		router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
		log.Println("Swagger UI available at http://skypier.localhost:8081/swagger/index.html")
	}

	// Run with HTTP
	router.Run("0.0.0.0:" + strconv.FormatUint(uint64(innerConfig.Port), 10))
}
