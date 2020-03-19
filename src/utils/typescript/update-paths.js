import path from "path"

import { getProjectRoot } from "../get-project-root"

export const updatePaths = tsConfig => {
  try {
    const { paths } = tsConfig.compilerOptions
    const pathKeys = Object.keys(paths)
    const newPaths = {}
    pathKeys.forEach(pathKey => {
      newPaths[ pathKey ] = paths[ pathKey ].map(p => {
        const rel = `./${path.relative(getProjectRoot(), p)}`
        return rel
      })
    })

    return newPaths
  }
  catch (error) {
    return {}
  }
}
