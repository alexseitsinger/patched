import path from "path"

import fastGlob from "fast-glob"
import isArray from "lodash/isArray"
import isString from "lodash/isString"
import pkgDir from "pkg-dir"

import {
  JEST_SOURCES,
  REACT_SOURCES,
  SEARCH_PROJECT_OPTIONS,
  TYPESCRIPT_EXTENSIONS,
  TYPESCRIPT_PATTERNS,
  TYPESCRIPT_SOURCES,
} from "./constants"
import { hasProjectDependency, hasProjectDependencySync } from "./dependencies"

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

export function searchProjectSync(globPatterns) {
  const cwd = pkgDir.sync()
  return fastGlob.sync(globPatterns, {
    cwd,
    ...SEARCH_PROJECT_OPTIONS,
  })
}

export async function searchProject(globPatterns) {
  const cwd = await pkgDir()
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

export function isTypeScriptFile(file) {
  const target = file
  if (isArray(target)) {
    return target.map(fn => isTypeScriptFile(fn)).includes(true)
  }
  if (isString(file)) {
    const bits = file.split(".")
    const extension = bits.pop()
    return TYPESCRIPT_EXTENSIONS.includes(extension)
  }
  return false
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

export const isReactSync = inputs => {
  const hasDependency = hasProjectDependencySync("react")
  const hasSource = isReactSource(inputs)
  return hasDependency || hasSource
}

export const isReact = async inputs => {
  const hasDependency = await hasProjectDependency("react")
  const hasSource = isReactSource(inputs)
  return hasDependency || hasSource
}

export const isReduxSync = inputs => {
  const hasDep = hasProjectDependencySync("redux")
  return hasDep
}

export const isRedux = async inputs => {
  const hasDep = await hasProjectDependency("redux")
  return hasDep
}

export const isTypeScript = async inputs => {
  const hasDependency = await hasProjectDependency("typescript")
  const hasExtension = isTypeScriptFile(inputs)
  const hasSource = isTypeScriptSource(inputs)
  const hasFiles = await hasTypeScriptFiles(inputs)
  return hasDependency && (hasExtension || hasSource || hasFiles)
}

export const isTypeScriptSync = inputs => {
  const hasDependency = hasProjectDependencySync("typescript")
  const hasExtension = isTypeScriptFile(inputs)
  const hasSource = isTypeScriptSource(inputs)
  const hasFiles = hasTypeScriptFilesSync(inputs)
  return hasDependency && (hasExtension || hasSource || hasFiles)
}

export const isWebpack = async inputs => {
  const hasDependency = await hasProjectDependency("webpack")
  return hasDependency
}

export const isWebpackSync = inputs => {
  const hasDep = hasProjectDependencySync("webpack")
  return hasDep
}

export const isJest = async inputs => {
  const hasDependency = await hasProjectDependency("jest")
  const hasSource = isJestSource(inputs)
  return hasDependency || hasSource
}

export const isJestSync = inputs => {
  const hasDep = hasProjectDependencySync("jest")
  const hasSource = isJestSource(inputs)
  return hasDep || hasSource
}
