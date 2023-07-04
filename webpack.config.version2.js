const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    reactIndex: './src/reactIndex.js',
  },
  output: {
    path: __dirname + '/dist/js',
    filename: 'reactIndex.js'
  },
  devServer: {
    // contentBase: './dist',
    static: {
      directory: path.join(__dirname, 'public'),
    },
    host: '127.0.0.1',
    compress: true,
    port: 9101
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
}