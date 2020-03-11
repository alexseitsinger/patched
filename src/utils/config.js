import path from "path"

import { createConfig, getPlugins } from "qt-rulesets"

import { usesDependency, usesDependencySync } from "./dependencies"
import {
  hasTypeScriptFiles,
  hasTypeScriptFilesSync,
  isJestSource,
  isJsonFiles,
  isPackageJsonFile,
  isReactSource,
  isTypeScriptSource,
} from "./is"

const EXCLUDED_GROUPS = ["packageJson", "json"]

export function determineFeaturesSync(inputs) {
  return {
    react: usesDependencySync("react") || isReactSource(inputs),
    redux: usesDependencySync("redux"),
    typescript:
      usesDependencySync("typescript") &&
      (hasTypeScriptFilesSync() || isTypeScriptSource(inputs)),
    webpack: usesDependencySync("webpack"),
    jest: usesDependencySync("jest") || isJestSource(inputs),
  }
}

export async function determineFeatures(inputFiles) {
  return {
    react: (await usesDependency("react")) || isReactSource(inputFiles),
    redux: await usesDependency("redux"),
    typescript:
      (await usesDependency("typescript")) &&
      ((await hasTypeScriptFiles()) || isTypeScriptSource(inputFiles)),
    webpack: await usesDependency("webpack"),
    jest: (await usesDependency("jest")) || isJestSource(inputFiles),
  }
}

export function determinePluginGroupsSync(inputFiles) {
  if (isJsonFiles(inputFiles)) {
    if (isPackageJsonFile(inputFiles)) {
      return ["jsonPackage"]
    }
    return ["json"]
  }
  const features = determineFeaturesSync(inputFiles)
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

export async function determinePluginGroups(inputFiles) {
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
  const isExcluded = pluginGroups
    .map(n => {
      return EXCLUDED_GROUPS.includes(n)
    })
    .includes(true)
  if (isExcluded) {
    return false
  }
  return true
}

export function generateConfigSync(inputs) {
  const pluginGroups = determinePluginGroupsSync(inputs)
  const useEslint = shouldUseEslint(pluginGroups)
  const pluginNames = getPlugins(pluginGroups)
  const config = createConfig({
    pluginNames,
    useEslint,
  })
  return config
}

export async function generateConfig(inputFiles) {
  const pluginGroups = await determinePluginGroups(inputFiles)
  const useEslint = shouldUseEslint(pluginGroups)
  const pluginNames = getPlugins(pluginGroups)
  const config = createConfig({
    pluginNames,
    useEslint,
  })
  return config
}

function getOptionsWithConfig(config, options) {
  const currentDirectory = path.resolve(options.cwd || process.cwd())
  console.log("curDir (getOptions):", currentDirectory)
  return {
    useEslintrc: false,
    baseConfig: {
      settings: config.settings,
    },
    parserOptions: config.parserOptions,
    envs: Object.keys(config.env),
    rules: config.rules,
    plugins: config.plugins,

    /*
     * ResolvePluginsRelativeTo: projectRoot,
     * cwd: projectRoot,
     */
  }
}

export async function getOptions(files, options) {
  const config = await generateConfig(files)
  return getOptionsWithConfig(config, options)
}

export function getOptionsSync(files, options) {
  const config = generateConfigSync(files)
  return getOptionsWithConfig(config, options)
}
