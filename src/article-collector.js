const { readdirSync, readFileSync, writeFileSync } = require("fs");
const articlePageMaker = require("./article-page-maker.js");
const convert = require("./article-converter.js");

const collectArticles = function(dir) {
  return readdirSync(dir);
};

const loadArticle = function(articleFilePath) {
  return readFileSync(articleFilePath).toString();
};

const loadTemplate = loadArticle;

const storeArticleHtmlFile = function(filePath, htmlString) {
  return writeFileSync(filePath, htmlString);
};

const processArticle = function(articleString, template, metaData) {
  const templateParams = {};
  Object.assign(templateParams, metaData);
  Object.assign(templateParams, { article: convert(articleString) });
  return articlePageMaker(template, templateParams);
};

const loadArticleMeta = function(index, articlesMeta) {
  return articlesMeta[index];
};

const templateAllArticles = function(articlesPath, templatePath, targetPath) {
  const articles = collectArticles(articlesPath);
  const template = loadTemplate(templatePath);
  for (let index in articles) {
    const article = loadArticle(`${articlesPath}/${articles[index]}`);
    const articleHtml = processArticle(article, template);
    const articleName = articles[index].match(/^(.*).md$/i)[1];
    storeArticleHtmlFile(`${targetPath}/${articleName}.html`, articleHtml);
  }
};

module.exports = {
  collectArticles,
  loadTemplate,
  loadArticle,
  processArticle,
  storeArticleHtmlFile,
  templateAllArticles,
  loadArticleMeta
};
