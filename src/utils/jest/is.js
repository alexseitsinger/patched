import isString from "lodash/isString"

import { hasProjectDependency, hasProjectDependencySync } from "../dependencies"

import { JEST_SOURCES } from "./constants"

export function isJestSource(code) {
  if (!isString(code)) {
    return false
  }
  return JEST_SOURCES.map(k => code.includes(k)).includes(true)
}


export const isJest = async inputs => {
  const hasDependency = await hasProjectDependency("jest")
  const hasSource = isJestSource(inputs)
  return hasDependency || hasSource
}

export const isJestSync = inputs => {
  const hasDep = hasProjectDependencySync("jest")
  const hasSource = isJestSource(inputs)
  return hasDep || hasSource
}
