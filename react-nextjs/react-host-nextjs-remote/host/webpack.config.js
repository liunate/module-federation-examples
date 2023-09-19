const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;
module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'auto',
    clean: true,
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.mjs'],
    // import @module-federation/utilities
    alias: {
      'path': false,
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        remote: 'remote@http://127.0.0.1:8081/_next/static/chunks/remoteEntry.js',
        host: 'host@http://127.0.0.1:8080/remoteEntry.js',
        // Dataexplorer: `Dataexplorer@http://127.0.0.1:3000/app/data-explorer/_next/static/chunks/remoteEntryDataexplorer.js`,
      },
      exposes: {
        './Nav': './src/components/Nav',
      },
      // shared: ['react', 'react-dom'],
      shared: {
        react: {
          // eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          // eager: true,
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
