import path from "path"

import { EXCLUDED_DIRECTORIES } from "./constants"

import { isTypeScriptFile } from "./is-typescript-file"
import { getProjectRoot } from "../get-project-root"

export const getFilePaths = files => {
  return files
    .filter(isTypeScriptFile)
    .map(filePath => {
      const rel = path.relative(getProjectRoot(), filePath)
      return `./${rel}`
    })
}
