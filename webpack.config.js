const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
<<<<<<< HEAD
=======
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: './client/lib/static/index.html',
  filename: 'index.html',
  inject: 'body'
});
>>>>>>> origin/foundation

module.exports = {
  entry: './client/lib/index.js',
  output: {
    path: path.resolve('./client/dist/react'),
    filename: 'index_bundle.js'
  },
<<<<<<< HEAD
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/lib/static/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
=======
>>>>>>> origin/foundation
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
<<<<<<< HEAD
  }
=======
  },
  plugins: [HTMLWebpackPluginConfig]
>>>>>>> origin/foundation
}
