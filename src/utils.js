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

async function determineFeatures() {
  return {
    react: await usesDependency("react"),
    redux: await usesDependency("redux"),
    typescript: await usesDependency("typescript"),
    webpack: await usesDependency("webpack"),
    jest: await usesDependency("jest"),
  }
}

function isJsonFiles(files) {
  return files.map(fn => fn.endsWith(".json")).includes(true)
}

function isPackageJsonFile(fileName) {
  if (Array.isArray(fileName)) {
    return fileName.map(fn => path.basename(fn) === "package.json").includes(true)
  }
  if (typeof fileName === "string") {
    return path.basename(fileName) === "package.json"
  }
  return false
}

async function determinePluginGroups(inputFiles) {
  if (isJsonFiles(inputFiles)) {
    if (isPackageJsonFile(inputFiles)) {
      return ["jsonPackage"]
    }
    return ["json"]
  }
  const features = await determineFeatures()
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
  return createConfig({
    pluginNames,
    useEslint,
  })
}

module.exports = {
  determinePluginGroups,
  determineFeatures,
  usesDependency,
  isTypeScriptFile,
  generateConfig,
}
