import { hasProjectDependency, hasProjectDependencySync } from "../dependencies"

export const isReduxSync = inputs => {
  const hasDep = hasProjectDependencySync("redux")
  return hasDep
}

export const isRedux = async inputs => {
  const hasDep = await hasProjectDependency("redux")
  return hasDep
}

