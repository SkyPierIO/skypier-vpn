#!/bin/bash

set -e

pushd ./pkg
echo -e "\n[+]\tGenerating swagger doc..."
swag init --dir ../cmd/skypier-vpn-node/,../pkg/ui/,../pkg/vpn/,../pkg/utils/
popd

echo -e "\n[+]\tGo build..."
go build -o build/skypier-vpn-node -ldflags "-s -w" -trimpath -buildvcs=false cmd/skypier-vpn-node/main.go
tree --si ./build

echo -e "\n[+]\tRun..."
sudo ./build/skypier-vpn-node













