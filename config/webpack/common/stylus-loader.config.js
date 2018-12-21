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
    'postcss-loader',
    'stylus-loader',
  ],
};
