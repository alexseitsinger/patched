module.exports = {
  import: {
    "import/first": "off",
    "import/newline-after-import": "off",
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/no-cycle": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-deprecated": "off",
    "import/no-unused-modules": "off",
  },
  eslint: {
    /**
     * Since we need to add types to arguments, we should always use parens in
     * arrow functions with typescript.
     */
    "arrow-parens": ["error", "always"],

    /**
     * This plugin has its own copy of these rules.
     */
    "brace-style": "off",
    camelcase: "off",
    "func-call-spacing": "off",
    "no-empty-function": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-magic-numbers": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    quotes: "off",
    "require-await": "off",
    semi: "off",
    "space-before-function-paren": "off",
    indent: "off",

    /**
     * Max-len doesnt work with typescript and prettier, so just disable it.
     */
    "max-len": "off",
  },
}
