import delve from "dlv"
import isArray from "lodash/isArray"
import isObject from "lodash/isObject"
import isUndefined from "lodash/isUndefined"

import { RULE_DISABLED, RULE_NOT_CONFIGURED } from "../constants"


export function hasRuleValue(ruleValue) {
  const isNotConfigured = (ruleValue === RULE_NOT_CONFIGURED)
  const isDisabled = (ruleValue === RULE_DISABLED)
  const isUndef = (isUndefined(ruleValue))
  if (isNotConfigured || isDisabled || isUndef) {
    return false
  }
  return true
}

function getRealRuleValue(config, ruleName, objectPath) {
  const { rules } = config
  const rule = rules[ruleName]

  if (isArray(rule)) {
    const [ lintLevel, value ] = rule

    if (lintLevel === "off" || lintLevel === 0) {
      return RULE_DISABLED
    }

    if (isObject(value)) {
      if (objectPath) {
        return delve(value, objectPath, RULE_NOT_CONFIGURED)
      }
      return undefined
    }

    return value
  }

  return RULE_NOT_CONFIGURED
}

export function getRuleValue(eslintConfig, ruleNames = []) {
  let ruleValue = RULE_NOT_CONFIGURED

  ruleNames.reverse().forEach(ruleName => {
    if (hasRuleValue(ruleValue)) {
      return
    }
    ruleValue = getRealRuleValue(eslintConfig, ruleName)
  })
  return ruleValue
}

export function isAlways(value) {
  return value.indexOf("always") === 0
}
