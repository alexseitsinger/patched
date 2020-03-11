import fs from "fs"
import path from "path"

import readPkgUp from "read-pkg-up"

const PROJECT_ROOT = path.resolve(process.cwd())
const DEPENDENCY_KEYS = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies",
]

export function readPackageJson() {
  const filePath = path.join(PROJECT_ROOT, "package.json")
  const raw = fs.readFileSync(filePath, { encoding: "utf8" })
  const parsed = JSON.parse(raw)
  return parsed
}

export function hasDependency(packageJson, name) {
  return DEPENDENCY_KEYS.map(key => {
    if (packageJson[key]) {
      const value = packageJson[key]
      const names = Object.keys(value)
      return names.includes(name)
    }
    return false
  }).includes(true)
}

export function usesDependencySync(name) {
  const { packageJson } = readPkgUp.sync()
  return hasDependency(packageJson, name)
}

export async function usesDependency(dependencyName) {
  const { packageJson } = await readPkgUp()
  return hasDependency(packageJson, dependencyName)
}
