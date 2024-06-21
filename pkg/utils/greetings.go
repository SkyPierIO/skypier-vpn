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
	s, err := ascii.RenderOpts(message, options)

	fmt.Print(s)
	Check(err)

	fmt.Println("\n───────────────────────────────────────────────────")
}
