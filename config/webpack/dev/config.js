const merge = require('webpack-merge');

const common = require('../common/config');
const plugins = require('./plugins.config');

module.exports = merge(common, {
  devServer: {
    inline: true,
    port: 3333,
  },
  mode: 'development',
  plugins,
});
