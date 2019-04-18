jest.mock('fs');
const { processArticle, collectArticles, storeArticleHtmlFile,
  loadTemplate, loadArticle, templateAllArticles }
  = require('./article-collector');
const fs = require('fs');

beforeEach(() => jest.clearAllMocks());

test('collectArticles finds all of the files in the specified directory', function() {
  fs.readdirSync.mockReturnValue(['foo.md']);
  const result = collectArticles('src');
  expect(result).toEqual(['foo.md']);
});

test('loadArticle loads the file', function() {
  fs.readFileSync.mockReturnValue('hello world');
  const result = loadArticle('src');
  expect(result).toEqual('hello world');
});

test('loadTemplate loads the specified template given a path', function() {
  fs.readFileSync.mockReturnValue('template');
  const result = loadTemplate('src');
  expect(result).toEqual('template');
});

test('storeArticleHtmlFile write the string to the specified location', function() {
  storeArticleHtmlFile('article.html', 'my article');
  expect(fs.writeFileSync.mock.calls[0][0]).toEqual('article.html');
  expect(fs.writeFileSync.mock.calls[0][1]).toEqual('my article');
});

test('processArticle converts the article to html and makes a page', function() {
  const result = processArticle('foo', 'a{{{article}}}a');
  const expected = 'a<p>foo</p>a';
  expect(result).toEqual(expected);
});

test(`templateAllArticles loads all articles and the article template, processes the
      and stores the templated html files in the
      desired folder` , function() {
  fs.readdirSync.mockReturnValue(['foo.md']);
  fs.readFileSync.mockReturnValueOnce('foo');
  // fs.readFileSync.mockReturnValueOnce('a{{{article}}}a');
  templateAllArticles();
  expect(fs.readdirSync.mock.calls[0][0]).toEqual('articleDrafts');
  expect(fs.readFileSync.mock.calls[0][0]).toEqual('templates/article-template.html');
  expect(fs.readFileSync.mock.calls[1][0]).toEqual('foo.md');
  // expect(fs.readFileSync.mock.calls[0][0]).toEqual('a{{{article}}}a');
});
