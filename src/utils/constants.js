import path from "path"

import pkgDir from "pkg-dir"

export const NODE_VERSION_DEFAULT = process && process.version

export const PROJECT_ROOT = pkgDir.sync() || path.resolve(process.cwd())

export const RULE_DISABLED = "RULE_DISABLED"

export const RULE_NOT_CONFIGURED = "RULE_NOT_CONFIGURED"

export const PATCHEDRC_NAME = ".patchedrc.json"

export const PATCHEDRC_DEFAULT = {
  braceStyle: "stroustrup",
  spaces: 2,
  nodeVersion: NODE_VERSION_DEFAULT,
  maxLength: 88,
  quotes: "double",
  semi: "never",
}
