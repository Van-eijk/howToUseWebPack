const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    appForm: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "distForm")
  }
};