package utils

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
)

func TestNickname(t *testing.T) {
	router := gin.Default()
	router.GET("/nickname", Nickname)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/nickname", nil)
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status code %d, but got %d", http.StatusOK, w.Code)
	}

	expected := `{"Nickname":"your-nickname"}`
	if w.Body.String() != expected {
		t.Errorf("Expected body %s, but got %s", expected, w.Body.String())
	}
}

func TestPing(t *testing.T) {
	router := gin.Default()
	router.GET("/ping", Ping)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/ping", nil)
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status code %d, but got %d", http.StatusOK, w.Code)
	}

	expected := `{"message":"pong"}`
	if w.Body.String() != expected {
		t.Errorf("Expected body %s, but got %s", expected, w.Body.String())
	}
}

func TestOk(t *testing.T) {
	router := gin.Default()
	router.GET("/", Ok)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/", nil)
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status code %d, but got %d", http.StatusOK, w.Code)
	}

	expected := `{"message":"OK"}`
	if w.Body.String() != expected {
		t.Errorf("Expected body %s, but got %s", expected, w.Body.String())
	}
}
