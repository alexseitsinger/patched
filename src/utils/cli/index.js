import path from "path"

import execa from "execa"

import { CACHE_DIRECTORY_NAME, cacheDirectory } from "../cache"
import { PROJECT_ROOT } from "../constants"
import { getESLintConfig, getESLintConfigSync } from "../eslint"
import { createTypeScriptConfig, createTypeScriptConfigSync } from "../typescript"

import { IGNORE_PATTERNS_DEFAULT } from "./constants"


export const getIgnorePatterns = () => IGNORE_PATTERNS_DEFAULT

const getGlobalDirectorySync = () => {
  const { stdout } = execa.sync("yarn", [ "global", "dir" ])
  return path.resolve(stdout)
}

const getGlobalDirectory = async () => {
  const { stdout } = await execa("yarn", [ "global", "dir" ])
  return path.resolve(stdout)
}

const getGlobalNodeModulesDirectorySync = () => {
  const globalDirectory = getGlobalDirectorySync()
  const nodeModules = path.resolve(`${globalDirectory}/node_modules`)
  return nodeModules
}

const getGlobalNodeModulesDirectory = async () => {
  const globalDirectory = await getGlobalDirectory()
  const nodeModules = path.resolve(`${globalDirectory}/node_modules`)
  return nodeModules
}

const getGlobalParserPath = async parserName => {
  const globalNodeModulesDirectory = await getGlobalNodeModulesDirectory()
  const parserPath = `${globalNodeModulesDirectory}/${parserName}`
  try {
    return require.resolve(parserPath)
  }
  catch (error) {
    console.error(`Unable to locate global parser named ${parserName}`)
    return parserName
  }
}

const getGlobalParserPathSync = parserName => {
  const globalNodeModulesDirectory = getGlobalNodeModulesDirectorySync()
  const parserPath = `${globalNodeModulesDirectory}/${parserName}`
  try {
    return require.resolve(parserPath)
  }
  catch (error) {
    console.error(`Unable to locate global parser named ${parserName}`)
    return parserName
  }
}

const createOptions = (eslintConfig, options) => ({
  ...options,
  useEslintrc: false,
  cache: true,
  cacheLocation: path.join(cacheDirectory, `${CACHE_DIRECTORY_NAME}.json`),
  baseConfig: {
    settings: eslintConfig.settings,
  },
  parser: eslintConfig.parser
    ? getGlobalParserPathSync(eslintConfig.parser)
    : "espree",
  parserOptions: eslintConfig.parserOptions,
  envs: Object.keys(eslintConfig.env),
  rules: eslintConfig.rules,
  plugins: eslintConfig.plugins,
  ignorePatterns: getIgnorePatterns(),
  cwd: PROJECT_ROOT,
})

function createCLIOptionsSync(eslintConfig, options) {
  const globalNodeModules = getGlobalNodeModulesDirectorySync()
  const newOptions = {
    ...createOptions(eslintConfig, options),
    resolvePluginsRelativeTo: globalNodeModules,
  }
  if (newOptions.parser.includes("@typescript-eslint/parser")) {
    newOptions.parserOptions = {
      ...newOptions.parserOptions,
      project: createTypeScriptConfigSync(),
    }
  }
  return newOptions
}

async function createCLIOptions(eslintConfig, options) {
  const globalNodeModules = await getGlobalNodeModulesDirectory()
  const newOptions = {
    ...createOptions(eslintConfig, options),
    resolvePluginsRelativeTo: globalNodeModules,
  }
  if (newOptions.parser.includes("@typescript-eslint/parser")) {
    newOptions.parserOptions = {
      ...newOptions.parserOptions,
      project: await createTypeScriptConfig(),
    }
  }
  return newOptions
}

export async function getCLIOptions(files, providedOptions) {
  const eslintConfig = await getESLintConfig(files)
  const cliOptions = await createCLIOptions(eslintConfig, providedOptions)
  return cliOptions
}

export function getCLIOptionsSync(files, providedOptions) {
  const eslintConfig = getESLintConfigSync(files)
  const cliOptions = createCLIOptionsSync(eslintConfig, providedOptions)
  return cliOptions
}