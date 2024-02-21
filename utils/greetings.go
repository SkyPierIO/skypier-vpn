package utils

import (
	"fmt"

	"github.com/mbndr/figlet4go"
)

func Greetings(message string) {
	fmt.Println("───────────────────────────────────────────────────")

	ascii := figlet4go.NewAsciiRender()
	options := figlet4go.NewRenderOptions()
	options.FontColor = []figlet4go.Color{figlet4go.ColorCyan}
	renderStr, err := ascii.RenderOpts("Skypier", options)

	fmt.Print(renderStr)
	Check(err)

	fmt.Println("\n───────────────────────────────────────────────────")
}
