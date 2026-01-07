package utils

import (
	"fmt"
	"net/http"
	_ "net/http/pprof" // Import pprof for profiling endpoints
	"runtime"
)

// StartProfilingServer starts the pprof HTTP server for performance profiling
// Accessible endpoints:
//   - http://localhost:PORT/debug/pprof/           - Index page with all available profiles
//   - http://localhost:PORT/debug/pprof/profile    - CPU profile (30s default)
//   - http://localhost:PORT/debug/pprof/heap       - Memory allocation profile
//   - http://localhost:PORT/debug/pprof/goroutine  - Goroutine profile
//   - http://localhost:PORT/debug/pprof/block      - Blocking profile
//   - http://localhost:PORT/debug/pprof/mutex      - Mutex contention profile
//   - http://localhost:PORT/debug/pprof/threadcreate - Thread creation profile
//
// Usage from command line:
//
//	# CPU profile (30 seconds)
//	go tool pprof http://localhost:PORT/debug/pprof/profile?seconds=30
//
//	# Memory heap profile
//	go tool pprof http://localhost:PORT/debug/pprof/heap
//
//	# Goroutine profile
//	go tool pprof http://localhost:PORT/debug/pprof/goroutine
//
//	# Interactive web UI
//	go tool pprof -http=:8080 http://localhost:PORT/debug/pprof/profile?seconds=30
func StartProfilingServer(port int) {
	// Enable blocking profile (for channel/mutex contention analysis)
	runtime.SetBlockProfileRate(1)

	// Enable mutex profile (for mutex contention analysis)
	runtime.SetMutexProfileFraction(1)

	addr := fmt.Sprintf("localhost:%d", port)

	APILog.Info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	APILog.Info("📊 Performance Profiling Server Started")
	APILog.Info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	APILog.Info("  Address: http://%s/debug/pprof/", addr)
	APILog.Info("")
	APILog.Info("Available Profiles:")
	APILog.Info("  • CPU Profile (30s):  go tool pprof http://%s/debug/pprof/profile?seconds=30", addr)
	APILog.Info("  • Memory Heap:        go tool pprof http://%s/debug/pprof/heap", addr)
	APILog.Info("  • Goroutines:         go tool pprof http://%s/debug/pprof/goroutine", addr)
	APILog.Info("  • Block Profile:      go tool pprof http://%s/debug/pprof/block", addr)
	APILog.Info("  • Mutex Contention:   go tool pprof http://%s/debug/pprof/mutex", addr)
	APILog.Info("")
	APILog.Info("Interactive Web UI:")
	APILog.Info("  go tool pprof -http=:8080 http://%s/debug/pprof/profile?seconds=30", addr)
	APILog.Info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")

	go func() {
		if err := http.ListenAndServe(addr, nil); err != nil {
			APILog.Error("Profiling server failed to start: %v", err)
		}
	}()
}

// GetProfilingStats returns current profiling statistics
func GetProfilingStats() map[string]interface{} {
	var m runtime.MemStats
	runtime.ReadMemStats(&m)

	return map[string]interface{}{
		"goroutines":       runtime.NumGoroutine(),
		"cpu_count":        runtime.NumCPU(),
		"alloc_mb":         m.Alloc / 1024 / 1024,
		"total_alloc_mb":   m.TotalAlloc / 1024 / 1024,
		"sys_mb":           m.Sys / 1024 / 1024,
		"num_gc":           m.NumGC,
		"heap_objects":     m.HeapObjects,
		"heap_alloc_mb":    m.HeapAlloc / 1024 / 1024,
		"heap_sys_mb":      m.HeapSys / 1024 / 1024,
		"heap_idle_mb":     m.HeapIdle / 1024 / 1024,
		"heap_inuse_mb":    m.HeapInuse / 1024 / 1024,
		"heap_released_mb": m.HeapReleased / 1024 / 1024,
	}
}

// LogProfilingStats logs current runtime statistics
func LogProfilingStats() {
	stats := GetProfilingStats()

	APILog.Info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	APILog.Info("📈 Runtime Statistics")
	APILog.Info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
	APILog.Info("  Goroutines:        %d", stats["goroutines"])
	APILog.Info("  CPU Count:         %d", stats["cpu_count"])
	APILog.Info("  Memory Allocated:  %d MB", stats["alloc_mb"])
	APILog.Info("  Total Allocated:   %d MB", stats["total_alloc_mb"])
	APILog.Info("  System Memory:     %d MB", stats["sys_mb"])
	APILog.Info("  Heap Allocated:    %d MB", stats["heap_alloc_mb"])
	APILog.Info("  Heap In Use:       %d MB", stats["heap_inuse_mb"])
	APILog.Info("  GC Runs:           %d", stats["num_gc"])
	APILog.Info("  Heap Objects:      %d", stats["heap_objects"])
	APILog.Info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
}
