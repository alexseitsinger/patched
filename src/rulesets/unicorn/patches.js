module.exports = {
  eslint: {
    "no-nested-ternary": "off",
    "prefer-destructuring": [
      "error",
      {
        object: true,
        array: false,
      },
    ],
  },
  "react-redux": {
    /**
     * We prefer to use 'unicorn/filename-case' over this rule.
     */
    "react-redux/connect-prefer-named-arguments": "off",
  },
}
