import { hasProjectDependency, hasProjectDependencySync } from "../dependencies/has-project-dependency"

import { isReactSource } from "./is-react-source"

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
