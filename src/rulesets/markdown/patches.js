module.exports = {
  eslint: {
    /**
     * These rules are already automatically surpressed by the plugin, but for
     * the sake of completeness, they are included in here.
     */
    "eol-last": "off",
    "unicode-bom": "off",
    /**
     * We use eslint's parser option 'impliedStrict'
     */
    strict: "off",
    /**
     * According to this plugin's README, certain eslint rules can be disabled by
     * default since code examples may be exempt from their restrictions.
     */
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    "padded-blocks": "off",
    /**
     * These rules have been found to be annoying from our usage, so we have
     * disabled them.
     */
    semi: "off",
    "no-shadow": "off",
  },
  react: {
    /**
     * Our examples are supposed to depict the specifics of using OUR package,
     * and should not necessarily require a complete usage sample (importing all
     * required moudles like React, etc.)
     */
    "react/react-in-jsx-scope": "off",
    /**
     * Since we may use <Component /> in a .md file, requiring a .jsx extension
     * isn't possible. Therefore, disable this rule.
     */
    "react/jsx-filename-extension": "off",
    /**
     * Markdown examples shouldn't expect a complete functioning module, so
     * disable this rule.
     */
    "react/jsx-no-undef": "off",
  },
  import: {
    /**
     * Imports in our README's shouldn't expect to actually be functional code,
     * so disable this rule.
     */
    "import/no-unresolved": "off",
  },
  node: {
    /**
     * Imports and requires are fucked up with markdown since its not an actual
     * module, so just disable this.
     */
    "node/no-missing-require": "off",
  },
}
