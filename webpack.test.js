const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const nodeExternals = require('webpack-node-externals')

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          path.resolve('src')
        ],
        options: {
          fix: true
        }
      },
      {
          test: /\.vue$/,
          use: [
            'vue-loader'
          ],
          include: [
            path.join(__dirname, 'node_modules', '@unicorns', 'quick-dash-framework', 'src'),
            path.resolve('src')
          ]
      },
      {
          test: /\.js$/,
          include: [
            path.join(__dirname, 'node_modules', '@unicorns', 'quick-dash-framework', 'src'),
            path.resolve('src')
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: 'upward'
              }
            },
            {
              loader: 'istanbul-instrumenter-loader',
              options: {
                debug: true,
                esModules: true
              }
            }
          ]
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: '@import "_variables.scss";',
              includePaths: [
                path.resolve(__dirname, './src/assets/sass')
              ]
            }
          }
        ]
      },
    ]
  },
  // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: 'inline-cheap-module-source-map',
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.svg'],
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'node_modules', '@unicorns', 'quick-dash-framework', 'node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.join(__dirname, 'src'),
      '@': path.join(__dirname, 'node_modules', '@unicorns', 'quick-dash-framework', 'src'),
    }
  }
}

module.exports = config
