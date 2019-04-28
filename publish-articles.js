const { templateAllArticles } = require("./src/article-collector");

const ARTICLES_DIR = "articleDrafts";
const TEMPLATE = "templates/article-template.html";
const TARGET_DIR = "posts";

templateAllArticles(ARTICLES_DIR, TEMPLATE, TARGET_DIR);
