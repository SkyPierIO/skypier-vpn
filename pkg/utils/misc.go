package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Check(err error) {
	if err != nil {
		panic(err)
	}
}

func IsDebugEnabled() bool {
	config, err := LoadConfiguration("./config.json")
	if err != nil {
		panic(err)
	} else {
		return config.Debug
	}
}

// Ping			 godoc
// @Summary      Ping the node locally from the UI
// @Description  Ping the node locally from the UI
// @Tags         VPN
// @Produce      json
// @Success      200
// @Router       /ping [get]
func Ping(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}

// Ok			 godoc
// @Summary      Default root API message
// @Description  Default root API message
// @Tags         VPN
// @Produce      json
// @Success      200
// @Router       / [get]
func Ok(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "OK",
	})
}
