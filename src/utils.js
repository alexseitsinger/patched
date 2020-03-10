const isArray = require("lodash/isArray")
const isString = require("lodash/isString")
const path = require("path")
const readPkgUp = require("read-pkg-up")

const { createConfig } = require("./setup")
const { getPlugins } = require("./groups")

const typeScriptExtensions = [".ts", ".tsx"]
const dependencyKeys = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies",
]

function isTypeScriptFile(extension) {
  return typeScriptExtensions.includes(extension)
}

async function usesDependency(dependencyName) {
  const { packageJson } = await readPkgUp()
  return dependencyKeys
    .map(key => {
      if (packageJson[key]) {
        const value = packageJson[key]
        const names = Object.keys(value)
        return names.includes(dependencyName)
      }
      return false
    })
    .includes(true)
}

function isReactSource(code) {
  if (!isString(code)) {
    return false
  }
  const keywords = [' from "react="', "/** @jsx jsx */"]
  return keywords
    .map(k => {
      return code.includes(k)
    })
    .includes(true)
}

function isJestSource(code) {
  if (!isString(code)) {
    return false
  }
  const keywords = ["describe(", "it(", "test(", "expect("]
  return keywords
    .map(k => {
      return code.includes(k)
    })
    .includes(true)
}

async function determineFeatures(inputFiles) {
  const isJsFiles = isJavaScriptFiles(inputFiles)
  return {
    react: (await usesDependency("react")) || isReactSource(inputFiles),
    redux: await usesDependency("redux"),
    typescript:
      !isJsFiles &&
      ((await usesDependency("typescript")) || isTypeScriptSource(inputFiles)),
    webpack: await usesDependency("webpack"),
    jest: (await usesDependency("jest")) || isJestSource(inputFiles),
  }
}

function isJSONSource(code) {
  try {
    JSON.parse(code)
    return true
  } catch (error) {
    return false
  }
}

function isJsonFiles(files) {
  if (isString(files)) {
    return isJSONSource(files)
  }
  if (isArray(files)) {
    return files.map(fn => fn.endsWith(".json")).includes(true)
  }
  return false
}

function isTypeScriptSource(code) {
  if (!isString(code)) {
    return false
  }
  const keywords = ["type ", "interface "]
  return keywords
    .map(k => {
      return code.includes(k)
    })
    .includes(true)
}

function isPackageJsonFile(fileName) {
  if (isArray(fileName)) {
    return fileName.map(fn => path.basename(fn) === "package.json").includes(true)
  }
  if (isString(fileName)) {
    return path.basename(fileName) === "package.json"
  }
  return false
}

function isJavaScriptFiles(inputFiles = []) {
  if (!isArray(inputFiles)) {
    if (isString(inputFiles)) {
      if (inputFiles.endsWith(".js") || inputFiles.endsWith(".jsx")) {
        return true
      }
    }
    return false
  }
  return inputFiles
    .map(fn => {
      return fn.endsWith(".js") || fn.endsWith(".jsx")
    })
    .every(r => r === true)
}

async function determinePluginGroups(inputFiles) {
  if (isJsonFiles(inputFiles)) {
    if (isPackageJsonFile(inputFiles)) {
      return ["jsonPackage"]
    }
    return ["json"]
  }
  const features = await determineFeatures(inputFiles)
  let groups = []
  if (features.jest) {
    groups = [...groups, "jest"]
  }
  if (features.redux) {
    groups = [...groups, "redux"]
  }
  if (features.react) {
    groups = [...groups, "react"]
  }
  if (features.typescript) {
    groups = [...groups, "typescript"]
  }
  return groups
}

function shouldUseEslint(pluginGroups) {
  if (pluginGroups.includes("json") || pluginGroups.includes("jsonPackage")) {
    return false
  }
  return true
}

async function generateConfig(inputFiles) {
  const pluginGroups = await determinePluginGroups(inputFiles)
  const useEslint = shouldUseEslint(pluginGroups)
  const pluginNames = getPlugins(pluginGroups)
  const config = createConfig({
    pluginNames,
    useEslint,
  })
  console.log(config)
  return config
}

module.exports = {
  determinePluginGroups,
  determineFeatures,
  usesDependency,
  isTypeScriptFile,
  generateConfig,
}
