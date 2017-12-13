const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  plugins: [HtmlWebpackPluginConfig]
}