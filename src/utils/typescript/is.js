import isArray from "lodash/isArray"
import isString from "lodash/isString"

import { getProjectFiles, getProjectFilesSync } from ".."

import {
  TYPESCRIPT_EXTENSIONS,
  TYPESCRIPT_SOURCES,
} from "./constants"

export function hasTypeScriptFilesSync() {
  return getProjectFilesSync([ "**/*.ts", "**/*.tsx" ]).length > 0
}

export async function hasTypeScriptFiles() {
  return (await getProjectFiles([ "**/*.ts", "**/*.tsx" ]).length) > 0
}

export function isTypeScriptFile(file) {
  const target = file
  if (isString(target)) {
    const bits = target.split(".")
    const extension = bits.pop()
    return TYPESCRIPT_EXTENSIONS.includes(extension)
  }
  if (isArray(target)) {
    return target.map(fn => isTypeScriptFile(fn)).includes(true)
  }
  return false
}
export function isTypeScriptSource(code) {
  if (!isString(code)) {
    return false
  }
  return TYPESCRIPT_SOURCES.map(k => code.includes(k)).includes(true)
}

export const isTypeScript = async inputs => {
  const hasExtension = isTypeScriptFile(inputs)
  const hasSource = isTypeScriptSource(inputs)
  const hasFiles = await hasTypeScriptFiles(inputs)
  return (hasExtension || hasSource || hasFiles)
}

export const isTypeScriptSync = inputs => {
  const hasExtension = isTypeScriptFile(inputs)
  const hasSource = isTypeScriptSource(inputs)
  const hasFiles = hasTypeScriptFilesSync(inputs)
  return (hasExtension || hasSource || hasFiles)
}
