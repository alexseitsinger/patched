const deepMerge = require("deepmerge")
const uniq = require("lodash/uniq")
const {
  groups: { core, json, other, react, redux, testing, typescript },
} = require("./groups")

const ruleOrder = [
  "eslint",
  ...core,
  ...react,
  ...redux,
  ...testing,
  ...typescript,
  ...other,
  ...json,
]

const pluginNameMap = {
  "@typescript-eslint": "@typescript-eslint/eslint-plugin",
}

const directoryNameMap = {
  "@typescript-eslint/eslint-plugin": "@typescript-eslint",
}

function sortArray(targets, order) {
  return targets.sort((a, b) => {
    if (order.indexOf(a) > order.indexOf(b)) {
      return -1
    }
    return 1
  })
}

function getPluginName(ruleFileName) {
  if (pluginNameMap !== undefined && ruleFileName in pluginNameMap) {
    return pluginNameMap[String(ruleFileName)]
  }
  return ruleFileName
}

function getDirectoryName(pluginName) {
  if (directoryNameMap !== undefined && pluginName in directoryNameMap) {
    return directoryNameMap[String(pluginName)]
  }
  return pluginName
}

function getPatches(pluginName, isTypeScript = false) {
  const target = getDirectoryName(pluginName)
  const module_ = require(`./rulesets/${target}/patches.js`)
  if (shouldUseLanguage(module_)) {
    const all = module_.all ? module_.all : {}
    if (isTypeScript) {
      return {
        ...all,
        ...module_.typescript,
      }
    }
    return {
      ...all,
      ...module_.javascript,
    }
  }
  return module_
}

function shouldUseLanguage(module_) {
  const keys = Object.keys(module_)
  const hasKeyCount = keys.length === 1 || keys.length === 2 || keys.length === 3
  const hasKeyNames =
    keys.includes("all") || keys.includes("javascript") || keys.includes("typescript")
  return hasKeyCount && hasKeyNames
}

function usesTypescript(pluginNames) {
  return pluginNames
    .map(pluginName => {
      const target = getPluginName(pluginName)
      return typescript.includes(target)
    })
    .includes(true)
}

function getRules(pluginName, isTypeScript = false) {
  const target = getDirectoryName(pluginName)
  const module_ = require(`./rulesets/${target}/rules.js`)
  if (shouldUseLanguage(module_)) {
    const all = module_.all ? module_.all : {}
    if (isTypeScript) {
      return {
        ...all,
        ...module_.typescript,
      }
    }
    return {
      ...all,
      ...module_.javascript,
    }
  }
  return module_
}

function getOptions(pluginName, isTypeScript = false) {
  const target = getDirectoryName(pluginName)
  const module_ = require(`./rulesets/${target}/options.js`)
  if (shouldUseLanguage(module_)) {
    const all = module_.all ? module_.all : {}
    if (isTypeScript) {
      return {
        ...all,
        ...module_.typescript,
      }
    }
    return {
      ...all,
      ...module_.javascript,
    }
  }
  return module_
}

function sortPlugins(array) {
  return sortArray(
    uniq(array)
      .filter(n => n !== "eslint")
      .map(n => getPluginName(n)),
    ruleOrder
  )
}

function getRuleSet(pluginName, isTypeScript = false) {
  return {
    rules: getRules(pluginName, isTypeScript),
    options: getOptions(pluginName, isTypeScript),
    patches: getPatches(pluginName, isTypeScript),
  }
}

function collectPatches(ruleSets, forPlugin) {
  return Object.keys(ruleSets)
    .filter(n => n !== forPlugin)
    .map(fromPlugin => ruleSets[fromPlugin].patches)
    .reduce((result, patches) => {
      if (patches !== undefined && forPlugin in patches) {
        return {
          ...result,
          ...patches[String(forPlugin)],
        }
      }
      return result
    }, {})
}

function createConfig({ pluginNames, useEslint = true }) {
  const plugins = sortPlugins(pluginNames)

  const isTypeScript = usesTypescript(plugins)

  let config = {
    env: {},
    settings: {},
    rules: {},
    plugins,
  }

  /**
   * We orgnaize each ruleset and then apply them in order so that overridden
   * rules are correctly used.
   */
  let ruleSets = {}

  /**
   * If the flag is true, apply the eslint rules and options, first.
   */
  if (useEslint) {
    /**
     * Load it into our ruleset for easy patching later.
     */
    ruleSets = {
      ...ruleSets,
      eslint: getRuleSet("eslint", isTypeScript),
    }

    /**
     * Load our default config with eslint's stuff.
     */
    config = {
      ...config,
      ...ruleSets.eslint.options,
      rules: {
        ...config.rules,
        ...ruleSets.eslint.rules,
      },
    }
  }

  /**
   * Load the rulesets for each plugin.
   */
  plugins.forEach(pluginName => {
    ruleSets = {
      ...ruleSets,
      [pluginName]: getRuleSet(pluginName, isTypeScript),
    }
  })

  /**
   * After rulesets are populated, load options and patches for eslint, first.
   */
  if (useEslint) {
    config.rules = {
      ...config.rules,
      ...collectPatches(ruleSets, "eslint"),
    }
  }

  /**
   * Then load each plugins rules and patches (in order).
   */
  sortArray(Object.keys(ruleSets), ruleOrder).forEach(pluginName => {
    const { options, rules } = ruleSets[String(pluginName)]
    config = deepMerge(config, options)
    config.rules = {
      ...config.rules,
      ...rules,
      ...collectPatches(ruleSets, pluginName),
    }
  })

  /**
   * Finally remove duplicate settings.
   */
  Object.keys(config.settings).forEach(key => {
    const value = config.settings[String(key)]
    if (Array.isArray(value)) {
      config.settings[String(key)] = uniq(value)
    }
  })

  return config
}

module.exports = {
  createConfig,
  getRules,
}
