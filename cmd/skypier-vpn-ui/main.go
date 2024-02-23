package main

import (
	"log"

	"github.com/SkyPierIO/skypier-vpn/pkg/ui"
)

func main() {
	go ui.LaunchUI()
	var webUI = "http://localhost:8081/"
	ui.OpenWebBrowser(webUI)
	log.Printf("🌎 Web UI: %s\n", webUI)
}
