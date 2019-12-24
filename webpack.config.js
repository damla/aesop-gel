const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

console.log("path.resolve(__dirname,)", path.resolve(__dirname, "src"));
