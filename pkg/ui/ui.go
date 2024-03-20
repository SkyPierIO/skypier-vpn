package ui

import (
	"embed"
	"io/fs"
	"net/http"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/pkg/browser"
)

func OpenWebBrowser(url string) {

	err := browser.OpenURL(url)
	utils.Check(err)

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
