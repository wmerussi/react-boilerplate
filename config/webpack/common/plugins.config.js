const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = './src/';

module.exports = [
  new HtmlWebpackPlugin({
    inject: 'body',
    template: src + 'index.html',
  }),
];
