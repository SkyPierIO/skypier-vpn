package ui

import (
	"embed"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os/exec"
	"runtime"
)

func OpenWebBrowser(url string) {

	var err error

	switch runtime.GOOS {
	case "linux":
		err = exec.Command("xdg-open", url).Start()
	case "windows":
		err = exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	case "darwin":
		err = exec.Command("open", url).Start()
	default:
		err = fmt.Errorf("cannot open link in default browser: unsupported platform")
	}
	if err != nil {
		log.Fatal(err)
	}

}

var (
	//go:embed all:web/dist
	web embed.FS
)

func LaunchUI() {
	dist, err := fs.Sub(web, "web/dist")
	if err != nil {
		panic(err)
	}

	http.Handle(
		"/", http.FileServer(http.FS(dist)),
	)
	port := "8082"

	// go func() {
	// 	log.Fatal(http.ListenAndServe("127.0.0.1:"+port, nil))
	// }()
	http.ListenAndServe("127.0.0.1:"+port, nil)
}
