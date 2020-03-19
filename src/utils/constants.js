export const NODE_VERSION_DEFAULT = process && process.version

export const RULE_DISABLED = "RULE_DISABLED"

export const RULE_NOT_CONFIGURED = "RULE_NOT_CONFIGURED"

export const PATCHEDRC_DEFAULT = {
  braceStyle: "stroustrup",
  spaces: 2,
  nodeVersion: NODE_VERSION_DEFAULT,
  maxLength: 88,
  quotes: "double",
  semi: "never",
  emitDeclarations: false,
  emitDirectory: "types",
  webpackFileName: "webpack.config.js",
  jestFileName: "jest.config.js",
}

export const IGNORED_DIRECTORIES = [
  "build",
  "scripts",
  "bin",
  "dist",
  ".vscode",
  "types",
]

export const TARGET_EXTENSIONS = [
  "ts",
  "tsx",
  "js",
  "jsx",
  "json",
]
