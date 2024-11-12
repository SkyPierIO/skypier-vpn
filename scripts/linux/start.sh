#!/bin/bash

pkexec /usr/local/bin/skypier-vpn &
if [ $? -ne 0 ]; then
  echo "pkexec failed: invalid password or insufficient permissions."
  exit 1
fi

sleep 5
xdg-open http://skypier.localhost:8081/ 2> /dev/null