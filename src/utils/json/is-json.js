import isString from "lodash/isString"

export const isJSON = (file) => {
  if (isString(file)) {
    return file.endsWith(".json")
  }
  return false
}
