const { createConfig } = require("./setup")
const { getPlugins } = require("./groups")

module.exports = {
  core: createConfig({
    pluginNames: [],
    useEslint: true,
  }),
  js: createConfig({
    pluginNames: getPlugins(["core"]),
    useEslint: true,
  }),
  jsReact: createConfig({
    pluginNames: getPlugins(["core", "react"]),
    useEslint: true,
  }),
  jsReactRedux: createConfig({
    pluginNames: getPlugins(["core", "react", "redux"]),
    useEslint: true,
  }),
  ts: createConfig({
    pluginNames: getPlugins(["core", "typescript"]),
    useEslint: true,
  }),
  tsReact: createConfig({
    pluginNames: getPlugins(["core", "typescript", "react"]),
    useEslint: true,
  }),
  tsReactRedux: createConfig({
    pluginNames: getPlugins(["core", "typescript", "react", "redux"]),
    useEslint: true,
  }),
  mdJs: createConfig({
    pluginNames: getPlugins(["core", "markdown"]),
    useEslint: true,
  }),
  mdJsReact: createConfig({
    pluginNames: getPlugins(["core", "react", "markdown"]),
    useEslint: true,
  }),
  mdJsReactRedux: createConfig({
    pluginNames: getPlugins(["core", "react", "redux", "markdown"]),
    useEslint: true,
  }),
  mdTs: createConfig({
    pluginNames: getPlugins(["core", "typescript", "markdown"]),
    useEslint: true,
  }),
  mdTsReact: createConfig({
    pluginNames: getPlugins(["core", "typescript", "react", "markdown"]),
    useEslint: true,
  }),
  mdTsReactRedux: createConfig({
    pluginNames: getPlugins(["core", "typescript", "react", "redux", "markdown"]),
    useEslint: true,
  }),
  json: createConfig({
    pluginNames: ["json"],
    useEslint: false,
  }),
  jsonPackage: createConfig({
    pluginNames: ["package-json"],
    useEslint: false,
  }),
}
