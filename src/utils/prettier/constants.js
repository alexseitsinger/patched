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
