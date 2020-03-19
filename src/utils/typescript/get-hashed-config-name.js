import murmur from "imurmurhash"
import stringify from "json-stable-stringify-without-jsonify"
import isObject from "lodash/isObject"
import isString from "lodash/isString"
import readPkgUp from "read-pkg-up"
import { NODE_VERSION_DEFAULT } from "../constants"

export const getHashedConfigName = ({
  files = [],
  nodeVersion = NODE_VERSION_DEFAULT
}) => {
  const pkg = readPkgUp.sync()
  let version = "0.0.0"
  if (isObject(pkg) && isObject(pkg.packageJson) && isString(pkg.packageJson.version)) {
    version = pkg.packageJson.version
  }
  const prefix = `${version}_${nodeVersion}`
  const suffix = stringify({ files: files.sort() })
  const full = `${prefix}_${suffix}`
  const hash = murmur(full)
    .result()
    .toString(36)
  const name = `tsconfig.${hash}.json`
  return name
}
