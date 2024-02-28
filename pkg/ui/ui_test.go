package ui

import (
	"io/fs"
	"testing"
)

func TestOpenFiles(t *testing.T) {
	for _, filename := range []string{
		"index.html",
	} {

		FS, _ := fs.Sub(web, "web/dist")
		_, err := FS.Open(filename)
		if err != nil {
			t.Fatalf("unable to open %s: %s", filename, err)
		}

	}
}
