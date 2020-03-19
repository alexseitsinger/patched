import { getGlobalParserPathSync } from "./get-global-parser-path"
import { getIgnorePatterns } from "./get-ignore-patterns"
import { getProjectRoot } from "../get-project-root"
import path from "path"
import { CACHE_DIRECTORY, CACHE_NAME } from "../cache/constants"

export const createOptions = (eslintConfig, options) => ({
  ...options,
  useEslintrc: false,
  cache: true,
  cacheLocation: path.join(CACHE_DIRECTORY, `${CACHE_NAME}.json`),
  baseConfig: {
    settings: eslintConfig.settings,
  },
  parser: eslintConfig.parser
    ? getGlobalParserPathSync(eslintConfig.parser)
    : "espree",
  parserOptions: eslintConfig.parserOptions,
  envs: Object.keys(eslintConfig.env),
  rules: eslintConfig.rules,
  plugins: eslintConfig.plugins,
  ignorePatterns: getIgnorePatterns(),
  cwd: getProjectRoot(),
})
