import isString from "lodash/isString"

import { REACT_SOURCES } from "./constants"

export const isReactSource = (code) => {
  if (!isString(code)) {
    return false
  }
  return REACT_SOURCES.map(k => code.includes(k)).includes(true)
}
