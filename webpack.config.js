const NodeExternals = require("webpack-node-externals")
const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: {
    api: "./src/api.js",
    linter: "./src/linter.js",
  },
  target: "node",
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: [path.resolve("./src")],
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    /**
     * Clean the contents of output.path before saving new files.
     *
     * NOTE: This should only be used on the config that runs first, since the
     * following configs will re-clear the previously built files.
     */

    new CleanWebpackPlugin({
      dry: false,
    }),
  ],
  externals: [
    new NodeExternals({
      whitelist: [
        "execa",
        "patched-rulesets",
        "fast-glob",
        "del",
        "tempy",
        "read-pkg-up",
        "pkg-dir",
        "find-cache-dir",
        "del",
        "dlv",
        "execa",
        "fs-extra",
        "get-stdin",
        "globby",
        "imurmurhash",
        "json-stable-stringify-without-jsonify",
        "line-reader",
        "lodash",
        "meow",
        "pkg-dir",
        "read-pkg-up",
        "resolve-cwd",
        "tempy",
        "to-absolute-glob",
      ],
      modulesFromFile: {
        include: [ "devDependencies", "dependencies" ],
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        extractComments: false,
        terserOptions: {
          warnings: false,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  node: {
    // __dirname: false,
  },
  resolve: {
    // MainFields: ["module", "main"],

    extensions: [ ".json", ".js", ".jsx", ".ts", ".tsx" ],
    alias: {
      tests: path.resolve("./tests"),
      src: path.resolve("./src"),
    },
  },
}
