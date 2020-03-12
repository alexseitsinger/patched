import { getESLintConfig, getESLintConfigSync } from "./eslint"
import { PROJECT_ROOT } from "./constants"

function createCLIOptions(eslintConfig, options) {
  const newOptions = {
    ...options,
    useEslintrc: false,
    baseConfig: {
      settings: eslintConfig.settings,
    },
    parser: eslintConfig.parser || "espree",
    parserOptions: eslintConfig.parserOptions,
    envs: Object.keys(eslintConfig.env),
    rules: eslintConfig.rules,
    plugins: eslintConfig.plugins,
    //cwd: path.resolve(options.cwd ? options.cwd : process.cwd()),
  }
  if (newOptions.parser === "@typescript-eslint/parser") {
    newOptions.parserOptions.project = `${PROJECT_ROOT}/tsconfig.json`
  }
  return newOptions
}

export async function getCLIOptions(files, providedOptions) {
  const eslintConfig = await getESLintConfig(files)
  return createCLIOptions(eslintConfig, providedOptions)
}

export function getCLIOptionsSync(files, providedOptions) {
  const eslintConfig = getESLintConfigSync(files)
  return createCLIOptions(eslintConfig, providedOptions)
}
