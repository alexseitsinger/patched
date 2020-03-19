import path from "path"
import pkgDir from "pkg-dir"

export const getProjectRoot = () => {
  const projectRoot = pkgDir.sync() || path.resolve(process.cwd())
  return projectRoot
}