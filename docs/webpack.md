# Webpack

## 核心概念

1. Entry(输入)

   ```js
   module.exports = {
     entry: './path/to/my/entry/file.js',
   };
   ```

2. Output(输入)

   ​	

   ```javascript
   const path = require('path');
   
   module.exports = {
     entry: './path/to/my/entry/file.js',
     output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'my-first-webpack.bundle.js',
     },
   };
   ```

3. loader(处理非JavaScript文件,如: less, sass, img)

   ```javascript
   const path = require('path');
   
   module.exports = {
     output: {
       filename: 'my-first-webpack.bundle.js',
     },
     module: {
       rules: [{ test: /\.txt$/, use: 'raw-loader' }],
     },
   };
   ```

4. Plugins( 压缩,打包优化)

   ```javascript
   const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
   const webpack = require('webpack'); // 用于访问内置插件
   
   module.exports = {
     module: {
       rules: [{ test: /\.txt$/, use: 'raw-loader' }],
     },
     plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
   };
   ```

5. Mode(development/production)

   ```javascript
   module.exports = {
     mode: 'production',
   };
   ```