import isString from "lodash/isString"
import isArray from "lodash/isArray"

import { TYPESCRIPT_EXTENSIONS } from "./constants"

export const isTypeScriptFile = (file) => {
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
