# Agile Blog

View live site at https://alexmiddeleer.github.io/agile-blog/

## Global Tools Needed
1. testcafe
2. http-server

## Running the tests

1. For end to end,`http-server ./ -p 3000`. In a separate shell, run `run-e2e-tests.sh`. Add argument `--live` to use TestCafe live mode
3. Run `npm test` or `npm test -- --watch` to run unit tests

## Deploying

Right now the site is deployed to github pages, so just merge code to master and push

To Convert articles to markdown, run `node publish-articles.js`.
