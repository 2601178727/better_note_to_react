const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/router/index.js', // 入口
  output: {
    path: path.resolve('dist'), // 出口路径
    filename: 'app.js' // 出口文件名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 以js结尾的文件
        exclude: /node_modules/, // 忽略node_modules
        include: path.resolve('src/router'), // 只解析src下面的文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "env", "stage-0", "react"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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