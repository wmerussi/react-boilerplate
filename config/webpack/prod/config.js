const merge = require('webpack-merge');
const path = require('path');

const common = require('../common/config');
const plugins = require('./plugins.config');

const rules = require('./rules.config');

module.exports = merge(common, {
  mode: 'production',
  module: { rules },
  output: {
    filename: '[hash:7].js',
    path: path.resolve('./dist'),
  },
  plugins,
});
