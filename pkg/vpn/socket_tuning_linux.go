//go:build linux

package vpn

import (
	"os"
	"strconv"
	"strings"
)

// GetCurrentSocketBufferLimits reads the current kernel socket buffer limits from sysctl.
// Returns rmem_max, wmem_max, and any error.
func GetCurrentSocketBufferLimits() (rmemMax, wmemMax int, err error) {
	rmemMax, err = readSysctl("/proc/sys/net/core/rmem_max")
	if err != nil {
		return 0, 0, err
	}

	wmemMax, err = readSysctl("/proc/sys/net/core/wmem_max")
	if err != nil {
		return 0, 0, err
	}

	return rmemMax, wmemMax, nil
}

// CheckSocketBufferLimits checks if kernel socket buffer limits are sufficient
// and logs warnings if they are too low.
func CheckSocketBufferLimits() {
	rmemMax, wmemMax, err := GetCurrentSocketBufferLimits()
	if err != nil {
		socketLog.Warn("Could not read kernel socket buffer limits: %v", err)
		return
	}

	socketLog.Info("Current kernel socket buffer limits: rmem_max=%dKB, wmem_max=%dKB",
		rmemMax/1024, wmemMax/1024)

	needsTuning := false
	if rmemMax < MinRecommendedBufferSize {
		socketLog.Warn("rmem_max (%dKB) is below recommended %dKB for optimal VPN throughput",
			rmemMax/1024, MinRecommendedBufferSize/1024)
		needsTuning = true
	}
	if wmemMax < MinRecommendedBufferSize {
		socketLog.Warn("wmem_max (%dKB) is below recommended %dKB for optimal VPN throughput",
			wmemMax/1024, MinRecommendedBufferSize/1024)
		needsTuning = true
	}

	if needsTuning {
		LogSocketBufferRecommendations()
	} else {
		socketLog.Info("Kernel socket buffer limits are sufficient for high-throughput VPN")
	}
}

// readSysctl reads an integer value from a sysctl pseudo-file.
func readSysctl(path string) (int, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return 0, err
	}
	return strconv.Atoi(strings.TrimSpace(string(data)))
}
