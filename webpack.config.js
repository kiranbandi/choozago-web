var webpack = require('webpack');
module.exports = {
  entry: './js/main.js',
  output: {
        path: __dirname + '/build/scripts',
        filename: "bundle.js"
    },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
       { test: /\.css$/, 
        loader: "style!css" 
    }
    ]
  }

}

