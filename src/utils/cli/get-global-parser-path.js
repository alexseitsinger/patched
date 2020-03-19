import { getGlobalNodeModulesDirectorySync, getGlobalNodeModulesDirectory } from "./get-global-node-modules-directory"
import pathExists from "path-exists"

export const getGlobalParserPath = async parserName => {
  const globalNodeModulesDirectory = await getGlobalNodeModulesDirectory()
  const parserDirectory = `${globalNodeModulesDirectory}/${parserName}`
  const exists = await pathExists(parserDirectory)
  if (exists) {
    return parserDirectory
  }
  console.error(`Failed to find global parser directory. (${parserDirectory})`)
  return parserName
}

export const getGlobalParserPathSync = parserName => {
  const globalNodeModulesDirectory = getGlobalNodeModulesDirectorySync()
  const parserDirectory = `${globalNodeModulesDirectory}/${parserName}`
  const exists = pathExists.sync(parserDirectory)
  if (exists) {
    return parserDirectory
  }
  console.error(`Failed to find global parser directory. (${parserDirectory})`)
  return parserName
}
