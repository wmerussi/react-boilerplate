module.exports = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name]-[hash:7].[ext]',
      },
    },
  ],
};
