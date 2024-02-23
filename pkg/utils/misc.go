package utils

func Check(err error) {
	if err != nil {
		panic(err)
	}
}

func IsDebugEnabled() bool {
	config, err := LoadConfiguration("./config.json")
	if err != nil {
		panic(err)
	} else {
		return config.Debug
	}
}
