const marked = require('marked');

function convert(articleString) {
  return marked(articleString).trim();
}

module.exports = convert;
