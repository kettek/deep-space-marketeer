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
    alias: {
      factories: path.resolve(__dirname, 'src/factories'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      stores: path.resolve(__dirname, 'src/stores'),
      actions: path.resolve(__dirname, 'src/actions'),
      api: path.resolve(__dirname, 'src/api'),
    },
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
  ],
  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    host: '0.0.0.0',
    port: 9000
  }
};
