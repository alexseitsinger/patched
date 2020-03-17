import path from "path"

import isArray from "lodash/isArray"
import isString from "lodash/isString"

export function isJSONSource(code) {
  try {
    JSON.parse(code)
    return true
  }
  catch (error) {
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
export function isPackageJsonFile(fileName) {
  if (isArray(fileName)) {
    return fileName.map(fn => path.basename(fn) === "package.json").includes(true)
  }
  if (isString(fileName)) {
    return path.basename(fileName) === "package.json"
  }
  return false
}
