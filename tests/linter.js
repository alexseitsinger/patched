//const path = require("path")
//const { CLIEngine } = require("eslint")

//const packageRoot = path.resolve(".")

//const packageRoot = process.cwd()
//const nodeModules = path.join(packageRoot, "node_modules")

module.exports = (filePath, config) => {
  const { CLIEngine } = require("eslint")
  const linter = new CLIEngine({
    //cwd: process.cwd(),
    useEslintrc: false,
    baseConfig: {
      settings: {
        ...config.settings,
      },
    },
    rules: {
      ...config.rules,
    },
    plugins: [...config.plugins],
    envs: Object.keys(config.env),
  })
  const report = linter.executeOnText("")
  return report
}
