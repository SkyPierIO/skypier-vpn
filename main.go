package main

import (
	"log"
	"strconv"

	"github.com/SkyPierIO/skypier-vpn/controllers"
	"github.com/SkyPierIO/skypier-vpn/ui"
	"github.com/SkyPierIO/skypier-vpn/utils"
	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
)

type InnerConfig struct {
	Port            int
	Protocol        string
	ProtocolVersion string
}

func main() {

	utils.InitConfiguration("./config.json")
	config := InnerConfig{8081, "skypier", "1.0"}

	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()
	router.Use(cors.Default())

	go controllers.SetNodeUp()
	go controllers.SetInterfaceUp()
	go ui.LaunchUI()
	var webUI = "http://localhost:8082"
	ui.OpenWebBrowser(webUI)
	log.Printf("🌎 Web UI: %s\n", webUI)

	// Recovery middleware recovers from any panics and writes a 500 if there was one.
	router.Use(gin.Recovery())
	router.GET("/", func(c *gin.Context) {
		c.String(200, "OK")
	})

	api := router.Group("/api/v0")
	api.GET("/", func(c *gin.Context) {
		c.String(200, "OK")
	})
	api.GET("/ping", func(c *gin.Context) {
		c.String(200, "pong")
	})
	api.GET("/getConfig", utils.GetConfiguration)
	// api.GET("/init", controllers.SetNodeUp)
	// api.GET("/streams", controllers.ListStreams)
	// api.GET("/listeners", controllers.ListListeners)
	// api.GET("/peers", controllers.ShowPeers)
	// api.GET("/forward/:nodeID", controllers.Forward)
	// api.GET("/ping/:nodeID", controllers.Ping)
	// api.GET("/id", controllers.GetID)
	// Enable the Listener by default on the proxy port
	// protocol := "/x/skypier/1.0"

	// Run with HTTP
	router.Run("0.0.0.0:" + strconv.FormatUint(uint64(config.Port), 10))

}
