import fs from "fs"
import path from "path"

import del from "del"
import { createConfig, getPlugins } from "qt-rulesets"
import tempy from "tempy"

import { EXCLUDED_GROUPS, PROJECT_ROOT } from "./constants"
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
} from "./is"

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

export const createFile = (data, options) => {
  const file = tempy.file(options)
  fs.writeFileSync(file, data, { encoding: "utf8" })
  const clean = async () => {
    const removed = await del([file])
    console.log(`Successfully delete temporary file: ${removed}`)
  }
  return [file, clean]
}

export const getTsConfig = () => {
  const config = {
    include: ["src"],
    exclude: ["tests", "node_modules", ".yalc", "build", "dist"],
    compilerOptions: {
      noEmitOnError: true,
      noErrorTruncation: true,
      noImplicitAny: false,
      noImplicitReturns: true,
      noImplicitThis: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      removeComments: true,
      resolveJsonModule: true,
      strictNullChecks: true,
      sourceMap: false,
      noFallthroughCasesInSwitch: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      jsx: "preserve",
      lib: ["es2015", "dom"],
      target: "es2015",
      module: "esnext",
      moduleResolution: "node",
    },
  }
  const data = JSON.stringify(config)
  const [file, clean] = createFile(data, { extension: "json" })
  return file
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
  const newOptions = {
    ...options,
    useEslintrc: false,
    baseConfig: {
      settings: config.settings,
    },
    parser: config.parser || "espree",
    parserOptions: config.parserOptions,
    envs: Object.keys(config.env),
    rules: config.rules,
    plugins: config.plugins,
    cwd: path.resolve(options.cwd || process.cwd()),
  }
  if (newOptions.parser === "@typescript-eslint/parser") {
    newOptions.parserOptions.project = `${PROJECT_ROOT}/tsconfig.json`
  }
  return newOptions
}

export async function getOptions(files, options) {
  const config = await generateConfig(files)
  return getOptionsWithConfig(config, options)
}

export function getOptionsSync(files, options) {
  const config = generateConfigSync(files)
  return getOptionsWithConfig(config, options)
}
