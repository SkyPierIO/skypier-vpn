#!/bin/bash

set -e

git submodule update --init --recursive       

echo -e "\n[+]\tReact app build..."
pushd ./pkg/ui
pnpm i 
pnpm build
popd














