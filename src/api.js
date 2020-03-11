import { CLIEngine as ESLintCLIEngine } from "eslint"

import { getOptionsSync } from "./utils/config"

export { Linter, RuleTester, SourceCode } from "eslint"

export class CLIEngine extends ESLintCLIEngine {
  constructor(providedOptions) {
    const finalOptions = getOptionsSync([], providedOptions)
    super(finalOptions)
  }
}
