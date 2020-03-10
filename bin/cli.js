#!/usr/bin/env node

const formatterPretty = require("eslint-formatter-pretty")
const linter = require("../src/linter")
const meow = require("meow")
const { generateConfig } = require("../src/utils")

const { flags: options, input } = meow(
  `
  Usage
    $ qt [<file> ...]

  Options
    --fix        Fix issues
    --errors     Only show errors (no warnings)

  Examples
    $ qt
    $ qt --fix index.js
    $ qt --fix --errors index.js
`,
  {
    flags: {
      errors: {
        type: "boolean",
      },
      fix: {
        type: "boolean",
      },
    },
  }
)

const printReport = report => {
  const reporter = options.reporter
    ? linter.getFormatter(options.reporter)
    : formatterPretty

  process.stdout.write(reporter(report.results))
  process.exitCode = report.errorCount === 0 ? 0 : 1
}

;(async () => {
  const config = await generateConfig(input)
  const report = await linter.lintFiles(input, {
    ...options,
    baseConfig: config,
  })

  if (options.fix) {
    linter.outputFixes(report)
  }

  printReport(report)
})()
