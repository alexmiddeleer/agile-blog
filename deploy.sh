#!/bin/sh
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "master" ]]; then
  echo 'Error: switch to master before deploying.';
  exit 1;
fi
if [[ `git status --porcelain` ]]; then
  echo 'Error: git status not clean. Clean up before deploying.';
  exit 1;
fi
rm index.html
cp ./src/index.html index.html
git add index.html
git commit -m "deploy commit"
git push
