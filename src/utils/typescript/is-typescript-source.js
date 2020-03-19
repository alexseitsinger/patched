import isString from "lodash/isString"

import { TYPESCRIPT_SOURCES } from "./constants"

export const isTypeScriptSource = (code) => {
  if (!isString(code)) {
    return false
  }
  return TYPESCRIPT_SOURCES.map(k => code.includes(k)).includes(true)
}

