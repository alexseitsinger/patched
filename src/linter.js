const path = require("path")
const { CLIEngine } = require("eslint")

const mergeReports = reports => {
  let mergedResults = []
  let mergedErrorCount = 0
  let mergedWarningCount = 0

  reports.forEach(({ errorCount, results, warningCount }) => {
    mergedResults = [...mergedResults, ...results]
    mergedErrorCount += errorCount
    mergedWarningCount += warningCount
  })

  return {
    results: mergedResults,
    errorCount: mergedErrorCount,
    warningCount: mergedWarningCount,
  }
}

const processReport = (report, options) => ({
  ...report,
  results: options.quiet
    ? CLIEngine.getErrorResults(report.results)
    : report.results,
})

const runLinter = (filePaths, options) => {
  const linter = new CLIEngine(options)
  const filteredFilePaths = filePaths.filter(fp => !linter.isPathIgnored(fp))
  const report = linter.executeOnFiles(filteredFilePaths, options)
  return processReport(report, options)
}

const lintFiles = async (filePaths, options) => {
  const newOptions = {
    ...options,
    cwd: path.resolve(options.cwd || process.cwd()),
    useEslintrc: false,
  }

  const report = runLinter(filePaths, newOptions)
  return report
}

module.exports = {
  lintFiles,
  getFormatter: CLIEngine.getFormatter,
  getErrorResults: CLIEngine.getErrorResults,
  outputFixes: CLIEngine.outputFixes,
}
