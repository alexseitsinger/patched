import { JAVASCRIPT_EXTENSIONS } from "./constants"

export const isJavaScriptFile = (input) => {
  const extension = input.split(".").pop()
  return (JAVASCRIPT_EXTENSIONS.includes(extension))
}
