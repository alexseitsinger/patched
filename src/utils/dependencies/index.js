import fs from "fs"
import path from "path"

import pkgDir from "pkg-dir"
import readPkgUp from "read-pkg-up"

import { DEPENDENCY_KEYS } from "./constants"

export * from "./constants"

export function readProjectPackageJson() {
  const filePath = path.join(pkgDir.sync(), "package.json")
  let raw = "{}"
  let parsed = {}
  if (fs.existsSync(filePath)) {
    raw = fs.readFileSync(filePath, { encoding: "utf8" })
    try {
      parsed = JSON.parse(raw)
    }
    catch (error) {
      console.error(`Patched failed to parse project's package.json (${filePath})`)
    }
  }
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
