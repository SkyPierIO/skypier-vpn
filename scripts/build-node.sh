#!/bin/bash

set -e

echo -e "\n[+]\tGo build VPN Node..."
go build -o build/skypier-vpn-node -ldflags "-s -w" -trimpath -buildvcs=false cmd/skypier-vpn-node/main.go
tree --si ./build
