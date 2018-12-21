module.exports = {
  enforce: 'pre',
  exclude: /node_modules/,
  loader: 'eslint-loader',
  test: /\.(js|jsx)$/,
};
