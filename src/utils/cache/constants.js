import os from "os"
import path from "path"
import findCacheDir from "find-cache-dir"

export const CACHE_NAME = ".patched-cache"
export const CACHE_DIRECTORY = findCacheDir({ name: "patched" }) || (
  path.join((os.homedir() || os.tmpdir()), `${CACHE_NAME}/`)
)
