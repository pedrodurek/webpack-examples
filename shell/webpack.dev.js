const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    historyApiFallback: true, // Enable History api (routes)
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
        app1: 'app1@http://localhost:3001/remoteEntry.js',
        app2: 'app2@http://localhost:3002/remoteEntry.js',
      },
      exposes: {
        Shell: './src/components/Shell',
      },
      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
});
