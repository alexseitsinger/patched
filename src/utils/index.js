import path from "path"

import { ensureFile, ensureFileSync, readJson, readJsonSync } from "fs-extra"
import globby from "globby"

import {
  PATCHEDRC_DEFAULT,
  PATCHEDRC_NAME,
  PROJECT_ROOT,
} from "./constants"

export const getPatchedConfigSync = () => {
  const filePath = path.join(PROJECT_ROOT, PATCHEDRC_NAME)
  const exists = ensureFileSync(filePath)
  if (exists) {
    const data = readJsonSync(filePath)
    return data
  }
  return PATCHEDRC_DEFAULT
}

export const getPatchedConfig = async () => {
  const filePath = path.join(PROJECT_ROOT, PATCHEDRC_NAME)
  const exists = await ensureFile(filePath)
  if (exists) {
    const data = await readJson(filePath)
    return data
  }
  return PATCHEDRC_DEFAULT
}

export function getProjectFilesSync(fileGlobs = []) {
  const results = globby.sync(fileGlobs, {
    gitignore: true,
    cwd: PROJECT_ROOT,
  })
  return results
}

export async function getProjectFiles(fileGlobs = []) {
  const results = await globby(fileGlobs, {
    gitignore: true,
    cwd: PROJECT_ROOT,
  })
  return results
}

