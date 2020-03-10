module.exports = {
  /**
   * If we're using this plugin, it's probably smart to disable some other
   * plugins rules that attempt to do the same thing as this plugin.
   */
  "react-redux": {
    "react-redux/connect-prefer-named-arguments": "off",
  },
  unicorn: {
    "unicorn/filename-case": "off",
  },
}
