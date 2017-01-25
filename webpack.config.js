module.exports = {
  entry: './src/app.js',
  output: {
        path: __dirname + '/build/assets/js',
        filename: "bundle.js",
        publicPath:"/assets/js"
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
       {  test: /\.scss$/, 
          loaders: ['style', 'css', 'sass']
      },
        { test: /\.json$/,
          loader: 'json-loader'
        
      }
    ]
  }
}

