import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import WebpackMd5Hash from "webpack-md5-hash";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  debug: true,
  devtool: "source-map",
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, "src/vendor"),
    main: path.resolve(__dirname, "src/index"),
  },
  // [path.resolve(__dirname, "src/index")],
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin("[name].[contenthash].css"),

    // create hash for cache busting
    new WebpackMd5Hash(),

    // create Seperate bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
    }),

    // Create HTML file the includes reference to bundle.js
    new HTMLWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        keepClosingSlash: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      trackJSToken: "a663926da830413d8b68ddc89f4a859e",
    }),
    // Elemnate duplicate files
    new webpack.optimize.DedupePlugin(),
    // Minify
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("css?sourceMap") },
    ],
  },
};
