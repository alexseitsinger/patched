import { readJsonSync } from "fs-extra"
import path from "path"
import { getProjectRoot } from "../get-project-root"

export const getProjectTypeScriptConfig = () => {
  const filePath = path.join(getProjectRoot(), "tsconfig.json")
  const data = readJsonSync(filePath, { encoding: "utf8" })
  return { tsConfig: data, tsConfigPath: filePath }
}

