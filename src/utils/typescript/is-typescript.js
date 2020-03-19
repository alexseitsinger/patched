import {
  isTypeScriptFile,
} from "./is-typescript-file"
import {
  isTypeScriptSource,
} from "./is-typescript-source"
import {
  hasTypeScriptFiles,
} from "./has-typescript-files"


export const isTypeScript = async inputs => {
  const hasExtension = isTypeScriptFile(inputs)
  const hasSource = isTypeScriptSource(inputs)
  const hasFiles = hasTypeScriptFiles(inputs)
  return (hasExtension || hasSource || hasFiles)
}