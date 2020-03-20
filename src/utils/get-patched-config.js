import path from "path"
import { PATCHEDRC_DEFAULT } from "./constants"
import isUndefined from "lodash/isUndefined"
import { getProjectRoot } from "./get-project-root"

const CONFIG_NAMES = [
  ".patchedrc.json",
  ".patchedrc",
  ".patchedrc.js",
]

export const getPatchedConfig = () => {
  let config

  CONFIG_NAMES.forEach(name => {
    if (config) {
      return
    }

    try {
      const filePath = path.join(getProjectRoot(), name)
      config = require(filePath)
    }
    catch (error) {}
  })

  if (isUndefined(config)) {
    //console.error("Failed to load any patched config")
    return PATCHEDRC_DEFAULT
  }
  return config
}
