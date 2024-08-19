<p align="center">
  <a href="https://skypier.io/#gh-light-mode-only">
    <img src="https://skypier.io/skypier_logo_baseline.png" width="318px" alt="skypier logo" />
  </a>
  <a href="https://skypier.io/#gh-dark-mode-only">
    <img src="https://skypier.io/_astro/skypier_baseline.9f3ab695.svg" width="318px" alt="skypier logo" />
  </a>
</p>

<h3 align="center">
    Skypier VPN | Decentralized built on top of libp2p
</h3>
<p align="center">
   A more equitable and scalable decentralized network platform that empowers people the freedom to express and explore anonymously without worry of compromising their privacy or quality of access. 
</p>
<p align="center"> 
    <a href="https://skypier.io">Official website</a>･
    <a href="https://skypier.io">Twitter/X</a>
</p>
<br />

<p align="center">
    <a href="#">
    <img src="https://img.shields.io/github/followers/SkyPierIO" alt="Github followers" />
    </a>
    <img src="https://img.shields.io/github/issues-pr/SkyPierIO/skypier-vpn" alt="Github Issues" />
    </a>
    <a href="https://twitter.com/SkypierIO">
        <img src="https://img.shields.io/twitter/follow/SkypierIO" alt="Twitter" />
    </a>
    <a href="https://github.com/SkyPierIO">
        <img src="https://img.shields.io/github/license/SkyPierIO/SkyPierUI" alt="license" />
    </a>
</p>

<hr>

## Introduction

Skypier VPN is a decentralized VPN solution leveraging the power of `libp2p` to provide secure and private internet access. This project is currently under development and should not be used in production environments for security reasons.

## 🚀 Features

- **Decentralized Network**: No central points of failure, no central server.
- **Libp2p Integration**: Uses the same network library as Ethereum and various well known Blockchain projects.
- **Enhanced Security**: Strong encryption and secure communication channels
- **Privacy**: Ensures user anonymity by routing traffic through nodes hosted by the community all around the world.
- **Token Gated Service**: We use NFTs for users subscription validity and proof of payment. 

## ⚠️ Disclaimer

> [!IMPORTANT]  
> This project is under development and should not be used in production environments for security reasons.

## 📦 Installation

### Prerequisites

- Go 1.16 or higher
- Git

### Build from sources

1. Build the project:

```bash
go build -o skypier-vpn cmd/skypier-vpn/main.go
```

2. Run the VPN 

```bash
./skypier-vpn
```

### Or install pre-built binary

1. Get the latest release for your Operating System [here](https://github.com/SkyPierIO/skypier-vpn/releases)
2. Run the installation script 

    ```bash
    sudo ./install.sh
    ```

## 🛠️ Advanced Usage

### Configuration

A configuration file is created at first launch. But you can also start with your own configuration. Edit the `config.json` file to set up your VPN configuration. Example:

```json
{
    "nickname": "MySkypierNode-Customize-me",
    "debug": false,
    "privateKey": "<YOUR-PK>",
    "advertisePrivateAddresses": false,
    "swaggerEnabled": false
}
```

## 📚 Documentation

For detailed documentation, please refer to the [Wiki](https://github.com/SkyPierIO/skypier-vpn/wiki).

## 🤝 Contributing

We welcome contributions! Please see our CONTRIBUTING.md for guidelines.

## 📧 Contact

For any inquiries, please contact us at [info@skypier.Io](mailto://info@skypier.io).

## 🧑‍💻 Want to hack on libp2p?

[![](https://cdn.rawgit.com/libp2p/community/master/img/contribute.gif)](https://github.com/libp2p/community/blob/master/CONTRIBUTE.md)

## ⭐️ Support

If you find this project useful, please consider giving it a star on GitHub!


