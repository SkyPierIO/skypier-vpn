//go:build darwin
// +build darwin

package vpn

import (
	"fmt"
	"net"
	"os/exec"
)

func RemoveInterface(ifaceName string) error {
	iface, err := net.InterfaceByName(ifaceName)
	if err != nil {
		return fmt.Errorf("failed to get interface by name: %v", err)
	}

	cmd := exec.Command("ifconfig", iface.Name, "down")
	err = cmd.Run()
	if err != nil {
		return fmt.Errorf("failed to bring down interface: %v", err)
	}

	// cmd = exec.Command("ifconfig", iface.Name, "destroy")
	// err = cmd.Run()
	// if err != nil {
	// 	return fmt.Errorf("failed to destroy interface: %v", err)
	// }

	return nil
}
