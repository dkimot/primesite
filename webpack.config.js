const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/lib/index.js',
  output: {
    path: path.resolve('./client/dist/react'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/lib/static/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
