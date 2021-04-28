const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "[name].js",
    libraryTarget: "umd"
  },
  resolve: {
    fallback: { path: require.resolve("path-browserify") }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
};
