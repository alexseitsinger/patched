import { getProjectFiles } from "../get-project-files"

export const hasTypeScriptFiles = () => {
  const results = getProjectFiles("*.{ts,tsx}")
  return results > 0
}