# Skypier Node - Enable NAT and IP Forwarding 

Once Skypier VPN is enable between a client and a node, you won't be able to join the Internet unless the node provider configuration. We could use `iptables` to set up NAT rules. Here are the steps:

### Step-by-Step Plan

1. **Enable IP forwarding** on the VPN server.
2. **Set up NAT (Network Address Translation)** using `iptables`.

### Configuration

1. **Enable IP forwarding**:

   Edit the `/etc/sysctl.conf` file and add or uncomment the following line:
   ```sh
   net.ipv4.ip_forward = 1
   ```

   Apply the changes:
   ```sh
   sudo sysctl -p
   ```

2. **Set up NAT using `iptables`**:

   Add the following `iptables` rules to enable masquerading:
   ```sh
   sudo iptables -t nat -A POSTROUTING -s 10.1.1.0/24 -o eth0 -j MASQUERADE
   sudo iptables -A FORWARD -i eth0 -o skypier0 -m state --state RELATED,ESTABLISHED -j ACCEPT
   sudo iptables -A FORWARD -s 10.1.1.0/24 -o eth0 -j ACCEPT
   ```

   Replace `eth0` with the actual network interface connected to the internet, and `skypier0` with the VPN interface if different.

3. **Save the `iptables` rules** to ensure they persist after a reboot:

   On Ubuntu/Debian:
   ```sh
   sudo apt-get install iptables-persistent
   sudo netfilter-persistent save
   ```

   On CentOS/RHEL:
   ```sh
   sudo yum install iptables-services
   sudo service iptables save
   ```

### Summary

- **Enable IP forwarding** in `/etc/sysctl.conf`.
- **Set up NAT** rules using `iptables`.
- **Save the `iptables` rules** to ensure they persist after a reboot.

This configuration will forward the internet connection from the VPN server to the clients in the 10.1.1.0/24 subnet using NAT.