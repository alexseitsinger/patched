import { EXCLUDED_GROUPS } from "./constants"

export const shouldUseEslint = (pluginGroups) => {
  const isExcluded = pluginGroups.map(n => EXCLUDED_GROUPS.includes(n)).includes(true)
  if (isExcluded) {
    return false
  }
  return true
}
