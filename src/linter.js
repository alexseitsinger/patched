import path from "path"

import { CLIEngine } from "./api"
import { getOptions } from "./utils/config"
import { processReport } from "./utils/linter"

export const lintText = async (string, options) => {
  const finalOptions = await getOptions(string, options)
  const linter = new CLIEngine(finalOptions)
  const fileName = options.filename ? path.relative(options.cwd, options.filename) : ""
  const report = linter.executeOnText(string, fileName)
  return processReport(report, finalOptions)
}

export const lintFiles = async (filePaths, options) => {
  const finalOptions = await getOptions(filePaths, options)
  const linter = new CLIEngine(finalOptions)

  // Const filteredFilePaths = filePaths.filter(fp => !linter.isPathIgnored(fp))

  const report = linter.executeOnFiles(filePaths, options)
  return processReport(report, finalOptions)
}

export const { getFormatter } = CLIEngine

export const { getErrorResults } = CLIEngine

export const { outputFixes } = CLIEngine
