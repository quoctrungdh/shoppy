const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalizerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './index.js',
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin(),
    new BundleAnalizerPlugin()
  ]
}