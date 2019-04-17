jest.mock('fs');
const articleCollector = require('./article-collector');
const fs = require('fs');

test('it finds all of the files in the specified directory', function() {
  fs.readdirSync.mockReturnValue(['foo.md']);
  const result = articleCollector('src')
  expect(result).toEqual(['foo.md']);
});
