#!/bin/bash

# MACOS specific start script

# Get the directory of the current script
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Path to the skypier-vpn binary
SKYPIER_VPN="$SCRIPT_DIR/skypier-vpn"

# Check if the skypier-vpn binary exists
if [ ! -f "$SKYPIER_VPN" ]; then
  echo "Error: skypier-vpn binary not found at $SKYPIER_VPN"
  exit 1
fi

# Run the skypier-vpn binary with administrator privileges
osascript -e "do shell script \"$SKYPIER_VPN &> /dev/null &\" with administrator privileges"

if [ $? -ne 0 ]; then
  echo "osascript failed: invalid password or insufficient permissions."
  exit 1
fi

# Wait for the skypier-vpn process to start
sleep 3

# Open the web interface
open http://localhost:8081/ 2> /dev/null

# Wait for the skypier-vpn process to finish
wait