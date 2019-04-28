const convert = require("./article-converter.js");

test("it converts a single line to a paragraph", function() {
  const fakeArticle = "abc";
  expect(convert(fakeArticle)).toEqual("<p>abc</p>");
});

test("it converts two lines to two paragraphs", function() {
  const fakeArticle = "abc\n\ndef";
  expect(convert(fakeArticle)).toEqual("<p>abc</p>\n<p>def</p>");
});

test("it converts headers", function() {
  const fakeArticle = "# foo";
  expect(convert(fakeArticle)).toEqual('<h1 id="foo">foo</h1>');
});

test("it converts links", function() {
  const fakeArticle = "[x](y)";
  expect(convert(fakeArticle)).toEqual('<p><a href="y">x</a></p>');
});
