# Skypier Node - Create a Systemd service 

To create a systemd service that ensures the `skypier-vpn-node` runs on startup and prevents it from being shut down, follow these steps:

1. **Create a systemd service file**:
   - Create a new service file in the `/etc/systemd/system/` directory.

2. **Define the service configuration**:
   - Specify the service details, including the command to run the `skypier-vpn-node`, restart policies, and dependencies.

3. **Enable and start the service**:
   - Enable the service to start on boot and start it immediately.

### Step-by-Step Instructions

1. **Create the Service File**:
   Create a new file named `skypier-vpn-node.service` in the `/etc/systemd/system/` directory:

   ```sh
   sudo nano /etc/systemd/system/skypier-vpn-node.service
   ```

2. **Define the Service Configuration**:
   Add the following content to the `skypier-vpn-node.service` file:

   ```ini
   [Unit]
   Description=Skypier VPN Node
   After=network.target

   [Service]
   ExecStart=/root/skypier-vpn/skypier-vpn-node
   Restart=always
   RestartSec=10
   User=root
   Group=root
   Environment=PATH=/usr/bin:/usr/local/bin
   Environment=NODE_ENV=production

   [Install]
   WantedBy=multi-user.target

   ```

   - **Description**: A brief description of the service.
   - **After**: Ensures the service starts after the network is available.
   - **ExecStart**: The command to run the `skypier-vpn-node`. Adjust the path to the actual location of your executable.
   - **Restart**: Ensures the service restarts automatically if it stops.
   - **RestartSec**: Specifies the delay before restarting the service.
   - **User** and **Group**: Specifies the user and group under which the service runs. Adjust as needed.
   - **Environment**: Sets environment variables for the service.
   - **WantedBy**: Ensures the service starts in the multi-user runlevel.

3. **Enable and Start the Service**:
   Enable the service to start on boot and start it immediately:

   ```sh
   sudo systemctl enable skypier-vpn-node
   sudo systemctl start skypier-vpn-node
   ```

4. **Verify the Service**:
   Check the status of the service to ensure it is running correctly:

   ```sh
   sudo systemctl status skypier-vpn-node
   ```

### Example Output

The `sudo systemctl status skypier-vpn-node` command should display output similar to this:

```
● skypier-vpn-node.service - SkyPier VPN Node
   Loaded: loaded (/etc/systemd/system/skypier-vpn-node.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2023-10-09 10:00:00 UTC; 5s ago
 Main PID: 12345 (skypier-vpn-node)
    Tasks: 4 (limit: 4915)
   Memory: 10.0M
   CGroup: /system.slice/skypier-vpn-node.service
           └─12345 /usr/local/bin/skypier-vpn-node

Oct 09 10:00:00 hostname systemd[1]: Started SkyPier VPN Node.
```

This confirms that the `skypier-vpn-node` service is running and will start automatically on boot. The service will also restart automatically if it stops for any reason. Adjust the paths and settings as needed for your specific environment.