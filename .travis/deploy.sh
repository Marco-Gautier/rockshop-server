#!/bin/bash
set -e
scp -P 4242 ./deploy.tar marco@51.77.202.182:apps/rockshop-server-deploy/
ssh marco@51.77.202.182 -p 4242 "sh -c 'cd apps/rockshop-server-deploy && tar -xvf .travis/deploy.tar && docker-compose up --build -d'"
