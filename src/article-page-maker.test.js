const articlePageMaker = require('./article-page-maker.js');

test('it puts html hunks in a template', function() {
  let template = 'x{{{article}}}x';
  let article = 'foo';
  expect(articlePageMaker(template, { article })).toEqual('xfoox', 'no tags');

  template = `<p>{{{article}}}</p>`;
  article = `<b>bar</b>`;
  expect(articlePageMaker(template, { article })).toEqual(
    '<p><b>bar</b></p>',
    'with tags'
  );
});
