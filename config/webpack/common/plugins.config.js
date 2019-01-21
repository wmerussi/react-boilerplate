// const webpackBundleAnalyzer = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// const bundleAnalyzerPlugin = new webpackBundleAnalyzer.BundleAnalyzerPlugin();

const htmlWebpackPlugin = () => (
  new HtmlWebpackPlugin({
    template: './src/index.html',
  })
);

const manifestPlugin = () => (
  new ManifestPlugin()
);

module.exports = [
  // bundleAnalyzerPlugin, // Activate this to analyze the bundle
  htmlWebpackPlugin(),
  manifestPlugin(),
];
