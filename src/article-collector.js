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

const templateAllArticles = function(articlesPath, templatePath, targetPath) {
  const articles = collectArticles(articlesPath);
  const template = loadTemplate(templatePath);
  // const articlesHtml = [];
  for( let index in articles ){
    const article = loadArticle(`${articlesPath}/${articles[index]}`);
    const articleHtml = processArticle(article.toString(), template.toString());
    const articleName = articles[index].match(/^(.*).md$/i)[1];
    storeArticleHtmlFile(`${targetPath}/${articleName}.html`, articleHtml);
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
