const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    historyApiFallback: true, // Enable History api (routes)
    port: 3002,
    publicPath: '/',
    hot: true,
  },
  devtool: 'source-map',
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        Profile: './src/views/Profile',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
});
