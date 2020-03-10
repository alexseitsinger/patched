/**
 * Avoid accidentally rendering falsy values in your JSX. Only works with
 * @typescript-eslint/parser, and uses type information.
 *
 * Exposes a single eslint rule, no-falsy-and, that errors if the left side of
 * an inline && expression in JSX is a string or number. These expressions can
 * cause unwanted values to render, and can even cause some crashes in React
 * Native, when the string or number is falsy ("" or 0).
 *
 * Note that the rule won't work unless project is specified in parserOptions,
 * since this rule uses type information
 *
 * https://github.com/jeremy-deutsch/eslint-plugin-jsx-falsy#readme
 */

module.exports = {
  "jsx-falsy/no-falsy-and": "error",
}
