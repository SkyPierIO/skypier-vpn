//go:build linux
// +build linux

package vpn

import (
	"fmt"

	"github.com/vishvananda/netlink"
)

func RemoveInterface(ifaceName string) error {
	link, err := netlink.LinkByName(ifaceName)
	if err != nil {
		return fmt.Errorf("failed to get interface by name: %v", err)
	}

	err = netlink.LinkDel(link)
	if err != nil {
		return fmt.Errorf("failed to delete interface: %v", err)
	}

	return nil
}

func SetInterfaceDown() error {
	link, err := netlink.LinkByName(InterfaceName)
	if err != nil {
		return err
	}
	return netlink.LinkSetDown(link)
}
