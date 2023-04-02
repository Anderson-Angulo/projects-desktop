const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path')

module.exports={
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"build.js"
  },
  resolve:{
    extensions:['.js']
  },
  mode:"development",
  module:{
    rules:[
      {
         test:/\.js/,
         exclude:/node_modules/,
         use:{
          loader:"babel-loader"
         }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      inject:true,
      template:'./public/index.html',
      filename:"./index.html"
    })
  ],
  devServer:{
    static:path.join(__dirname,'dist'),
    compress:true,
    port:3007,
    historyApiFallback:true
  }
}