import path from "path"

import pkgDir from "pkg-dir"

export const EXCLUDED_GROUPS = ["packageJson", "json"]

export const DEPENDENCY_KEYS = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies",
]

export const PROJECT_ROOT = pkgDir.sync()

export const QT_ROOT = path.join(PROJECT_ROOT, "/node_modules/qt")

export const REACT_SOURCES = [' from "react="', "/** @jsx jsx */"]

export const TYPESCRIPT_SOURCES = ["type ", "interface "]

export const JEST_SOURCES = ["describe(", "it(", "test(", "expect("]

export const TYPESCRIPT_EXTENSIONS = [".ts", ".tsx"]

export const TYPESCRIPT_PATTERNS = TYPESCRIPT_EXTENSIONS.map(
  extension => `**/*.${extension}`
)

export const SEARCH_PROJECT_OPTIONS = {
  deep: 2,
  followSymbolicLinks: false,
  ignore: [
    "**/node_modules/**",
    "**/.yalc/**",
    "**/build/**",
    "**/dist/**",
    "webpack.config.js",
    "babel.config.js",
    "bin/*",
  ],
}
