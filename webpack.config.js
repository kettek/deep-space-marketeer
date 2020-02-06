const path = require('path')
const CSSExtractPlugin = require('mini-css-extract-plugin');

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
      },
      {
        test: /\.css$/,
        //use: [CSSExtractPlugin.loader, 'style-loader', 'css-loader']
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CSSExtractPlugin({
      filename: "[name].css"
    })
  ]
};
