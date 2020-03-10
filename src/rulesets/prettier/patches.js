module.exports = {
  eslint: {
    /**
     * Typically, (unless using prettier-eslint) eslint will format the file
     * first, then prettier does its work.
     */

    /**
     * If the value of max-len is not the same as the printWidth value for
     * prettier, this will fuck up formatting.
     *
     * Many recommend disabling this rule completely with prettier.
     */
    "max-len": "off",

    /**
     * If we are using implicit arrow funcs, and we have linebreaks forbidden,
     * the arrow functions will exceed beyond the value of 'printWidth' that we
     * specifiy. To prevent this, disable the rule entirely so we can still use
     * single-line arrow functions manually.
     */
    "implicit-arrow-linebreak": "off",

    /**
     * Just to make sure we can use single line arrow funcs when we need to,
     * make sure this is set to as-needed instead of 'always' or 'never'.
     */
    "arrow-body-style": ["error", "as-needed"],
  },
}
