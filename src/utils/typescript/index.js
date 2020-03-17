const fs = require("fs")
const os = require("os")
const path = require("path")

const globby = require("globby")
const murmur = require("imurmurhash")
const packageJSON = require("../../../package.json")
const pkgDir = require("pkg-dir")
const stringify = require("json-stable-stringify-without-jsonify")
const toAbsoluteGlob = require("to-absolute-glob")
const { isTypeScriptFile } = require("./is")
const { outputJson, outputJsonSync, readJson, readJsonSync } = require("fs-extra")

const {
  IGNORED_DIRECTORY_NAMES,
  NODE_VERSION_DEFAULT,
  TARGET_EXTENSIONS,
  TSCONFIG_NAME,
} = require("./constants")
const { cacheDirectory } = require("../cache")
const { PROJECT_ROOT } = require("../constants")

export * from "./constants"

const getProjectFilesSync = () => {
  const directories = IGNORED_DIRECTORY_NAMES.join(",")
  const extensions = TARGET_EXTENSIONS.join(",")
  const fileGlob = toAbsoluteGlob(`**/*.{${extensions}}`, { cwd: PROJECT_ROOT })
  const ignoreGlob = toAbsoluteGlob(`!**/{${directories}}`, { cwd: PROJECT_ROOT })
  const files = globby.sync([ fileGlob, ignoreGlob ], {
    gitignore: true,
    cwd: PROJECT_ROOT,
  })
  return files
}

const getProjectFiles = async () => {
  const directories = IGNORED_DIRECTORY_NAMES.join(",")
  const extensions = TARGET_EXTENSIONS.join(",")
  const fileGlob = toAbsoluteGlob(`**/*.{${extensions}}`, { cwd: PROJECT_ROOT })
  const ignoreGlob = toAbsoluteGlob(`!**/{${directories}}`, { cwd: PROJECT_ROOT })
  const files = await globby([ fileGlob, ignoreGlob ], {
    gitignore: true,
    cwd: PROJECT_ROOT,
  })
  return files
}

const getHashedConfigName = ({ files = [], nodeVersion = NODE_VERSION_DEFAULT }) => {
  const prefix = `${packageJSON.version}_${nodeVersion}`
  const suffix = stringify({ files: files.sort() })
  const full = `${prefix}_${suffix}`
  const hash = murmur(full)
    .result()
    .toString(36)
  const name = `tsconfig.${hash}.json`
  return name
}

const getProjectTypeScriptConfig = async () => {
  const projectRoot = await pkgDir()
  const tsConfigPath = path.join(projectRoot, TSCONFIG_NAME)
  const tsConfig = await readJson(tsConfigPath)
  return { tsConfig, tsConfigPath }
}

const getProjectTypeScriptConfigSync = () => {
  const projectRoot = pkgDir.sync()
  const tsConfigPath = path.join(projectRoot, TSCONFIG_NAME)
  const tsConfig = readJsonSync(tsConfigPath)
  return { tsConfig, tsConfigPath }
}

const updatePaths = tsConfig => {
  try {
    const { paths } = tsConfig.compilerOptions
    const pathKeys = Object.keys(paths)
    const newPaths = {}
    pathKeys.forEach(pathKey => {
      newPaths[pathKey] = paths[pathKey].map(p => path.relative(PROJECT_ROOT, p))
    })

    return newPaths
  }
  catch (error) {
    return {}
  }
}
export const createTypeScriptConfigSync = nodeVersion => {
  const files = getProjectFilesSync()
  const { tsConfig } = getProjectTypeScriptConfigSync()
  const configName = getHashedConfigName({ nodeVersion, files })
  const configPath = path.join(cacheDirectory, configName)
  const newConfig = {
    ...tsConfig,
    compilerOptions: {
      ...tsConfig.compilerOptions,
      baseUrl: PROJECT_ROOT,
      paths: updatePaths(tsConfig),
    },
    files: files.filter(isTypeScriptFile),
  }
  outputJsonSync(configPath, newConfig)
  return configPath
}


export const createTypeScriptConfig = async nodeVersion => {
  const files = await getProjectFiles()
  const { tsConfig } = await getProjectTypeScriptConfig()
  const configName = getHashedConfigName({ nodeVersion, files })
  const configPath = path.join(cacheDirectory, configName)
  const newConfig = {
    ...tsConfig,
    compilerOptions: {
      ...tsConfig.compilerOptions,
      paths: updatePaths(tsConfig),
      baseUrl: PROJECT_ROOT,
    },
    files: files.filter(isTypeScriptFile),
  }

  await outputJson(configPath, newConfig)
  return configPath
}
