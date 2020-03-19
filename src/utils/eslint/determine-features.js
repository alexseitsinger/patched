import { isJest, isJestSync } from "../jest/is-jest"
import { isJSON } from "../json/is-json"
import { isPackageJSON } from "../json/is-package-json"
import { isReact, isReactSync } from "../react/is-react"
import { isRedux, isReduxSync } from "../redux/is-redux"
import { isTypeScript } from "../typescript/is-typescript"
import { isWebpack, isWebpackSync } from "../webpack/is-webpack"

export const determineFeaturesSync = (inputs) => {
  const ret = {
    packageJSON: false,
    json: false,
    react: false,
    redux: false,
    typescript: false,
    jest: false,
    webpack: false,
  }
  if (isJSON(inputs)) {
    if (isPackageJSON(inputs)) {
      return {
        ...ret,
        packageJSON: true,
      }
    }
    return {
      ...ret,
      json: true,
    }
  }
  return {
    packageJSON: false,
    json: false,
    react: isReactSync(inputs),
    redux: isReduxSync(inputs),
    typescript: isTypeScript(inputs),
    jest: isJestSync(inputs),
    webpack: isWebpackSync(inputs),
  }
}

export const determineFeatures = async (inputs) => {
  console.log(inputs)
  const ret = {
    packageJSON: false,
    json: false,
    react: false,
    redux: false,
    typescript: false,
    jest: false,
    webpack: false,
  }
  if (isJSON(inputs)) {
    if (isPackageJSON(inputs)) {
      return {
        ...ret,
        packageJSON: true,
      }
    }
    return {
      ...ret,
      json: true,
    }
  }
  return {
    packageJSON: false,
    json: false,
    react: await isReact(inputs),
    redux: await isRedux(inputs),
    typescript: isTypeScript(inputs),
    jest: await isJest(inputs),
    webpack: await isWebpack(inputs),
  }
}
