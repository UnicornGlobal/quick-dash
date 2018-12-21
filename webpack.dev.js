const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

console.log('webpack.dev')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
