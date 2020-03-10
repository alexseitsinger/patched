module.exports = {
  /**
   * Set prettier rules to warnings since they're primarily style-oriented,
   * and not functionality.
   *
   * Since we don't use the eslint-plugin-prettier, and we have already
   * integrated the overrides provided by eslint-config-prettier into anothe
   * ruleset in this package, we dont need to enable the 'prettier/prettier'
   * rule here.
   *
   * Since we use prettier integrated with our IDE, this ruleset is simply here
   * to ensure that certain rules for eslint don't override the formatting we
   * apply using prettier.
   */
  //"prettier/prettier": "warn",
}
