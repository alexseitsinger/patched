const { CLIEngine } = require("eslint")

const { generateConfig } = require("./utils")
const path = require("path")

class WrappedCLIEngine extends CLIEngine {
  constructor({ baseConfig, ...restOptions }) {
    const defaultConfig = generateConfig()

    const finalOptions = {
      ...restOptions,
      baseConfig: baseConfig || defaultConfig,
      //cwd: path.resolve(cwd || process.cwd()),
      useEslintrc: false,
    }
    super(finalOptions)
  }
}

module.exports = {
  CLIEngine: WrappedCLIEngine,
}
