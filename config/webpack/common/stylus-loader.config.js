const autoprefixer = require('autoprefixer')({
  browsers: [
    '> 1%',
    'last 2 versions',
  ],
});

module.exports = {
  exclude: /node_modules/,
  test: /\.styl$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
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
