import { createConfig, getPlugins } from "patched-rulesets"

import { EXCLUDED_GROUPS } from "../constants"
import {
  isJest,
  isJestSync,
  isJsonFiles,
  isPackageJsonFile,
  isReact,
  isReactSync,
  isRedux,
  isReduxSync,
  isTypeScript,
  isTypeScriptSync,
  isWebpack,
  isWebpackSync,
} from "../is"


export function determineFeaturesSync(inputs) {
  return {
    react: isReactSync(inputs),
    redux: isReduxSync(inputs),
    typescript: isTypeScriptSync(inputs),
    webpack: isWebpackSync(inputs),
    jest: isJestSync(inputs),
  }
}

export async function determineFeatures(inputs) {
  return {
    react: await isReact(inputs),
    redux: await isRedux(inputs),
    typescript: await isTypeScript(inputs),
    webpack: await isWebpack(inputs),
    jest: await isJest(inputs),
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
    groups = [ ...groups, "jest" ]
  }
  if (features.redux) {
    groups = [ ...groups, "redux" ]
  }
  if (features.react) {
    groups = [ ...groups, "react" ]
  }
  if (features.typescript) {
    groups = [ ...groups, "typescript" ]
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
    groups = [ ...groups, "jest" ]
  }
  if (features.redux) {
    groups = [ ...groups, "redux" ]
  }
  if (features.react) {
    groups = [ ...groups, "react" ]
  }
  if (features.typescript) {
    groups = [ ...groups, "typescript" ]
  }
  return groups
}

function shouldUseEslint(pluginGroups) {
  const isExcluded = pluginGroups
    .map(n => EXCLUDED_GROUPS.includes(n))
    .includes(true)
  if (isExcluded) {
    return false
  }
  return true
}

export function getESLintConfigSync(inputs) {
  const pluginGroups = determinePluginGroupsSync(inputs)
  const useEslint = shouldUseEslint(pluginGroups)
  const pluginNames = getPlugins(pluginGroups)
  return createConfig({ pluginNames, useEslint })
}

export async function getESLintConfig(inputFiles) {
  const pluginGroups = await determinePluginGroups(inputFiles)
  const useEslint = shouldUseEslint(pluginGroups)
  const pluginNames = getPlugins(pluginGroups)
  return createConfig({ pluginNames, useEslint })
}
