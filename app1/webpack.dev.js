const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 3000,
    publicPath: '/',
    hot: true,
  },
  entry: {
    app: './src/index.tsx',
  },
});
