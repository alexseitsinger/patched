import { CLIEngine as ESLintCLIEngine } from "eslint"
import { getCLIOptionsSync } from "./utils/cli/get-cli-options"
import { pathExists } from "fs-extra"
import { getProjectRoot } from "./utils/get-project-root"
import path from "path"

export class CLIEngine extends ESLintCLIEngine {
  executeOnText(string, providedOptions) {
    const cliOptions = getCLIOptionsSync(string, providedOptions)
    const engine = new ESLintCLIEngine(cliOptions)
    return engine.executeOnText(string, providedOptions) 
  }

  executeOnFiles(files, providedOptions) {
    const filePaths = files.map(file => {
      return path.relative(getProjectRoot(), file)
    })
    const cliOptions = getCLIOptionsSync(filePaths, providedOptions)
    const engine = new ESLintCLIEngine(cliOptions)
    return engine.executeOnFiles(files, cliOptions)
  }

  getConfigForFile(filePath, providedOptions) {
    const file = path.relative(getProjectRoot(), filePath)
    console.log("filePath: ", file)
    const cliOptions = getCLIOptionsSync(file, providedOptions)
    const engine = new ESLintCLIEngine(cliOptions)
    return engine.getConfigForFile(filePath)
  }
}

export { Linter, RuleTester, SourceCode } from "eslint"

