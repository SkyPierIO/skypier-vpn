package main

import (
	"log"

	"github.com/SkyPierIO/skypier-vpn/pkg/ui"
)

func main() {
	var webUI = "http://localhost:8082/"
	log.Printf("🌎 Web UI: %s\n", webUI)
	go ui.OpenWebBrowser(webUI)
	ui.LaunchUI()
}
