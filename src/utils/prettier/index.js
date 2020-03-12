import isUndefined from "lodash/isUndefined"
import isString from "lodash/isString"
import isObject from "lodash/isObject"

import { isAlways } from "./rules"
import { DEFAULT_PRETTIER_CONFIG, RULE_NOT_CONFIGURED } from "../constants"
import { getRuleValue, hasRuleValue } from "./rules"

function makePrettierOption(prettierRuleName, prettierRuleValue) {
  if (hasRuleValue(prettierRuleValue)) {
    return prettierRuleValue
  }

  const defaultValue = DEFAULT_PRETTIER_CONFIG[prettierRuleName]
  if (isUndefined(defaultValue)) {
    return undefined
  }

  return defaultValue
}

//
function getPrintWidth(eslintConfig) {
  const prettierValue = getRuleValue(eslintConfig, ["max-len"])
  return makePrettierOption("printWidth", prettierValue)
}

//
function getTabWidth(eslintConfig) {
  const prettierValue = getRuleValue(eslintConfig, ["indent", "@typescript-eslint/indent"])
  if (hasRuleValue(prettierValue) && prettierValue === "tab") {
    return getPrintWidth(eslintConfig)
  }
  return makePrettierOption("tabWidth", prettierValue)
}

//
function getSemi(eslintConfig) {
  let prettierValue

  const ruleValue = getRuleValue(eslintConfig, ["semi", "babel/semi", "@typescript-eslint/semi"])

  switch (ruleValue) {
    case "never": {
      prettierValue = false
      break
    }
    case "always": {
      prettierValue = true
      break
    }
    default: {
      prettierValue = ruleValue
    }
  }

  return makePrettierOption("semi", prettierValue)
}

//
function getUseTabs(eslintConfig) {
  let prettierValue = RULE_NOT_CONFIGURED

  const ruleValue = getRuleValue(eslintConfig, ["indent", "@typescript-eslint/indent"])
  if (ruleValue === "tab") {
    prettierValue = true
  }

  return makePrettierOption("useTabs", prettierValue)
}

//
function getSingleQuote(eslintConfig) {
  let prettierValue

  const ruleValue = getRuleValue(eslintConfig, ["quotes", "@typescript-eslint/quotes"])
  switch (ruleValue) {
    case "single": {
      prettierValue = true
      break
    }
    case "double": {
      prettierValue = false
      break
    }
    case "backtick": {
      prettierValue = false
      break
    }
    default: {
      prettierValue = ruleValue
    }
  }

  return makePrettierOption("singleQuote", prettierValue)
}

function getValueFromTrailingCommaConfig({
  arrays = "",
  objects = "",
  functions = "",
}) {
  const fns = isAlways(functions)
  const es5 = [arrays, objects].some(isAlways)
  if (fns) {
    return "all"
  }
  if (es5) {
    return "es5"
  }
  return "none"
}

//
function getTrailingComma(eslintConfig) {
  let prettierValue

  const ruleValue = getRuleValue(eslintConfig, ["comma-dangle"])

  switch (ruleValue) {
    case "never": {
      prettierValue = "none"
      break
    }
    case (isString(ruleValue) && isAlways(ruleValue)): {
      prettierValue = "es5"
      break
    }
    case (isObject(ruleValue)): {
      prettierValue = getValueFromTrailingCommaConfig(ruleValue)
      break
    }
    default: {
      prettierValue = RULE_NOT_CONFIGURED
    }
  }

  return makePrettierOption("trailingComma", prettierValue)
}

//
function getJsxBracketSameLine(eslintConfig) {
  let prettierValue

  const ruleValue = getRuleValue(eslintConfig, ["react/jsx-closing-bracket-location"])

  switch (ruleValue) {
    case "after-props": {
      prettierValue = true;
      break
    }
    case "tag-aligned":
    case "line-aligned":
    case "props-aligned": {
      prettierValue = false
      break
    }
    default: {
      prettierValue = ruleValue
    }
  }

  return makePrettierOption("jsxBracketSameLine", prettierValue)
}

//
function getBracketSpacing(eslintConfig) {
  let prettierValue

  const ruleValue = getRuleValue(eslintConfig, ["object-curly-spacing"])
  switch (prettierValue) {
    case "never": {
      prettierValue = false
      break
    }
    case "always": {
      prettierValue = true
      break
    }
    default: {
      prettierValue = ruleValue
    }
  }

  return makePrettierOption("bracketSpacing", prettierValue)
}

function getParser(eslintConfig) {
  let prettierValue;
  const currentValue = eslintConfig.parser ? eslintConfig.parser : undefined
  // need to add the remaining parsers here...
  switch (currentValue) {
    case "@typescript-eslint/parser": {
      prettierValue = "typescript"
      break
    }
    default: {
      prettierValue = "babel"
    }
  }
  return makePrettierOption("parser", prettierValue)
}

//
function getArrowParens(eslintConfig) {
  let prettierValue

  const ruleValue = getRuleValue(eslintConfig, ["implicit-arrow-parens"])
  switch (ruleValue) {
    case "as-needed": {
      prettierValue = "avoid"
      break
    }
    default: {
      prettierValue = ruleValue
    }
  }

  return makePrettierOption("arrowParens", prettierValue)
}

export function getPrettierConfig(eslintConfig) {
  return {
    printWidth: getPrintWidth(eslintConfig),
    tabWidth: getTabWidth(eslintConfig),
    semi: getSemi(eslintConfig),
    useTabs: getUseTabs(eslintConfig),
    singleQuote: getSingleQuote(eslintConfig),
    trailingComma: getTrailingComma(eslintConfig),
    bracketSpacing: getBracketSpacing(eslintConfig),
    jsxBracketSameLine: getJsxBracketSameLine(eslintConfig),
    arrowParens: getArrowParens(eslintConfig),
    parser: getParser(eslintConfig),
    proseWrap: "preserve",
  }
}
