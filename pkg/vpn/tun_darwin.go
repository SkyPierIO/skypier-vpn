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
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to bring down interface: %v, output: %s", err, output)
	}

	cmd = exec.Command("ifconfig", iface.Name, "delete")
	output, err = cmd.CombinedOutput()
	if err != nil {
		fmt.Printf("failed to delete interface: %v, output: %s\n", err, output)
		return nil
	}

	return nil
}
