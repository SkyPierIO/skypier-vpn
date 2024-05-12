#!/bin/bash

set -e

# Delete app data
rm -Rf /opt/skypier
rm -Rf /etc/skypier

# Remove symbolic link
rm /usr/local/bin/skypier

# Remove .desktop
rm /usr/share/applications/skypier.desktop
