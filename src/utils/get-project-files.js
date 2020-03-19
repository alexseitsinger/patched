import toAbsoluteGlob from "to-absolute-glob"
import globby from "globby"
import isArray from "lodash/isArray"
import isString from "lodash/isString"

import { gotoProjectRoot } from "./goto-project-root"
import { TARGET_EXTENSIONS, IGNORED_DIRECTORIES } from "./constants"
import { getProjectRoot } from "./get-project-root"
import { isUndefined } from "lodash/isUndefined"

export const getProjectFiles = (fileNames = []) => {
  let includeString
  if (isArray(fileNames)) {
    includeString = fileNames.join(",")
  }
  if (isString(fileNames)) {
    includeString = fileNames
  }
  if (includeString.length === 0) {
    includeString = `*.{${TARGET_EXTENSIONS.join(",")}}`
  }
  const includeGlob = toAbsoluteGlob(
    `**/${includeString}`,
    { cwd: getProjectRoot() }
  )
  const excludeGlob = toAbsoluteGlob(
    `!**/{${IGNORED_DIRECTORIES.join(",")}}`,
    { cwd: getProjectRoot() }
  )
  return globby.sync([ includeGlob, excludeGlob ], {
    gitignore: true,
    cwd: getProjectRoot(),
  })
}