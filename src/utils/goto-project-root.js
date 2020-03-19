import { getProjectRoot } from "./get-project-root"

export const gotoProjectRoot = () => {
  const projectRoot = getProjectRoot()
  console.log(`Navigating to project root: ${projectRoot}`)
  process.chdir(projectRoot)
}
