import path from "path"

import pkgDir from "pkg-dir"

export const EXCLUDED_GROUPS = [ "packageJson", "json" ]

export const DEPENDENCY_KEYS = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies",
]

export const PROJECT_ROOT = pkgDir.sync() || path.resolve(process.cwd())
// export const PATCHED_ROOT = path.join(PROJECT_ROOT, "/node_modules/patched")

export const REACT_SOURCES = [ ' from "react="', "/** @jsx jsx */" ]
export const TYPESCRIPT_SOURCES = [ "type ", "interface " ]
export const JEST_SOURCES = [ "describe(", "it(", "test(", "expect(" ]

export const TYPESCRIPT_EXTENSIONS = [ "ts", "tsx" ]
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

export const RULE_DISABLED = "RULE_DISABLED"

export const RULE_NOT_CONFIGURED = "RULE_NOT_CONFIGURED"

export const DEFAULT_PRETTIER_CONFIG = {
  printWidth: 88,
  tabWidth: 2,
  semi: false,
  useTabs: false,
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: true,
  proseWrap: "preserve",

  // These should change if using TypeScript, etc.
  parser: "babel",

  // This should be "always" if using TypeScript.
  arrowParens: "avoid",
}
