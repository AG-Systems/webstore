const path = require('path');

module.exports = {
  context: __dirname + "/app",
  devServer: {
    compress: true,
    disableHostCheck: true, 
    public: 'http://personalsite-ag-systems.c9users.io' // That solved it
  },
  entry: {
    javascript: "./js/app.js",
    html: "./index.html"
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './app/js'),
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
          test: /\.scss$/,
          loader: 'style!css!sass'
      },
    ],
  },
}
