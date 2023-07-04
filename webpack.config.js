const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist/js",
    filename: "index.js",
  },
  devServer: {
    // contentBase: './dist',
    static: {
      directory: path.join(__dirname, "public"),
    },
    // host: '10.10.15.8',
    host: "localhost",
    compress: true,
    port: 9100,
  },
  resolve: {
    fallback: {
    },
    alias: {
    },
  },
};
