import { createConfig, getPlugins } from "patched-rulesets"

import { isJest, isJestSync } from "../jest/is"
import { isJsonFiles, isPackageJsonFile } from "../package/is"
import { isReact, isReactSync } from "../react/is"
import { isRedux, isReduxSync } from "../redux/is"
import { isTypeScript, isTypeScriptSync } from "../typescript/is"
import { isWebpack, isWebpackSync } from "../webpack/is"
import { getPatchedConfig, getPatchedConfigSync } from ".."

import { EXCLUDED_GROUPS } from "./constants"

export * from "./constants"

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
  const isExcluded = pluginGroups.map(n => EXCLUDED_GROUPS.includes(n)).includes(true)
  if (isExcluded) {
    return false
  }
  return true
}

export function getESLintConfigSync(inputs) {
  const pluginGroups = determinePluginGroupsSync(inputs)
  const useEslint = shouldUseEslint(pluginGroups)
  const pluginNames = getPlugins({
    names: pluginGroups,
    isES6: true,
  })
  const patchedConfig = getPatchedConfigSync()
  return createConfig({ pluginNames, useEslint, patchedConfig })
}

export async function getESLintConfig(inputFiles) {
  const pluginGroups = await determinePluginGroups(inputFiles)
  const useEslint = shouldUseEslint(pluginGroups)
  const pluginNames = getPlugins({
    names: pluginGroups,
    isES6: true,
  })
  const patchedConfig = await getPatchedConfig()
  return createConfig({ pluginNames, useEslint, patchedConfig })
}
