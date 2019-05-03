const { templateAllArticles } = require("./src/article-collector");

const ARTICLES_DIR = "articleDrafts";
const TEMPLATE = "templates/article-template.html";
const TARGET_DIR = "posts";
const ARTICLES_META = require("./posts-meta.js");

templateAllArticles(ARTICLES_DIR, TEMPLATE, TARGET_DIR, ARTICLES_META);
