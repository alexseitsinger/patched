#!/usr/bin/env node

const formatterPretty = require("eslint-formatter-pretty")
const meow = require("meow")
const {
  getConfigForFile,
  getFormatter,
  lintFiles,
  lintText,
  outputFixes,
} = require("../dist/linter")

const { flags: options, input } = meow(
  `
  Usage
    $ patched [<file> ...]

  Options
    --fix                 Fix issues
    --errors-only         Only show errors (no warnings)
    --stdin               Validate/fix code from stdin
    --stdin-filename      Specify a filename for the --stdin option
    --print-config        Don't lint, just print the configuration used for the file.

  Examples
    $ patched
    $ patched --fix index.js
`,
  {
    booleanDefault: undefined,
    flags: {
      errorsOnly: {
        type: "boolean",
        default: false,
      },
      fix: {
        type: "boolean",
        default: false,
      },
      stdin: {
        type: "string",
      },
      stdinFilename: {
        type: "string",
      },
      printConfig: {
        type: "boolean",
        default: false,
      },
    },
  }
)

if (input[0] === "-") {
  options.stdin = true
  input.shift()
}

const printReport = report => {
  const reporter = options.reporter ? getFormatter(options.reporter) : formatterPretty
  process.stdout.write(reporter(report.results))
  process.exitCode = report.errorCount === 0 ? 0 : 1
};

(async () => {
  const isPrintingConfig = Boolean(options.printConfig)
  const isFixing = Boolean(options.fix)
  const isStdin = Boolean(options.stdin)
  const target = options.stdin ? input.shift() || "" : input
  const providedOptions = options

  if (isStdin) {
    if (isPrintingConfig) {
      const config = await getConfigForFile(target[0])
      console.log(config)
      return
    }

    const report = await lintText(target, providedOptions)

    if (isFixing) {
      const result = report.results[0].output
      console.log(result)
      return
    }

    printReport(report)
    return
  }

  if (isPrintingConfig) {
    const config = await getConfigForFile(target[0])
    console.log(config)
    return
  }

  const report = await lintFiles(target, providedOptions)

  if (isFixing) {
    outputFixes(report)
  }

  printReport(report)
})()
