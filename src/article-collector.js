const { readdirSync, readFileSync } = require('fs');

const collect = function(dir) {
  return readdirSync(dir);
}

module.exports = collect;
