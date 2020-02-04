const path = require('path')

module.exports = {
  entry: "./client.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: "static/bundle.js"
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".js", ".marko"]
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        loader: "@marko/webpack/loader"
      }
    ]
  }
};
