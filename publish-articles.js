const {
  templateAllArticles,
  loadArticle,
  loadTemplate,
  storeArticleHtmlFile
} = require('./src/article-collector');
const articlePageMaker = require('./src/article-page-maker.js');

const ARTICLES_DIR = 'articleDrafts';
const TEMPLATE = 'templates/article-template.html';
const TARGET_DIR = 'posts';
const ARTICLES_META = require('./posts-meta.js');

templateAllArticles(ARTICLES_DIR, TEMPLATE, TARGET_DIR, ARTICLES_META);

const bio = loadArticle('./home/bio.md');
const nav = loadArticle('./home/posts.md');
const homeTemplate = loadTemplate('./home/template.handlebars.html');
const homeHTML = articlePageMaker(homeTemplate, { bio, nav });
storeArticleHtmlFile('index.html', homeHTML);
