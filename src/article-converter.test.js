const convert = require('./article-converter.js');

test('it exists', function() {
  const fakeArticle = 'abc';
  expect(convert(fakeArticle)).toEqual('<p>abc</p>');
});
