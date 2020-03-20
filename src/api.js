import { CLIEngine as ESLintCLIEngine } from "eslint"
import { getCLIOptionsSync } from "./utils/cli/get-cli-options"

export class CLIEngine extends ESLintCLIEngine {
  executeOnText(string, providedOptions) {
    const cliOptions = getCLIOptionsSync(string, providedOptions)
    const engine = new ESLintCLIEngine(cliOptions)
    return engine.executeOnText(string, providedOptions) 
  }

  executeOnFiles(filePaths, providedOptions) {
    const cliOptions = getCLIOptionsSync(filePaths, providedOptions)
    const engine = new ESLintCLIEngine(cliOptions)
    return engine.executeOnFiles(files, cliOptions)
  }

  getConfigForFile(filePath, providedOptions) {
    const cliOptions = getCLIOptionsSync(filePath, providedOptions)
    const engine = new ESLintCLIEngine(cliOptions)
    return engine.getConfigForFile(filePath)
  }
}

export { Linter, RuleTester, SourceCode } from "eslint"

