#!/bin/bash

set -e

# Create App folder and copy content
mkdir -p /opt/skypier
mkdir -p /etc/skypier
cp start.sh skypier-vpn skypier.svg /opt/skypier

# Create a Desktop entry
cp skypier.desktop /usr/share/applications/skypier.desktop

# Create a symbolic link
ln -s /opt/skypier/start.sh /usr/local/bin/skypier
