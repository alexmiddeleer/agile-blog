#Agile Blog

View live site at https://alexmiddeleer.github.io/agile-blog/

## Global Tools Needed
1. testcafe
2. http-server

## Running the tests

1. `cd <projdir>/src && http-server ./ -p 3000`
2. In a separate shell, run `run-e2e-tests.sh`. Add argument `--live` to use TestCafe live mode

## Deploying

Right now the site is deployed to github pages, so just merge code to master
