const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js', // 入口
  output: {
    path: path.resolve('dist'), // 出口路径
    filename: 'app.js' // 出口文件名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 以js结尾的文件
        use: {
          loader: 'babel-loader',
          options: {
            preset: [
              'env', 'stage-0', 'react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 使用模板
      filename: 'index.html'
    })
  ]
}