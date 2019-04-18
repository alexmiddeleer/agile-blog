const { readdirSync, readFileSync } = require('fs');

const collectArticles = function(dir) {
  return readdirSync(dir);
}

const loadArticleFilePath = function(articleFilePath) {
  return readFileSync(articleFilePath);
}

module.exports = {
  collectArticles,
  loadArticleFilePath
};
