import fs from "fs"
import path from "path"

import readPkgUp from "read-pkg-up"

import { DEPENDENCY_KEYS, PROJECT_ROOT } from "./constants"

export function readProjectPackageJson() {
  const filePath = path.join(PROJECT_ROOT, "package.json")
  const raw = fs.readFileSync(filePath, { encoding: "utf8" })
  const parsed = JSON.parse(raw)
  return parsed
}

function hasDependency(packageJson, name) {
  return DEPENDENCY_KEYS.map(key => {
    if (packageJson[key]) {
      const value = packageJson[key]
      const names = Object.keys(value)
      return names.includes(name)
    }
    return false
  }).includes(true)
}

export function hasProjectDependencySync(name) {
  const { packageJson } = readPkgUp.sync()
  return hasDependency(packageJson, name)
}

export async function hasProjectDependency(dependencyName) {
  const { packageJson } = await readPkgUp()
  return hasDependency(packageJson, dependencyName)
}
