#!/usr/bin/env node

const formatterPretty = require("eslint-formatter-pretty")
const getStdin = require("get-stdin")
const linter = require("../src/linter")
const meow = require("meow")

const { flags: options, input } = meow(
  `
  Usage
    $ qt [<file> ...]

  Options
    --fix                 Fix issues
    --errors              Only show errors (no warnings)
    --stdin               Validate/fix code from stdin
    --stdin-filename      Specify a filename for the --stdin option

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

if (input[0] === "-") {
  options.stdin = true
  input.shift()
}

const printReport = report => {
  const reporter = options.reporter
    ? linter.getFormatter(options.reporter)
    : formatterPretty

  process.stdout.write(reporter(report.results))
  process.exitCode = report.errorCount === 0 ? 0 : 1
}

;(async () => {
  if (options.stdin) {
    const stdin = await getStdin()
    console.log(stdin)

    if (options.fix) {
      const result = linter.lintText(stdin, options).results[0]
      console.log(result.output || stdin)
      return
    }

    printReport(linter.lintText(stdin, options))
  } else {
    const report = await linter.lintFiles(input, options)

    if (options.fix) {
      linter.outputFixes(report)
    }

    printReport(report)
  }
})()
