module.exports = {
  settings: {
    "import/core-modules": ["fs", "path", "child_process"],
    "import/ignore": ["node_modules", ".yalc"],
    "import/external-module-folders": ["node_modules", ".yalc"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
      },
      jest: {
        jestConfigFile: "./jest.config.js"
      }
    }
  }
}
