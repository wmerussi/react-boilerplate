const exec = require('child_process');
const webpack = require('webpack');

const common = require('../common/plugins.config');

const execProp = exec.exec;

const postScripts = [
  'npm run es-check',
];

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

const postScript = {
  apply: (compiler) => {
    compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
      postScripts.forEach((script) => {
        execProp(script, (err, stdout, stderr) => {
          if (stdout) process.stdout.write(stdout);
          if (stderr) process.stderr.write(stderr);
        });
      });
    });
  },
};

module.exports = [
  ...common,
  definePlugin,
  postScript,
];
