const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const htmlWebpackPlugin = () => (
  new HtmlWebpackPlugin({
    template: './src/index.html',
  })
);

const manifestPlugin = () => (
  new ManifestPlugin()
);

module.exports = [
  htmlWebpackPlugin(),
  manifestPlugin(),
];
