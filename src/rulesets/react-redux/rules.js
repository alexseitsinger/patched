/**
 * https://github.com/DianaSuvorova/eslint-plugin-react-redux/blob/HEAD/docs/rules/connect-prefer-named-arguments.md
 */

module.exports = {
  /**
   * Enforces that connect function has at least 2 arguments.
   *
   * NOTE: Disabled because we sometimes only need to use state in HOCs.
   */
  "react-redux/connect-prefer-minimum-two-arguments": "off",

  /**
   * connect has 4 optional arguments:
   * 1. mapStateToProps
   * 2. mapDispatchToProps
   * 3. mergeProps
   * 4. options
   *
   * This rule enforces that all of the provided parameters should follow the
   * above naming conventions.
   *
   * NOTE: This rule gets disabled when this plugin is used with unicorn.
   */
  "react-redux/connect-prefer-named-arguments": "error",

  /**
   * Enforces that the mapDispatchToProps is an object or a function returning
   * an object.
   */
  "react-redux/mapDispatchToProps-returns-object": "error",

  /**
   * Enforces that mapDispatchToProps uses a shorthand method to wrap actions in
   * dispatch calls whenever possible.
   */
  "react-redux/mapDispatchToProps-prefer-shorthand": "error",

  /**
   * Enforces that all mapDispatchToProps parameters have specific names.
   */
  "react-redux/mapDispatchToProps-prefer-parameters-names": "error",

  /**
   * Prohibits binding a whole store object to a component.
   */
  "react-redux/mapStateToProps-no-store": "error",

  /**
   * Flags generation of copies of same-by-value but different-by-reference
   * props.
   */
  "react-redux/mapStateToProps-prefer-hoisted": "error",

  /**
   * Enforces that all mapStateToProps parameters have specific names.
   */
  "react-redux/mapStateToProps-prefer-parameters-names": "error",

  /**
   * Extension of a react's no-unused-prop-types rule filtering out false
   * positive used in redux context.
   */
  "react-redux/no-unused-prop-types": "error",

  /**
   * Enforces that all connected components are defined in a separate file.
   */
  "react-redux/prefer-separate-component-file": "error",
}
