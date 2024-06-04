#!/bin/bash

pkexec /opt/skypier/skypier-vpn &
sleep 5
open http://skypier.localhost:8081/ 2> /dev/null
wait
