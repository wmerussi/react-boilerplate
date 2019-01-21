const webpack = require('webpack');
const WebpackBar = require('webpackbar');

const common = require('../common/plugins.config');

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
});

const webpackBar = new WebpackBar();

module.exports = [
  ...common,
  definePlugin,
  webpackBar,
];
