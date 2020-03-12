import { CLIEngine as ESLintCLIEngine } from "eslint"

import { getCLIOptionsSync } from "./utils/cli"

export class CLIEngine extends ESLintCLIEngine {
  constructor(providedOptions) {
    const cliOptions = getCLIOptionsSync([], providedOptions)
    super(cliOptions)
  }
}
export { getPrettierConfig } from "./utils/prettier"
export { getESLintConfig, getESLintConfigSync } from "./utils/eslint"
export { Linter, RuleTester, SourceCode } from "eslint"
