import fs from "fs"
import path from "path"
import { determineFeatures, determineFeaturesSync } from "../eslint/determine-features"
import { getPatchedConfig } from "../get-patched-config"
import { getProjectRoot } from "../get-project-root"

export const getImportResolvers = async (tsConfigPath) => {
  const { jestFileName, webpackFileName } = getPatchedConfig()
  const features = await determineFeatures()
  const resolvers = {}
  if (features.json || features.packageJSON) {
    return resolvers
  }
  if (features.jest) {
    const jestConfig = path.join(getProjectRoot(), jestFileName)
    const exists = fs.existsSync(jestConfig)
    if (exists) {
      resolvers.jest = {
        jestConfigFile: jestConfig,
      }
    }
  }
  if (features.webpack) {
    const webpackConfig = path.join(getProjectRoot(), webpackFileName)
    const exists = fs.existsSync(webpackConfig)
    if (exists) {
      resolvers.webpack = {
        config: webpackConfig,
      }
    }
  }
  if (features.typescript) {
    if (!tsConfigPath) {
        console.error("TypeScript is enabled, but no path to the tsconfig file was provided.")
    }
    else {
      resolvers.typescript = {
        directory: tsConfigPath,
      }
    }
  }
  return resolvers
}

export const getImportResolversSync = (tsConfigPath) => {
  const { jestFileName, webpackFileName } = getPatchedConfig()
  const features = determineFeaturesSync()
  const resolvers = {}
  if (features.json || features.packageJSON) {
    return resolvers
  }
  if (features.jest) {
    const jestConfig = path.join(getProjectRoot(), jestFileName)
    const exists = fs.existsSync(jestConfig)
    if (exists) {
      resolvers.jest = {
        jestConfigFile: jestConfig,
      }
    }
  }
  if (features.webpack) {
    const webpackConfig = path.join(getProjectRoot(), webpackFileName)
    const exists = fs.existsSync(webpackConfig)
    if (exists) {
      resolvers.webpack = {
        config: webpackConfig,
      }
    }
  }
  if (features.typescript) {
    if (!tsConfigPath) {
        console.error("TypeScript is enabled, but no path to the tsconfig file was provided.")
    }
    else {
      resolvers.typescript = {
        directory: tsConfigPath,
      }
    }
  }
  return resolvers
}
