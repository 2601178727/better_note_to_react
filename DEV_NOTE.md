##### 初始化项目

###### 初始化package.json
> npm init -y

###### 下载依赖
> cnpm i webpack-dev-server -D
> cnpm i react react-dom babel-core babel-loader@7 babel-preset-env babel-preset-stage-0 babel-preset-react html-webpack-plugin css-loader style-loader file-loader url-loader webpack webpack-cli -D
>
> cnpm i stylus stylus-loader -D
>
> babel-preset-stage-0 解析es7


###### 创建webpack配置文件
```javas
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
        exclude: /node_modules/, // 忽略node_modules
        include: path.resolve('src'), // 只解析src下面的文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "env", "stage-0", "react"
            ]
          }
        }
      },
      { // 配置stylus
        test: /\.styl$/, // 以styl结尾的文件
        exclude: /node_modules/, // 忽略node_modules
        include: path.resolve('src'), // 只解析src下面的文件
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('stylus-loader'),
        ]
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
```

###### 配置运行文件package.json
```
"scripts": {
    "test": "webpack --mode development",
    "dev": "webpack-dev-server --mode development"
  },
```