module.exports = {
  entry: './js/main.js',
  output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
  devServer: {
    inline: true,
    contentBase: './',
    port: 8100
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

