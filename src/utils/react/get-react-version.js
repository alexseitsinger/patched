import isUndefined from "lodash/isUndefined"
import readPkgUp from "read-pkg-up"

export const getReactVersionSync = () => {
  let version = "detect"
  const out = readPkgUp.sync()
  if (isUndefined(out)) {
    return version
  }
  dependencyKeys.forEach(key => {
    if (version !== "detect") {
      return
    }
    if (isUndefined(out.packageJson)) {
      return
    }
    const deps = out.packageJson[key]
    Object.keys(deps).forEach(depName => {
      if (depName === "react") {
        exact = deps[depName]
      }
    })
  })

  return version
}

export const getReactVersion = async () => {
  let version = "detect"
  const out = await readPkgUp()
  if (isUndefined(out)) {
    return version
  }
  dependencyKeys.forEach(key => {
    if (version !== "detect") {
      return
    }
    if (isUndefined(out.packageJson)) {
      return
    }
    const deps = out.packageJson[key]
    Object.keys(deps).forEach(depName => {
      if (depName === "react") {
        exact = deps[depName]
      }
    })
  })

  return version
}
