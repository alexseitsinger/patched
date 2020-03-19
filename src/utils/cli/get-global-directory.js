import execa from "execa"
import path from "path"

export const getGlobalDirectorySync = () => {
  const { stdout } = execa.sync("yarn", [ "global", "dir" ])
  return path.resolve(stdout)
}

export const getGlobalDirectory = async () => {
  const { stdout } = await execa("yarn", [ "global", "dir" ])
  return path.resolve(stdout)
}
