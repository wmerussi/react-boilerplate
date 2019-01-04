const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

const common = require('../common/plugins.config');

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development'),
  },
});

module.exports = [
  ...common,
  new BundleAnalyzerPlugin(),
  definePlugin,
];
