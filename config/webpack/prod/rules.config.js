const common = require('../common/rules.config');

const fileLoader = require('./file-loader.config');
const stylusLoader = require('./stylus-loader.config');

module.exports = [
  ...common,
  fileLoader,
  stylusLoader,
];
