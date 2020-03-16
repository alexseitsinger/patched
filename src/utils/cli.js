import fs from "fs"
import path from "path"

import execa from "execa"
import pkgDir from "pkg-dir"

import { getESLintConfig, getESLintConfigSync } from "./eslint"

const getProjectRoot = () => path.resolve(pkgDir.sync() || process.cwd())

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
  if (fs.existsSync(parserPath)) {
    return parserPath
  }
  console.error(`Unable to local global parser named ${parserName}`)
  return parserName
}

const getGlobalParserPathSync = parserName => {
  const globalNodeModulesDirectory = getGlobalNodeModulesDirectorySync()
  const parserPath = `${globalNodeModulesDirectory}/${parserName}`
  if (fs.existsSync(parserPath)) {
    return parserPath
  }
  console.error(`Unable to local global parser named ${parserName}`)
  return parserName
}

const createOptions = (eslintConfig, options) => ({
  ...options,
  useEslintrc: false,
  baseConfig: {
    settings: eslintConfig.settings,
  },
  parser: getGlobalParserPathSync(eslintConfig.parser || "espree"),
  parserOptions: eslintConfig.parserOptions,
  envs: Object.keys(eslintConfig.env),
  rules: eslintConfig.rules,
  plugins: eslintConfig.plugins,
})

function createCLIOptionsSync(eslintConfig, options) {
  const projectRoot = getProjectRoot()
  const globalNodeModules = getGlobalNodeModulesDirectorySync()
  const newOptions = {
    ...createOptions(eslintConfig, options),
    cwd: projectRoot,
    resolvePluginsRelativeTo: globalNodeModules,
  }
  if (newOptions.parser.includes("@typescript-eslint/parser")) {
    newOptions.parserOptions = {
      ...newOptions.parserOptions,
      tsconfigRootDir: projectRoot,
      project: [
        `${projectRoot}/tsconfig.json`,
        `${projectRoot}/tsconfig.jest.json`,
        `${projectRoot}/tsconfig.dev.json`,
      ],
      createDefaultProgram: true,
    }
  }
  return newOptions
}

async function createCLIOptions(eslintConfig, options) {
  const projectRoot = getProjectRoot()
  const globalNodeModules = await getGlobalNodeModulesDirectory()
  const newOptions = {
    ...createOptions(eslintConfig, options),
    cwd: projectRoot,
    resolvePluginsRelativeTo: globalNodeModules,
  }
  if (newOptions.parser.includes("@typescript-eslint/parser")) {
    newOptions.parserOptions = {
      ...newOptions.parserOptions,
      project: [
        `${projectRoot}/tsconfig.json`,
        `${projectRoot}/tsconfig.jest.json`,
        `${projectRoot}/tsconfig.dev.json`,
      ],
      tsconfigRootDir: projectRoot,
      createDefaultProgram: true,
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

