var webpack = require("webpack"); 

module.exports = {
  entry: './src/app.js',
  output: {
        path: __dirname + '/build/assets/js',
        filename: "bundle.js",
        publicPath:"/assets/js"
    },
  plugins:[new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
 }),
 new webpack.optimize.UglifyJsPlugin()] ,   
  module: {
      loaders: require('./loaders.config')
  }
}

