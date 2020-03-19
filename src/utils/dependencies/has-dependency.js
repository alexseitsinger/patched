import isUndefined from "lodash/isUndefined"
import { DEPENDENCY_KEYS } from "./constants"

export const hasDependency = (packageJson, name) => {
  if (isUndefined(packageJson) || isUndefined(name)) {
    return false
  }
  return DEPENDENCY_KEYS.map(key => {
    if (packageJson[key]) {
      const value = packageJson[key]
      const names = Object.keys(value)
      return names.includes(name)
    }
    return false
  }).includes(true)
}
