#!/bin/bash

# Ensure you have ImageMagick installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is required. Please install it first."
    sudo apt update
    sudo apt install imagemagick
fi

# Ensure you have iconutil installed (this step should be done on macOS)
if ! command -v iconutil &> /dev/null; then
    echo "iconutil is required. Please run this script on macOS."
    exit 1
fi

# Define the icon and application names
ICON_NAME="skypier"
APP_NAME="Skypier-VPN"
DMG_NAME="Skypier-VPN.dmg"

# Build the Go application for macOS
GOOS=darwin GOARCH=amd64 go build -o skypier-vpn-darwin-amd64 -ldflags "-s -w" -trimpath -buildvcs=false cmd/skypier-vpn-node/main.go

# Create the iconset directory
mkdir -p ${ICON_NAME}.iconset

# Resize the PNG image to the required sizes
convert ${ICON_NAME}.png -resize 16x16   ${ICON_NAME}.iconset/icon_16x16.png
convert ${ICON_NAME}.png -resize 32x32   ${ICON_NAME}.iconset/icon_16x16@2x.png
convert ${ICON_NAME}.png -resize 32x32   ${ICON_NAME}.iconset/icon_32x32.png
convert ${ICON_NAME}.png -resize 64x64   ${ICON_NAME}.iconset/icon_32x32@2x.png
convert ${ICON_NAME}.png -resize 128x128 ${ICON_NAME}.iconset/icon_128x128.png
convert ${ICON_NAME}.png -resize 256x256 ${ICON_NAME}.iconset/icon_128x128@2x.png
convert ${ICON_NAME}.png -resize 256x256 ${ICON_NAME}.iconset/icon_256x256.png
convert ${ICON_NAME}.png -resize 512x512 ${ICON_NAME}.iconset/icon_256x256@2x.png
convert ${ICON_NAME}.png -resize 512x512 ${ICON_NAME}.iconset/icon_512x512.png
convert ${ICON_NAME}.png -resize 1024x1024 ${ICON_NAME}.iconset/icon_512x512@2x.png

# Convert the iconset to ICNS (this step should be done on macOS)
iconutil -c icns ${ICON_NAME}.iconset

# Create the application bundle directory structure
mkdir -p ${APP_NAME}.app/Contents/{MacOS,Resources}

# Move the ICNS file to the Resources directory
mv ${ICON_NAME}.icns ${APP_NAME}.app/Contents/Resources/

# Move the executable to the MacOS directory
mv skypier-vpn-darwin-amd64 ${APP_NAME}.app/Contents/MacOS/skypier-vpn

# Create the start.sh script
cat <<EOF > ${APP_NAME}.app/Contents/MacOS/start.sh
#!/bin/bash

osascript -e 'do shell script "sudo /opt/skypier/skypier-vpn" with administrator privileges'

if [ \$? -ne 0 ]; then
  echo "osascript failed: invalid password or insufficient permissions."
  exit 1
fi

sleep 5
open http://skypier.localhost:8081/ 2> /dev/null
wait
EOF

chmod +x ${APP_NAME}.app/Contents/MacOS/start.sh

# Create the Info.plist file
cat <<EOF > ${APP_NAME}.app/Contents/Info.plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleName</key>
    <string>${APP_NAME}</string>
    <key>CFBundleDisplayName</key>
    <string>${APP_NAME}</string>
    <key>CFBundleIdentifier</key>
    <string>com.example.${APP_NAME}</string>
    <key>CFBundleVersion</key>
    <string>1.0</string>
    <key>CFBundleExecutable</key>
    <string>start.sh</string>
    <key>CFBundleIconFile</key>
    <string>${ICON_NAME}</string>
    <key>LSUIElement</key>
    <true/>
</dict>
</plist>
EOF

echo "Application bundle ${APP_NAME}.app created successfully."

# Create a temporary directory for the DMG creation process
mkdir -p tmp-dmg

# Copy the .app bundle to the temporary directory
cp -R ${APP_NAME}.app tmp-dmg/

# Create the DMG file
hdiutil create ${DMG_NAME} -volname "${APP_NAME}" -srcfolder tmp-dmg -ov -format UDZO

# Clean up the temporary directory
rm -rf tmp-dmg

echo "DMG file ${DMG_NAME} created successfully."