import path from "path"
import { determineFeatures, determineFeaturesSync } from "../eslint/determine-features"
import { createTypeScriptConfig, createTypeScriptConfigSync } from "../typescript/create-typescript-config"
import { createOptions } from "./create-options"
import { getGlobalNodeModulesDirectory, getGlobalNodeModulesDirectorySync } from "./get-global-node-modules-directory"
import { getImportResolvers, getImportResolversSync } from "./get-import-resolvers"


export const createCLIOptionsSync = (eslintConfig, options) => {
  const tsConfigPath = createTypeScriptConfigSync()
  const newEslintConfig = {
    ...eslintConfig,
    settings: {
      ...eslintConfig.settings,
      ...(eslintConfig.plugins.includes("import") ? {
        "import/resolver": getImportResolversSync(tsConfigPath),
      } : {}),
    }
  }
  const newOptions = {
    ...createOptions(newEslintConfig, options),
    resolvePluginsRelativeTo: getGlobalNodeModulesDirectorySync(),
  }
  const features = determineFeaturesSync()
  if (features.typescript) {
    if (tsConfigPath) {
      if (newEslintConfig.plugins.includes("@typescript-eslint/eslint-plugin")) {
        newOptions.parserOptions = {
          ...newOptions.parserOptions,
          project: tsConfigPath,
          tsconfigRootDir: path.dirname(tsConfigPath),
          createDefaultProgram: true,
        }
      }
    }
    else {
      console.error("TypeScript is enabled, but no tsconfig path was provided.")
    }
  }
  return newOptions
}

export const createCLIOptions = async (eslintConfig, options) => {
  const tsConfigPath = await createTypeScriptConfig()
  const newEslintConfig = {
    ...eslintConfig,
    settings: {
      ...eslintConfig.settings,
      ...(eslintConfig.plugins.includes("import") ? {
        "import/resolver": await getImportResolvers(tsConfigPath),
      } : {}),
    }
  }
  const newOptions = {
    ...createOptions(newEslintConfig, options),
    resolvePluginsRelativeTo: await getGlobalNodeModulesDirectory(),
  }
  const features = await determineFeatures()
  if (features.typescript) {
    if (tsConfigPath) {
      if (newEslintConfig.plugins.includes("@typescript-eslint/eslint-plugin")) {
        newOptions.parserOptions = {
          ...newOptions.parserOptions,
          project: tsConfigPath,
          tsconfigRootDir: path.dirname(tsConfigPath),
          createDefaultProgram: true,
        }
      }
    }
    else {
      console.error("TypeScript is enabled, but no path to a tsconfig was provided.")
    }
  }
  return newOptions
}
