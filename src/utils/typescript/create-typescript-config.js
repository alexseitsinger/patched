import { outputJson, outputJsonSync } from "fs-extra"
import path from "path"
import { determineFeatures, determineFeaturesSync } from "../eslint/determine-features"
import { getPatchedConfig } from "../get-patched-config"
import { getProjectFiles  } from "../get-project-files"
import { getHashedConfigName } from "./get-hashed-config-name"
import { getProjectTypeScriptConfig } from "./get-project-typescript-config"
import { updatePaths } from "./update-paths"
import { getProjectRoot } from "../get-project-root"
import { getFilePaths } from "./get-file-paths"
import { CACHE_DIRECTORY } from "../cache/constants"

export const createTypeScriptConfigSync = nodeVersion => {
  const features = determineFeaturesSync()
  if (!features.typescript) {
    return
  }
  const files = getProjectFiles()
  const { tsConfig } = getProjectTypeScriptConfig()
  const patchedConfig = getPatchedConfig()
  const configName = getHashedConfigName({ nodeVersion, files })
  const configPath = path.join(CACHE_DIRECTORY, configName)
  const newConfig = {
    compilerOptions: {
      ...tsConfig.compilerOptions,
      paths: updatePaths(tsConfig),
      baseUrl: ".", 
    },
    include: [
      "src/**/*.ts",
      "src/**/*.tsx",
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.json",
      "tests/**/*.ts",
      "tests/**/*.tsx",
      "tests/**/*.js",
      "tests/**/*.jsx",
      "tests/**/*.json",
    ],
    exclude: [
      "**/node_modules",
      "**/.yalc",
      "**/dist",
      "**/bin",
      "**/scripts",
    ]
  }

  if (patchedConfig.emitDeclarations) {
    /**
     * This setting assumes that we're using another transpiler to generate our final
     * bundled javascript (eg: webpack). Therefore, we're only using the TypeScript
     * compiler to generate our declaration files.
     */
    newConfig.compilerOptions = {
      ...newConfig.compilerOptions,
      declaration: true,
      outDir: path.relative(getProjectRoot(), patchedConfig.emitDirectory || "types"),
    }
  }
  else {
    newConfig.compilerOptions = {
      ...newConfig.compilerOptions,
      outDir: path.relative(getProjectRoot(), "dist"),
    }
  }

  outputJsonSync(configPath, newConfig, {
    spaces: 2,
  })

  return configPath
}

export const createTypeScriptConfig = async (nodeVersion) => {
  const features = await determineFeatures()
  if (!features.typescript) {
    return
  }
  const files = getProjectFiles()
  const { tsConfig } = getProjectTypeScriptConfig()
  const patchedConfig = getPatchedConfig()
  const configName = getHashedConfigName({ nodeVersion, files })
  const configPath = path.join(getProjectRoot(), configName)
  const newConfig = {
    compilerOptions: {
      ...tsConfig.compilerOptions,
      paths: updatePaths(tsConfig),
      baseUrl: ".",
    },
    include: [
      "src/**/*.ts",
      "src/**/*.tsx",
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.json",
      "tests/**/*.ts",
      "tests/**/*.tsx",
      "tests/**/*.js",
      "tests/**/*.jsx",
      "tests/**/*.json",
    ],
    exclude: [
      "**/node_modules",
      "**/.yalc",
      "**/dist",
      "**/bin",
      "**/scripts",
    ]
  }

  if (patchedConfig.emitDeclarations) {
    /**
     * This setting assumes that we're using another transpiler to generate our final
     * bundled javascript (eg: webpack). Therefore, we're only using the TypeScript
     * compiler to generate our declaration files.
     */
    newConfig.compilerOptions = {
      ...newConfig.compilerOptions,
      declaration: true,
      outDir: path.relative(getProjectRoot(), patchedConfig.emitDirectory || "types"),
    }
  }
  else {
    newConfig.compilerOptions = {
      ...newConfig.compilerOptions,
      outDir: path.relative(getProjectRoot(), "dist"),
    }
  }

  await outputJson(configPath, newConfig, {
    spaces: 2,
  })

  return configPath
}
