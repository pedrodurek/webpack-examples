const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 3000,
    publicPath: '/',
    hot: true,
  },
  devtool: 'source-map',
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        app1: 'app1',
        app2: 'app2',
      },
      exposes: {
        Shell: './src/componentsc/Shell',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
});
