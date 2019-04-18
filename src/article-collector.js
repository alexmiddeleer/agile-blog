const { readdirSync, readFileSync, writeFileSync } = require('fs');
const articlePageMaker = require('./article-page-maker.js');
const convert = require('./article-converter.js');

const collectArticles = function(dir) {
  return readdirSync(dir);
}

const loadArticle = function(articleFilePath) {
  return readFileSync(articleFilePath);
}

const loadTemplate = loadArticle;

const storeArticleHtmlFile = function(filePath, htmlString) {
  return writeFileSync(filePath, htmlString);
}

const processArticle = function(articleString, articleTemplateString) {
  const templateInput = { article: convert(articleString) };
  return articlePageMaker(articleTemplateString, templateInput);
}

const ARTICLES_DIR = 'articleDrafts';
const TARGET_DIR = 'posts';
const TEMPLATE = 'templates/article-template.html';
const templateAllArticles = function() {
  const articles = collectArticles(ARTICLES_DIR);
  const template = loadTemplate(TEMPLATE);
  // const articlesHtml = [];
  for( let index in articles ){
    const article = loadArticle(articles[index]);
    const articleHtml = processArticle(article, template);
    const articleName = articles[index].match(/^(.*).md$/i)[1];
    storeArticleHtmlFile(`posts/${articleName}.html`, articleHtml);
  }
}

module.exports = {
  collectArticles,
  loadTemplate,
  loadArticle,
  processArticle,
  storeArticleHtmlFile,
  templateAllArticles
};
