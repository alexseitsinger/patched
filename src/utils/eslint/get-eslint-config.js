import { createConfig, getPlugins } from "patched-rulesets"
import { getPatchedConfig } from "../get-patched-config"
import { determinePluginGroups, determinePluginGroupsSync } from "./determine-plugin-groups"
import { shouldUseES6 } from "./should-use-es6"
import { shouldUseEslint } from "./should-use-eslint"

export const getESLintConfigSync = (inputs) => {
  const pluginGroups = determinePluginGroupsSync(inputs)
  const useES6 = shouldUseES6(pluginGroups)
  const pluginNames = getPlugins({
    names: pluginGroups,
    isES6: useES6,
  })
  const patchedConfig = getPatchedConfig()
  const useEslint = shouldUseEslint(pluginGroups)
  return createConfig({ pluginNames, useEslint, patchedConfig })
}

export const getESLintConfig = async (inputFiles) => {
  const pluginGroups = await determinePluginGroups(inputFiles)
  const useEslint = shouldUseEslint(pluginGroups)
  const useES6 = shouldUseES6(pluginGroups)
  const pluginNames = getPlugins({
    names: pluginGroups,
    isES6: useES6,
  })
  const patchedConfig = getPatchedConfig()
  return createConfig({ pluginNames, useEslint, patchedConfig })
}
