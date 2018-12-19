const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.(vue|js)$/,
        include: [
          path.resolve('src'),
          path.join(__dirname, 'node_modules', '@unicorns', 'quick-dash-framework', 'src')
        ],
        enforce: 'post',
        use: [
          'vue-loader',
          'babel-loader',
          // 'istanbul-instrumenter-loader'
          {
            loader: 'istanbul-instrumenter-loader',
            options: {
              esModules: true
            }
          }
        ]
      // },
      // {
        // test: /\.(js)$/,
        // include: path.resolve('src'),
        // use: [
          // 'babel-loader',
          // 'istanbul-instrumenter-loader'
        // ]
      }
    ]
  }
})
