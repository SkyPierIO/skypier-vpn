package vpn

import (
	"crypto/rand"
	"encoding/hex"
	"log"

	"github.com/SkyPierIO/skypier-vpn/pkg/utils"
	"github.com/libp2p/go-libp2p/core/crypto"
)

// Returns the new Secp256k1 key in crypto.Privkey struct format
// and in the base64 encoded format (for config file)
func generateNewSecp256k1PrivateKey() (crypto.PrivKey, string, error) {
	privKey, _, err := crypto.GenerateSecp256k1Key(rand.Reader)
	utils.Check(err)
	rawPrivKey, err := privKey.Raw()
	log.Println("\t", hex.EncodeToString(rawPrivKey))
	utils.Check(err)
	marshalledPrivKey, err := crypto.MarshalPrivateKey(privKey)
	utils.Check(err)
	return privKey, crypto.ConfigEncodeKey(marshalledPrivKey), nil
}

// TODO turn function private
func LoadPrivateKey() (crypto.PrivKey, error) {
	config, err := utils.LoadConfiguration("/etc/skypier/config.json")
	if err != nil {
		newPk, newPkBase64, err := generateNewSecp256k1PrivateKey()
		utils.Check(err)
		config.PrivateKey = newPkBase64
		utils.SaveConfig(config)
		return newPk, nil
	} else {
		decodedPrivatKey, err := crypto.ConfigDecodeKey(config.PrivateKey)
		utils.Check(err)
		privKey, err := crypto.UnmarshalPrivateKey(decodedPrivatKey)
		if err != nil {
			_, newPkBase64, err := generateNewSecp256k1PrivateKey()
			utils.Check(err)
			config.PrivateKey = newPkBase64
			utils.SaveConfig(config)
			LoadPrivateKey()
		}
		return privKey, nil
	}
}
