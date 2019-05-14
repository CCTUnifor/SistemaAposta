#!/bin/bash

docker build -t bolao-image .
docker run -d -p 3306:3306 --name bolao-image -e MYSQL_ROOT_PASSWORD=123 bolao-image

$SHELL