jest.mock('fs');
const { collectArticles, loadArticleFilePath } = require('./article-collector');
const fs = require('fs');

test('collectArticles finds all of the files in the specified directory', function() {
  fs.readdirSync.mockReturnValue(['foo.md']);
  const result = collectArticles('src');
  expect(result).toEqual(['foo.md']);
});

test('load file loads the file', function() {
  fs.readFileSync.mockReturnValue('hello world');
  const result = loadArticleFilePath('src');
  expect(result).toEqual('hello world');
});
