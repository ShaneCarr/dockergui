const path = require('path');

module.exports = {
  entry: './app/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/, },
    ],
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/public/js"
},
};