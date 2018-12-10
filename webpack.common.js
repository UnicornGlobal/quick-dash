const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const secrets = require('./config/secrets.env')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        fonts: {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          name: 'fonts',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: 'single'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Quick Dash Starter Project'
    }),
    new CleanWebpackPlugin(['dist']),
    new VueLoaderPlugin(),
    new webpack.EnvironmentPlugin(secrets),
    new webpack.HashedModuleIdsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            loader: 'vue-svg-loader',
            options: {
              svgo: {
                plugins: [
                  { removeDoctype: true },
                  { removeComments: true },
                  { removeMetadata: true },
                  { removeDesc: true },
                  { removeUselessDefs: true },
                  { removeXMLNS: true },
                  { removeEditorsNSData: true },
                  { removeEmptyAttrs: true },
                  { removeHiddenmElems: true },
                  { removeEmptyText: true },
                  { removeEmptyContainers: true },
                  { minifyStyles: true },
                  { removeUnknownsAndDefaults: true },
                  { removeUselessStrokeAndFill: true },
                  { removeUnusedNS: true },
                  { removeRasterImages: true },
                  { mergePaths: true },
                  { convertShapeToPath: true },
                  { removeScriptElement: true }
                ]
              }
            }
          },
          {
            loader: 'file-loader'
          },
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.svg'],
    modules: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'node_modules', '@unicorn', 'quick-dash', 'node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.join(__dirname, 'src'),
      '@': path.join(__dirname, 'node_modules', '@unicorn', 'quick-dash', 'src'),
    }
  }
}
