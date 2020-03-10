module.exports = {
  javascript: {
    /**
     * Find (And remove) unused imports.
     */
    "unused-imports/no-unused-imports": "error",

    /**
     * filter out the things caught by the no-unused-imports rule without double
     * warnings
     */
    "unused-imports/no-unused-vars": "warn",
  },
  typescript: {
    /**
     * Find (And remove) unused imports.
     */
    "unused-imports/no-unused-imports-ts": "error",

    /**
     * filter out the things caught by the no-unused-imports rule without double
     * warnings
     */
    "unused-imports/no-unused-vars-ts": "warn",
  },
}
