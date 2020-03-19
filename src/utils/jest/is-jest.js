import { hasProjectDependency, hasProjectDependencySync } from "../dependencies/has-project-dependency"

import { isJestSource } from "./is-jest-source"

export const isJest = async inputs => {
  const hasDependency = await hasProjectDependency("jest")
  const hasSource = isJestSource(inputs)
  return (hasDependency || hasSource)
}

export const isJestSync = inputs => {
  const hasDependency = hasProjectDependencySync("jest")
  const hasSource = isJestSource(inputs)
  return (hasDependency || hasSource)
}
