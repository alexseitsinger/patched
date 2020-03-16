import path from "path"

import { CLIEngine } from "./api"
import { getCLIOptions } from "./utils/cli"
import { processReport } from "./utils/linter"

export const lintText = async (string, providedOptions) => {
  const cliOptions = await getCLIOptions(string, providedOptions)
  const linter = new CLIEngine(cliOptions)
  const fileName = cliOptions.filename
    ? path.relative(cliOptions.cwd, cliOptions.filename)
    : ""
  const report = linter.executeOnText(string, fileName)
  return processReport(report, cliOptions)
}

export const lintFiles = async (filePaths, providedOptions) => {
  const cliOptions = await getCLIOptions(filePaths, providedOptions)
  const linter = new CLIEngine(cliOptions)
  // Const filteredFilePaths = filePaths.filter(fp => !linter.isPathIgnored(fp))
  const report = linter.executeOnFiles(filePaths, providedOptions)
  return processReport(report, cliOptions)
}

export const getConfigForFile = async (filePath, providedOptions) => {
  const cliOptions = await getCLIOptions(filePath, providedOptions)
  const engine = new CLIEngine(cliOptions)
  return engine.getConfigForFile(filePath)
}

export const { getFormatter } = CLIEngine

export const { getErrorResults } = CLIEngine

export const { outputFixes } = CLIEngine
