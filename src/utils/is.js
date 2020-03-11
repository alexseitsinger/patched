import path from "path"

import fastGlob from "fast-glob"
import isArray from "lodash/isArray"
import isString from "lodash/isString"
import pkgDir from "pkg-dir"

import { hasDependency, readPackageJson } from "./dependencies"

const REACT_SOURCES = [' from "react="', "/** @jsx jsx */"]
const TYPESCRIPT_SOURCES = ["type ", "interface "]
const JEST_SOURCES = ["describe(", "it(", "test(", "expect("]
const TYPESCRIPT_EXTENSIONS = [".ts", ".tsx"]
const TYPESCRIPT_PATTERNS = TYPESCRIPT_EXTENSIONS.map(extension => `**/*.${extension}`)
const SEARCH_PROJECT_OPTIONS = {
  deep: 2,
  followSymbolicLinks: false,
  ignore: [
    "**/node_modules/**",
    "**/.yalc/**",
    "**/build/**",
    "**/dist/**",
    "webpack.config.js",
    "babel.config.js",
    "bin/*",
  ],
}

export function isReactSource(code) {
  if (!isString(code)) {
    return false
  }
  return REACT_SOURCES.map(k => {
    return code.includes(k)
  }).includes(true)
}

export function isJestSource(code) {
  if (!isString(code)) {
    return false
  }
  return JEST_SOURCES.map(k => {
    return code.includes(k)
  }).includes(true)
}

export function isTypeScriptProject() {
  const packageJson = readPackageJson()
  return hasDependency(packageJson, "typescript")
}

export function searchProjectSync(globPatterns) {
  const cwd = pkgDir.sync()
  console.log("pkgDir:", cwd)
  return fastGlob.sync(globPatterns, {
    cwd,
    ...SEARCH_PROJECT_OPTIONS,
  })
}

export async function searchProject(globPatterns) {
  const cwd = await pkgDir()
  console.log("pkgDir:", cwd)
  return fastGlob(globPatterns, {
    cwd,
    ...SEARCH_PROJECT_OPTIONS,
  })
}

export function hasTypeScriptFilesSync() {
  return searchProjectSync(TYPESCRIPT_PATTERNS).length > 0
}

export async function hasTypeScriptFiles() {
  return (await searchProject(TYPESCRIPT_PATTERNS).length) > 0
}

export function isTypeScriptFile(extension) {
  return TYPESCRIPT_EXTENSIONS.includes(extension)
}

export function isJSONSource(code) {
  try {
    JSON.parse(code)
    return true
  } catch (error) {
    return false
  }
}

export function isJsonFiles(files) {
  if (isString(files)) {
    return isJSONSource(files)
  }
  if (isArray(files)) {
    return files.map(fn => fn.endsWith(".json")).includes(true)
  }
  return false
}

export function isTypeScriptSource(code) {
  if (!isString(code)) {
    return false
  }
  return TYPESCRIPT_SOURCES.map(k => {
    return code.includes(k)
  }).includes(true)
}

export function isPackageJsonFile(fileName) {
  if (isArray(fileName)) {
    return fileName.map(fn => path.basename(fn) === "package.json").includes(true)
  }
  if (isString(fileName)) {
    return path.basename(fileName) === "package.json"
  }
  return false
}

export function isJavaScriptFiles(inputFiles = []) {
  if (!isArray(inputFiles)) {
    if (isString(inputFiles)) {
      if (inputFiles.endsWith(".js") || inputFiles.endsWith(".jsx")) {
        return true
      }
    }
    return false
  }
  return inputFiles
    .map(fn => {
      return fn.endsWith(".js") || fn.endsWith(".jsx")
    })
    .every(r => r === true)
}
