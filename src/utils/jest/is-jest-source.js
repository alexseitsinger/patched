import isString from "lodash/isString"

import { JEST_SOURCES } from "./constants"

export const isJestSource = (code) => {
  if (!isString(code)) {
    return false
  }
  return JEST_SOURCES.map(k => code.includes(k)).includes(true)
}
