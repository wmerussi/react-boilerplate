const MODULE_PATHS = [
  './node_modules',
];

module.exports = {
  context: process.cwd(),
  entry: './src/index.jsx',
  resolve: {
    modules: MODULE_PATHS,
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
