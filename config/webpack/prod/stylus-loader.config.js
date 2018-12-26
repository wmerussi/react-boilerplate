const autoprefixer = require('../common/autoprefixer.config');

module.exports = {
  exclude: /node_modules/,
  test: /\.styl$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        localIdentName: '[hash:7]',
        modules: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: [autoprefixer],
      },
    },
    'stylus-loader',
  ],
};
