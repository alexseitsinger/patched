import { determineFeatures, determineFeaturesSync } from "./determine-features"

export const determinePluginGroupsSync = (inputFiles) => {
  const features = determineFeaturesSync(inputFiles)
  /**
   * Certain groups are mutually exclusive.
   */
  if (features.json) {
    return ["json"]
  }
  if (features.packageJSON) {
    return ["packageJSON"]
  }
  /**
   * Others can be combined together.
   */
  let groups = []
  if (features.redux) {
    groups = [ ...groups, "redux" ]
  }
  if (features.react) {
    groups = [ ...groups, "react" ]
  }
  if (features.typescript) {
    groups = [ ...groups, "typescript" ]
  }
  return groups
}

export const determinePluginGroups = async (inputFiles) => {
  const features = await determineFeatures(inputFiles)
  if (features.json) {
    return ["json"]
  }
  if (features.packageJSON) {
    return ["packageJSON"]
  }
  let groups = []
  if (features.redux) {
    groups = [ ...groups, "redux" ]
  }
  if (features.react) {
    groups = [ ...groups, "react" ]
  }
  if (features.typescript) {
    groups = [ ...groups, "typescript" ]
  }
  return groups
}

