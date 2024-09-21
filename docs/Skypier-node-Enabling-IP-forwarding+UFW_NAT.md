# Skypier Node - Enable NAT and IP Forwarding 

Once Skypier VPN is enable between a client and a node, you won't be able to join the Internet unless the node provider configuration. We could use `ufw` (Uncomplicated Firewall) to set up NAT rules. Here are the steps:

1. **Enable IP forwarding** on the VPN server.
2. **Configure `ufw`** to set up NAT.

## Step-by-Step Plan

1. **Enable IP forwarding**:
   - Edit the sysctl configuration file to enable IP forwarding.
   - Apply the changes.

2. **Configure `ufw`**:
   - Add NAT rules to the `ufw` configuration.
   - Enable `ufw` and allow necessary traffic.

## Configuration

1. **Enable IP forwarding**:

   Edit the `/etc/sysctl.conf` file and add or uncomment the following line:
   ```sh
   net.ipv4.ip_forward = 1
   ```

   Apply the changes:
   ```sh
   sudo sysctl -p
   ```

2. **Configure `ufw`**:

   Edit the `/etc/ufw/before.rules` file and add the following lines at the beginning of the file, before the `*filter` line:

   ```sh
   *nat
   :POSTROUTING ACCEPT [0:0]

   # Forward traffic from the VPN subnet (10.1.1.0/24) to the internet
   -A POSTROUTING -s 10.1.1.0/24 -o eth0 -j MASQUERADE

   COMMIT
   ```

   Replace `eth0` with the actual network interface connected to the internet.

   Next, allow forwarding in the `/etc/default/ufw` file by changing the `DEFAULT_FORWARD_POLICY` to `ACCEPT`:

   ```sh
   DEFAULT_FORWARD_POLICY="ACCEPT"
   ```

3. **Enable `ufw` and allow necessary traffic**:

   Enable `ufw` and allow traffic on the VPN interface:
   ```sh
   sudo ufw allow in on skypier0
   sudo ufw allow out on skypier0
   sudo ufw enable
   ```

   Replace `skypier0` with the actual VPN interface if different (`utun[0-9]+` on MacOS)

## Summary

- **Enable IP forwarding** in `/etc/sysctl.conf`.
- **Configure `ufw`** by editing `/etc/ufw/before.rules` and `/etc/default/ufw`.
- **Enable `ufw`** and allow necessary traffic.

This configuration will forward the internet connection from the VPN server to the clients in the 10.1.1.0/24 subnet using NAT with `ufw`.