package main

import (
	"log"
	"strconv"

	docs "github.com/SkyPierIO/skypier-vpn/pkg/docs"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	"github.com/SkyPierIO/skypier-vpn/pkg/controllers"
	"github.com/SkyPierIO/skypier-vpn/pkg/ui"
	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
)

// @title           Swagger Skypier API
// @version         1.0
// @description     This is a Skypier VPN REST API.

// @contact.name   Skypier info
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
	utils.InitConfiguration("./config.json")
	innerConfig := utils.InnerConfig{
		Port:            8081,
		Protocol:        "skypier",
		ProtocolVersion: "1.0",
	}

	go controllers.SetNodeUp()
	go controllers.SetInterfaceUp()
	go ui.LaunchUI()
	var webUI = "http://localhost:8082/"
	ui.OpenWebBrowser(webUI)
	log.Printf("🌎 Web UI: %s\n", webUI)

	docs.SwaggerInfo.BasePath = "/api/v0"
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()
	router.Use(cors.Default())
	// Recovery middleware recovers from any panics and writes a 500 if there was one.
	router.Use(gin.Recovery())
	router.GET("/", func(c *gin.Context) {
		c.String(200, "OK")
	})
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))

	api := router.Group("/api/v0")
	api.GET("/", func(c *gin.Context) {
		c.String(200, "OK")
	})
	api.GET("/ping", func(c *gin.Context) {
		c.String(200, "pong")
	})
	api.GET("/getConfig", utils.GetConfiguration)

	// Run with HTTP
	router.Run("0.0.0.0:" + strconv.FormatUint(uint64(innerConfig.Port), 10))

}
