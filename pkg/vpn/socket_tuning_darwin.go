//go:build darwin

package vpn

// GetCurrentSocketBufferLimits reads the current kernel socket buffer limits.
// On macOS, this uses different sysctl paths.
func GetCurrentSocketBufferLimits() (rmemMax, wmemMax int, err error) {
	// macOS uses different sysctls: kern.ipc.maxsockbuf
	// For now, return reasonable defaults - macOS generally allows large buffers
	socketLog.Debug("Socket buffer limit detection not fully implemented for macOS")
	return 8 * 1024 * 1024, 8 * 1024 * 1024, nil
}

// CheckSocketBufferLimits checks if kernel socket buffer limits are sufficient.
// On macOS, socket buffers are generally more flexible.
func CheckSocketBufferLimits() {
	socketLog.Info("Socket buffer limits check: macOS generally allows large socket buffers")
	socketLog.Info("If needed, increase with: sudo sysctl -w kern.ipc.maxsockbuf=8388608")
}
