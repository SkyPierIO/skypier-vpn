#!/bin/bash

set -e

echo -e "\n[+]\tUpdate React app Git submodule..."
git submodule update --init --recursive       

echo -e "\n[+]\tReact app build..."

pushd pkg/ui/web
pnpm i 
pnpm build
tree --si dist
popd














