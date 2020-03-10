const configs = require("./src/presets")

module.exports = {
  overrides: [
    {
      files: ["package.json"],
      ...configs.jsonPackage,
    },
    {
      files: ["*.js"],
      ...configs.js,
      rules: {
        ...configs.js.rules,
        "max-lines": "off",
      },
    },
    {
      files: ["*.md"],
      ...configs.mdJs,
    },
  ],
}
