#!/usr/bin/env node

const resolveCwd = require("resolve-cwd")

const localLinter = resolveCwd.silent("qt/bin/cli")

if (localLinter && localLinter !== __filename) {
  console.log("Using local linter")
  require(localLinter)
} else {
  console.log("Using real linter")
  require("./cli-main")
}
