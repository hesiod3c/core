const sass = require('node-sass');
const path = require('path');

const processSass = (data, filename) => {
  const result = sass.renderSync({
    data: data,
    file: filename
  }).css;

  return result.toString('utf8');
};

module.exports = processSass;
