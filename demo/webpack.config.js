var Path = require('path');
var Webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  lib: Path.join(__dirname, '../dist'),
  src: Path.join(__dirname, './'),
  build: Path.join(__dirname, '../docs'),
  node_modules: Path.join(__dirname, '../node_modules')
};

const config = {
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.build,
    publicPath: './',
    filename: 'react-mdui.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    preLoaders: [ {
      test: /\.css$/,
      loaders: [ 'postcss-loader' ],
      include: [ PATHS.lib, PATHS.src ]
    } ],
    loaders: [ {
      test: /\.jsx?$/,
      loaders: [ 'babel-loader' ],
      include: [ PATHS.lib, PATHS.src ]
    }, {
      test: /\.css$/,
      loaders: [ 'style-loader', 'css-loader' ],
      include: [ PATHS.lib, PATHS.src, PATHS.node_modules ]
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loaders: [ 'url-loader?limit=8192' ],
      include: [ PATHS.lib, PATHS.src ]
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loaders: [ 'file-loader' ]
    }, {
      test: /\.json$/,
      loaders: [ 'json-loader' ]
    } ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: Path.join( PATHS.src, 'index.html' )
    }),
    new CopyWebpackPlugin([
      { from: Path.join( PATHS.src, 'img' ), to: Path.join( PATHS.build, 'img' ) }
    ])
  ]
};

module.exports = config;
