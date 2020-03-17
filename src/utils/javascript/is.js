import isArray from "lodash/isArray"
import isString from "lodash/isString"

import { JAVASCRIPT_EXTENSIONS } from "./constants"

export function isJavaScriptFiles(inputFiles = []) {
  if (isString(inputFiles)) {
    const extension = inputFiles.split(".").pop()
    return (JAVASCRIPT_EXTENSIONS.includes(extension))
  }
  if (isArray(inputFiles)) {
    return inputFiles
      .map(fileName => isJavaScriptFiles(fileName))
      .every(r => r === true)
  }
  return false
}
