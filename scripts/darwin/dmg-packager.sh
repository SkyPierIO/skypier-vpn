#!/bin/bash

APP_NAME="Skypier-VPN"
DMG_NAME="${APP_NAME}.dmg"
APP_BUNDLE="${APP_NAME}.app"
VOL_NAME="${APP_NAME} Installer"
TEMP_DIR="tmp-dmg"
DMG_DIR="${TEMP_DIR}/dmg"
MOUNT_POINT="/Volumes/${VOL_NAME}"

# Create a temporary directory for the DMG creation process
mkdir -p "${DMG_DIR}"

# Copy the .app bundle to the temporary directory
cp -R "${APP_BUNDLE}" "${DMG_DIR}/"

# Create a symbolic link to the /Applications folder
ln -s /Applications "${DMG_DIR}/Applications"

# Create the DMG file
hdiutil create -volname "${VOL_NAME}" -srcfolder "${DMG_DIR}" -ov -format UDRW "${TEMP_DIR}/${DMG_NAME}"

# Mount the DMG
hdiutil attach "${TEMP_DIR}/${DMG_NAME}" -mountpoint "${MOUNT_POINT}"

# Set up the DMG layout
echo '
   tell application "Finder"
     tell disk "'${VOL_NAME}'"
         open
         set current view of container window to icon view
         set toolbar visible of container window to false
         set statusbar visible of container window to false
         set the bounds of container window to {100, 100, 600, 400}
         set theViewOptions to the icon view options of container window
         set arrangement of theViewOptions to not arranged
         set icon size of theViewOptions to 72
         set background picture of theViewOptions to file ".background:background.png"
         make new alias file at container window to POSIX file "/Applications" with properties {name:"Applications"}
         set position of item "'${APP_NAME}'.app" of container window to {100, 100}
         set position of item "Applications" of container window to {400, 100}
         update without registering applications
         delay 5
     end tell
   end tell
' | osascript

# Unmount the DMG
hdiutil detach "${MOUNT_POINT}"

# Convert the DMG to a compressed format
hdiutil convert "${TEMP_DIR}/${DMG_NAME}" -format UDZO -o "${DMG_NAME}"

# Clean up the temporary directory
rm -rf "${TEMP_DIR}"

echo "DMG file ${DMG_NAME} created successfully."