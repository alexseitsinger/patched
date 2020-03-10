// redux-saga plugin

module.exports = {
  /**
   * Ensure effects are yielded.
   * (Fixable)
   */
  "redux-saga/yield-effects": "error",

  /**
   * Prevent usage of yield in race entities.
   * (Fixable)
   */
  "redux-saga/no-yield-in-race": "error",

  /**
   * Ensures error handling on sagas.
   */
  "redux-saga/no-unhandled-errors": "error",
}
