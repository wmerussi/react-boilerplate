const path = require('path');

const babelLoader = require('./babel-loader.config');
const eslintLoader = require('./eslint-loader.config');
const fileLoader = require('./file-loader.config');
const stylusLoader = require('./stylus-loader.config');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      babelLoader,
      eslintLoader,
      fileLoader,
      stylusLoader,
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
