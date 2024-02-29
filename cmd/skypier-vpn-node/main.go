package main

import (
	"log"
	"strconv"

	docs "github.com/SkyPierIO/skypier-vpn/pkg/docs"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/SkyPierIO/skypier-vpn/pkg/vpn"

	"github.com/gin-gonic/contrib/static"
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
	utils.InitConfiguration("./config.json")
	config, err := utils.LoadConfiguration("./config.json")
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
	// router.Use(cors.Default())

	// Recovery middleware recovers from any panics and writes a 500 if there was one.
	router.Use(gin.Recovery())

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./pkg/ui/web/dist", true)))

	// API Router
	api := router.Group("/api/v0")
	api.GET("/", utils.Ok)
	api.GET("/ping", utils.Ping)
	api.GET("/getConfig", utils.GetConfiguration)
	api.GET("/id", vpn.GetPeerId)

	// Add a route for Swagger UI if requested in the configuration
	if config.SwaggerEnabled {
		docs.SwaggerInfo.BasePath = "/api/v0"
		router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))
		log.Println("Swagger UI available at http://127.0.0.1:8081/swagger/index.html")
	}

	// Run with HTTP
	router.Run("0.0.0.0:" + strconv.FormatUint(uint64(innerConfig.Port), 10))

}
