import { getESLintConfig, getESLintConfigSync } from "../eslint/get-eslint-config"
import { createCLIOptions, createCLIOptionsSync } from "./create-cli-options"
import { gotoProjectRoot } from "../goto-project-root"

export const getCLIOptions = async (files, providedOptions) => {
  gotoProjectRoot()
  const eslintConfig = await getESLintConfig(files)
  const cliOptions = await createCLIOptions(eslintConfig, providedOptions)
  return cliOptions
}

export const getCLIOptionsSync = (files, providedOptions) => {
  gotoProjectRoot()
  const eslintConfig = getESLintConfigSync(files)
  const cliOptions = createCLIOptionsSync(eslintConfig, providedOptions)
  return cliOptions
}
