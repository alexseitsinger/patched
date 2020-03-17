import { CLIEngine } from "../api"

export const mergeReports = reports => {
  let mergedResults = []
  let mergedErrorCount = 0
  let mergedWarningCount = 0

  reports.forEach(({ errorCount, results, warningCount }) => {
    mergedResults = [ ...mergedResults, ...results ]
    mergedErrorCount += errorCount
    mergedWarningCount += warningCount
  })

  return {
    results: mergedResults,
    errorCount: mergedErrorCount,
    warningCount: mergedWarningCount,
  }
}

export const processReport = (report, options) => ({
  ...report,
  results: options.quiet ? CLIEngine.getErrorResults(report.results) : report.results,
})
