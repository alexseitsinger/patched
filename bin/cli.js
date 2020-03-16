#!/usr/bin/env node

const formatterPretty = require("eslint-formatter-pretty")
const linter = require("../dist/linter")
const meow = require("meow")


const { flags: options, input } = meow(
  `
  Usage
    $ patched [<file> ...]

  Options
    --fix                 Fix issues
    --errors              Only show errors (no warnings)
    --stdin               Validate/fix code from stdin
    --stdin-filename      Specify a filename for the --stdin option

  Examples
    $ patched
    $ patched --fix index.js
    $ patched --fix --errors index.js
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

(async () => {
  const isFixing = Boolean(options.fix)
  const isStdin = Boolean(options.stdin)
  const target = options.stdin ? input.shift() || "" : input
  const providedOptions = options
  if (isStdin) {
    const report = await linter.lintText(target, providedOptions)

    if (isFixing) {
      const result = report.results[0].output
      console.log(result)
      return
    }

    printReport(report)
    return
  }
  const report = await linter.lintFiles(target, providedOptions)

  if (isFixing) {
    linter.outputFixes(report)
  }
  printReport(report)
})()
