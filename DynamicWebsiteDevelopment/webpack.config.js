var path = require("path");
module.exports = {
  entry: ".js/main.js", //insert name of file here
  output: {
    path: "./js",
    filename: "main-bundled.js"
  },
  resolve: {
    fallback: path.join(__dirname, "js/helpers")
  },
  module: {
    loaders: [
      {test: /\.hbs$/, loader: "handlebars-loader"}
    ]
  }
};