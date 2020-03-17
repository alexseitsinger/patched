import isString from "lodash/isString"

import { hasProjectDependency, hasProjectDependencySync } from "../dependencies"

import { REACT_SOURCES } from "./constants"

export function isReactSource(code) {
  if (!isString(code)) {
    return false
  }
  return REACT_SOURCES.map(k => code.includes(k)).includes(true)
}


export const isReactSync = inputs => {
  const hasDependency = hasProjectDependencySync("react")
  const hasSource = isReactSource(inputs)
  return hasDependency || hasSource
}

export const isReact = async inputs => {
  const hasDependency = await hasProjectDependency("react")
  const hasSource = isReactSource(inputs)
  return hasDependency || hasSource
}
