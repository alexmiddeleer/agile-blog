#! /bin/sh
testcafe chrome test/page-test.js --page-load-timeout 0 \
  --app-init-delay 5 $1
