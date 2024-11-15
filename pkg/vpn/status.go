package vpn

import (
	"fmt"
	"os/exec"
	"runtime"
	"strings"

	"net/http"

	"github.com/gin-gonic/gin"
)

type VPNStatus struct {
	Status  string `json:"status"`
	IP      string `json:"ip,omitempty"`
	PeerID  string `json:"peer_id,omitempty"`
	Country string `json:"country,omitempty"`
}

// IsTUNInterfaceUp checks if a TUN interface is up on the machine for a given name.
func IsTUNInterfaceUp(interfaceName string) (bool, error) {
	switch runtime.GOOS {
	case "linux":
		return isTUNInterfaceUpLinux(interfaceName)
	case "darwin":
		return isTUNInterfaceUpMacOS(interfaceName)
	case "windows":
		return isTUNInterfaceUpWindows(interfaceName)
	default:
		return false, fmt.Errorf("unsupported operating system: %s", runtime.GOOS)
	}
}

func isTUNInterfaceUpLinux(interfaceName string) (bool, error) {
	cmd := exec.Command("ip", "addr", "show", "dev", interfaceName)
	output, err := cmd.Output()
	if err != nil {
		return false, err
	}
	return strings.Contains(string(output), interfaceName), nil
}

func isTUNInterfaceUpMacOS(interfaceName string) (bool, error) {
	cmd := exec.Command("ifconfig", interfaceName)
	output, err := cmd.Output()
	if err != nil {
		return false, err
	}
	outputStr := string(output)
	if !strings.Contains(outputStr, interfaceName) {
		return false, nil
	}
	// check if an IP address is assigned to the interface
	if !strings.Contains(outputStr, "inet ") {
		return false, nil
	}
	return true, nil
}

func isTUNInterfaceUpWindows(interfaceName string) (bool, error) {
	cmd := exec.Command("powershell", "Get-NetAdapter", "-Name", interfaceName)
	output, err := cmd.Output()
	if err != nil {
		return false, err
	}
	return strings.Contains(string(output), interfaceName), nil
}

func GetVPNStatus(c *gin.Context) {
	status := checkVPNStatus()
	c.JSON(http.StatusOK, status)
}

func checkVPNStatus() VPNStatus {
	interfaceName := "utun8"
	isUp, _ := IsTUNInterfaceUp(interfaceName)
	if isUp {
		// Gather details about the remote node
		ip := "10.1.1.2" // TODO: Example IP address

		// Find the peer ID associated with the active stream
		var peerID string
		streamsMu.Lock()
		for pid := range streams {
			peerID = pid.String()
			break
		}
		streamsMu.Unlock()

		return VPNStatus{
			Status: "connected",
			IP:     ip,
			PeerID: peerID,
		}
	} else {
		return VPNStatus{Status: "disconnected"}
	}
}
