const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');
module.exports = merge(base, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    publicPath: '/',
    hot: true,
  },
  devtool: 'source-map',
  entry: {
    app: './src/index.tsx',
  },
});
