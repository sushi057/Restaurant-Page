const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    menu: './src/menu.js',
    gallery: './src/gallery.js',
    contacct: './src/contact.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
    }),
    new NodePolyfillPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    // hot: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
  },
};