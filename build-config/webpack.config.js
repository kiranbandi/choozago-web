'use strict';

module.exports = {
  entry: ['babel-polyfill','./src/app.js'],
  output: {
        path: __dirname + '/build/assets/bundle',
        filename: "bundle.js",
        publicPath:"/assets/bundle"
    },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8080
  },
  module: {
    loaders: require("./loaders.config")
  }
}

