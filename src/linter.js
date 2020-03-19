import path from "path"
import { CLIEngine } from "./api"
import { getCLIOptions, getCLIOptionsSync } from "./utils/cli/get-cli-options"


const processReport = (report, options) => ({
  ...report,
  results: options.quiet ? CLIEngine.getErrorResults(report.results) : report.results,
})

export const lintText = (string, providedOptions) => {
  const engine = new CLIEngine(providedOptions)
  const fileName = providedOptions.filename
    ? path.relative(providedOptions.cwd, providedOptions.filename)
    : ""
  const report = engine.executeOnText(string, fileName)
  return processReport(report, providedOptions)
}

export const lintFiles = (filePaths, providedOptions) => {
  const engine = new CLIEngine(providedOptions)
  // Const filteredFilePaths = filePaths.filter(fp => !engine.isPathIgnored(fp))
  const report = engine.executeOnFiles(filePaths, providedOptions)
  return processReport(report, providedOptions)
}

export const getConfigForFile = (filePath, providedOptions) => {
  const engine = new CLIEngine(providedOptions)
  return engine.getConfigForFile(filePath)
}

export const { getFormatter } = CLIEngine

export const { getErrorResults } = CLIEngine

export const { outputFixes } = CLIEngine
