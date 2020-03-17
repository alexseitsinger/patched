import { hasProjectDependency, hasProjectDependencySync } from "../dependencies"

export const isWebpack = async inputs => {
  const hasDependency = await hasProjectDependency("webpack")
  return hasDependency
}

export const isWebpackSync = inputs => {
  const hasDep = hasProjectDependencySync("webpack")
  return hasDep
}
