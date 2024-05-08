package ui

// SPA Middleware reference
// https://gist.github.com/SilverCory/bfe78075db4f72eff7ee604995c861f3

import (
	"embed"
	"io/fs"
	"net/http"
	"os"
	"path"
	"reflect"
	"runtime"
	"strings"
	"sync"

	"github.com/gin-gonic/gin"
)

//go:embed web/dist
var Content embed.FS

// uiPath is the root path for the UI to sit at.
const uiPath = "/"

type Handler struct {
	fileSystem http.FileSystem
	fileServer http.Handler

	once             sync.Once
	serveSPAFuncName string
}

func NewHandler() *Handler {
	// Open the web/dist folder.
	authorizeSite, err := fs.Sub(Content, "web/dist")
	if err != nil {
		panic(err)
	}

	fileSystem := http.FS(authorizeSite)
	return &Handler{
		fileSystem: fileSystem,
		fileServer: http.StripPrefix(uiPath, http.FileServer(fileSystem)),
	}
}

func (h *Handler) Register(e *gin.Engine) {
	e.Use(h.ServeSPA)
}

func (h *Handler) ServeSPA(c *gin.Context) {
	h.once.Do(func() {
		h.serveSPAFuncName = runtime.FuncForPC(reflect.ValueOf(h.ServeSPA).Pointer()).Name()
	})

	// Ensure it's only get and head requests
	if c.Request.Method != http.MethodGet && c.Request.Method != http.MethodHead {
		c.Next()
		return
	}

	// Ensure we're the last handler
	names := c.HandlerNames()
	if len(names) != 0 && names[len(names)-1] != h.serveSPAFuncName {
		c.Next()
		return
	}

	filePath := c.Request.URL.Path

	// Serve index, it's the index.
	if filePath == uiPath {
		h.fileServer.ServeHTTP(c.Writer, c.Request)
		return
	}

	// Open the file check it exists
	f, err := h.fileSystem.Open(strings.TrimPrefix(path.Clean(filePath), "/"))
	if err == nil {
		_ = f.Close()
	}

	// If it doesn't exist use the index.
	var req = c.Request
	if os.IsNotExist(err) {
		req = c.Request.Clone(c.Request.Context())
		req.URL.Path = uiPath
	}

	// Serve the file
	h.fileServer.ServeHTTP(c.Writer, req)
}
