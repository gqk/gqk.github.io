#!/usr/bin/env bash

read -sp "Enter sudo password: " passwd
echo

rsync -avP public/ myaliyun:/var/www/gqk
echo $passwd | ssh myaliyun "sudo -S -p '' chown -R ubuntu:www-data /var/www/gqk"
