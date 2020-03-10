module.exports = {
  /**
   * Enforce the use of catch() on un-returned promises.
   * Default: "error" in recommended
   */
  "promise/catch-or-return": "error",

  /**
   * Avoid wrapping values in Promise.resolve or Promise.reject when not needed.
   * Default: "error" in recommended
   */
  "promise/no-return-wrap": "error",

  /**
   * Enforce consistent param names and ordering when creating new promises.
   * Default: "error" in recommended
   */
  "promise/param-names": "error",

  /**
   * Return inside each then() to create readable and reusable Promise chains.
   * Default: "error" in recommended
   */
  "promise/always-return": "error",

  /**
   * In an ES5 environment, make sure to create a Promise constructor before
   * using.
   * Default: "off" in recommended
   */
  "promise/no-native": "off",

  /**
   * Avoid nesting then() or catch() statements.
   * Default: "warn" in recommended
   */
  "promise/no-nesting": "warn",

  /**
   * Avoid using promises instead of callbacks.
   * Default: "warn" in recommended
   */
  "promise/no-promise-in-callback": "warn",

  /**
   * Avoid calling cb() iside of a then() (use nodeify instead).
   * Default: "warn" in recommended
   */
  "promise/no-callback-in-promise": "warn",

  /**
   * Avoid create new promises outside of utility libs (use pify instead).
   * Default: "off" in recommended
   */
  "promise/avoid-new": "off",

  /**
   * Avoid calling new on a Promise static method.
   * Default: "error" in recommended
   * (Fixable)
   */
  "promise/no-new-statics": "error",

  /**
   * Disallow return statements in finall().
   * Default: "warn" in recommended
   */
  "promise/no-return-in-finally": "warn",

  /**
   * Ensures the proper number of arguments are passed to Promise functions.
   * Default: "warn" in recommended
   */
  "promise/valid-params": "warn",

  /**
   * Prefer await to then() for reading Promise values.
   * Default: "error" in recommended (for ES2017).
   */
  "promise/prefer-await-to-then": "error",

  /**
   * Prefer async/await to the callback pattern.
   * Default: "error" in recommended (for ES2017)
   */
  "promise/prefer-await-to-callbacks": "error",
}
