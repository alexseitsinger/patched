import isUndefined from "lodash/isUndefined"
import readPkgUp from "read-pkg-up"

export const readProjectPackageJson = () => {
  const out = readPkgUp.sync()
  if (isUndefined(out)) {
    return {}
  }
  if (isUndefined(out.packageJson)) {
    return {}
  }
  return out.packageJson
}
