const path = require("path");

module.exports = {
  mode: "development", // Or 'production' for optimized builds
  entry: "./js/main.js", // Your main entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
