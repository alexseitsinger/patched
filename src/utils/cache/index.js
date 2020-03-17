import os from "os"
import path from "path"

import findCacheDir from "find-cache-dir"

import { CACHE_DIRECTORY_NAME } from "./constants"

export * from "./constants"

export const cacheDirectory = findCacheDir({ name: "patched" }) || (
  path.join((os.home() || os.tmpdir()), `${CACHE_DIRECTORY_NAME}/`)
)

