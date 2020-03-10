/**
 * An eslint plugin companion to babel-eslint. babel-eslint does a great job at
 * adapting eslint for use with Babel, but it can't change the built in rules to
 * support experimental features. eslint-plugin-babel re-implements problematic
 * rules so they do not give false positives or negatives.
 *
 * https://github.com/babel/eslint-plugin-babel#readme
 */

module.exports = {
  /**
   * Ignored capitalized decorators.
   */
  "babel/new-cap": "error",

  /**
   * Doesn't compain about optional chaining.
   */
  "babel/camelcase": "error",

  /**
   * Doesnt fail when inside class properties.
   */
  "babel/no-invalid-this": "error",

  /**
   * Doesn't complain about export x from "mod"; or export * as x from "mod";
   * (Fixable)
   */
  "babel/object-curly-spacing": "error",

  /**
   * Doesnt complain about JSX fragments shorthand syntax.
   */
  "babel/quotes": "error",

  /**
   * Doesnt fail when using for await (let something of {}). Includes class
   * properties.
   * (Fixable)
   */
  "babel/semi": "error",

  /**
   * Doesn't fail when using do expressions or optional chaining (a?.b()).
   */
  "babel/no-unused-expressions": "error",

  /**
   * Doesn't complain when used with BigInt
   * (typeof BigInt(9007199254740991) === 'bigint')
   */
  "babel/valid-typeof": "error",
}
