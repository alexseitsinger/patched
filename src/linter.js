const path = require("path")
//const { CLIEngine } = require("eslint")
const { generateConfig } = require("./utils")
const { CLIEngine } = require("./cli-engine")

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
  results: options.quiet ? CLIEngine.getErrorResults(report.results) : report.results,
})

const runLinter = (filePaths, options) => {
  const linter = new CLIEngine(options)
  const filteredFilePaths = filePaths.filter(fp => !linter.isPathIgnored(fp))
  const report = linter.executeOnFiles(filteredFilePaths, options)
  return processReport(report, options)
}

const lintText = (string, options) => {
  const finalOptions = {
    ...options,
    cwd: path.resolve(options.cwd || process.cwd()),
    baseConfig: generateConfig(string),
    useEslintrc: false,
  }

  const linter = new CLIEngine(finalOptions)

  if (options.filename) {
    const fileName = path.relative(options.cwd, options.filename)

    if (linter.isPathIgnored(options.filename)) {
      return {
        errorCount: 0,
        warningCount: 0,
        results: [
          {
            errorCount: 0,
            warningCount: 0,
            messages: [],
            filePath: fileName,
          },
        ],
      }
    }
  }

  const report = linter.executeOnText(string, options.filename)
  return processReport(report, finalOptions)
}

const lintFiles = (filePaths, options) => {
  const finalOptions = {
    ...options,
    baseConfig: generateConfig(filePaths),
    cwd: path.resolve(options.cwd || process.cwd()),
    useEslintrc: false,
  }
  const report = runLinter(filePaths, finalOptions)
  return processReport(report, finalOptions)
}


module.exports = {
  lintText,
  lintFiles,
  getFormatter: CLIEngine.getFormatter,
  getErrorResults: CLIEngine.getErrorResults,
  outputFixes: CLIEngine.outputFixes,
}
