var webpack = require('webpack')
var path = require('path')

module.exports = {
  devtool: 'eval',
  entry: ['./src/main.js'],
  output: {
    path: path.resolve('./app'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        loaders: ['vue']
      }
    ]
  },
  vue: {
    postcss: [
      require('precss')
    ]
  },
  plugins: [
  ],
  target: 'atom'
}