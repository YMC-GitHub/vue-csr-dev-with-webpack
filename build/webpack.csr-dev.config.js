'use strict'
//include some lib
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const utils = require('./utils')
//include some data
const config = require('../config')
const baseWebpackConfig = require('./webpack.csr-bas.config')
const rootPath = path.resolve(__dirname, '../')
const resolve = file => path.resolve(rootPath, file)

//get the host and port passed by args
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

//get webpack config dev  based on webpack config base
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require(resolve('config/dev.env'))
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.dev.index,
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: config.dev.assetsSubDirectory.from,
        to: config.dev.assetsSubDirectory.to,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = () => {
  return utils.findPort().then(port => {
    // set env.PORT
    process.env.PORT = port
    // add port to devServer config
    devWebpackConfig.devServer.port = port
    // Add FriendlyErrorsPlugin
    devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
      },
      onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
    }))
    return devWebpackConfig
  })
}
