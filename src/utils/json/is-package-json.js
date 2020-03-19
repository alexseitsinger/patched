import isString from "lodash/isString"
import path from "path"

export const isPackageJSON = (file) => {
  if (isString(file)) {
    return path.basename(file) === "package.json"
  }
  return false
}
