import isUndefined from "lodash/isUndefined"
import readPkgUp from "read-pkg-up"
import { hasDependency } from "./has-dependency"

export const hasProjectDependencySync = (name) => {
  const out = readPkgUp.sync()
  if (isUndefined(out) || isUndefined(out.packageJson)) {
    return false
  }
   return hasDependency(out.packageJson, name)
}

export const hasProjectDependency = async (dependencyName) => {
  const out = await readPkgUp()
  if (isUndefined(out) || isUndefined(out.packageJson)) {
    return false
  }
  return hasDependency(out.packageJson, dependencyName)
}
