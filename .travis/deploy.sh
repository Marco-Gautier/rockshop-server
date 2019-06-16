#!/bin/bash
set -e
ssh marco@marc0.fr -p 4242 -v exit
# git config --global push.default simple # we only want to push one branch — master
# specify the repo on the live server as a remote repo, and name it 'production'
# <user> here is the separate user you created for deploying
# git remote add production ssh://marco@marc0.fr:4242/apps/rockshop-server
# git push production master # push our updates