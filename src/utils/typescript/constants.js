import path from "path"
import { getProjectRoot } from "../get-project-root"

export const TSCONFIG_NAME = "tsconfig.json"

export const TSCONFIG_PATH = path.join(getProjectRoot(), TSCONFIG_NAME)

export const TSCONFIG_DEFAULT = {
  compilerOptions: {
    noEmitOnError: true,
    noErrorTruncation: true,
    noImplicitAny: true,
    noImplicitReturns: true,
    noImplicitThis: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noFallthroughCasesInSwitch: true,
    removeComments: true,
    resolveJsonModule: true,
    strict: true,
    strictNullChecks: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    lib: [ "dom", "es2016" ],
    target: "es2016",
    module: "esnext",
    moduleResolution: "node",
    /**
     * This should be changed to true for the 'development' tsconfig.
     */
    sourceMap: false,
    /**
     * This should be either "react" or "preserve", depending on where this config is
     * being used. If it's used with jest, we want it to be "react". If it's for vscode
     * or otherwise, it should be "preserve" since webpack does the final
     * transformation from jsxFactory to vanilla js.
     */
    jsx: "preserve",
    /**
     * This should be updated to the path to the project root.
     */
    baseUrl: ".",
    /**
     * These should be updated by prepending project root to each path that exists and
     * removing the remaining ones that don't
     */
    paths: {
      src: ["src"],
      "src/*": ["src/*"],
      "tests/*": ["tests/*"],
    },
  },
  include: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "tests/**/*.ts",
    "tests/**/*.tsx",
  ],
  exclude: [
    "node_modules",
    ".yalc",
    "scripts",
    "build",
    "dist",
  ]
}

export const TYPESCRIPT_EXTENSIONS = [ "ts", "tsx" ]

export const TYPESCRIPT_SOURCES = [ "type ", "interface " ]

export const EXCLUDED_DIRECTORIES = [
  "types",
  "node_modules",
  ".yalc",
  "bin",
  "scripts",
  "dist",
]
