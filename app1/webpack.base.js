const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.join(__dirname, 'public'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  optimization: {
    // Cannot be used when modules are exposed
    // runtimeChunk: 'single',
    moduleIds: 'deterministic',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      excludeChunks: ['app1'],
    }),
  ],
};
