import { getGlobalDirectory, getGlobalDirectorySync } from "./get-global-directory"
import path from "path"

export const getGlobalNodeModulesDirectorySync = () => {
  const globalDirectory = getGlobalDirectorySync()
  const nodeModules = path.resolve(`${globalDirectory}/node_modules`)
  return nodeModules
}

export const getGlobalNodeModulesDirectory = async () => {
  const globalDirectory = await getGlobalDirectory()
  const nodeModules = path.resolve(`${globalDirectory}/node_modules`)
  return nodeModules
}
