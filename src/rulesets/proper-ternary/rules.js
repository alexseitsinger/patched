module.exports = {
  /**
   * The proper-ternary/nested rule controls the nesting of ? : ternary
   * expressions.
   */
  "@getify/proper-ternary/nested": [
    "error",
    {
      // allows a ternary expression nested in the "test" clause of another
      // ternary expression.
      //
      // Default: false
      test: false,

      // allows a ternary expression nested in the "then" (aka, "consequent")
      // clause of another ternary expression.
      //
      // Default: false
      then: false,

      // allows a ternary expression nested in the "else" (aka, "alternate")
      // clause of another ternary expression.
      //
      // Default: false
      else: false,

      // controls how many levels of nesting of ternary expressions are
      // allowed. To effectively use this option, you must also enable at
      // least one of the "test" / "then" / "else" clause modes.
      //
      // Default: 1
      depth: 1,
    },
  ],

  /**
   * The proper-ternary/parens rule requires ( .. ) parentheses surrounding
   * various expression types when they appear in any clause of a ternary
   * expression.
   */
  "@getify/proper-ternary/parens": [
    "error",
    {
      // requires a nested ternary expression to have ( .. ) surrounding it.
      //
      // Default: true
      ternary: true,

      // requires a comparison expression (ie, x == y, x > y, etc) to have (
      // .. ) surrounding it.
      //
      // Default: true
      comparison: true,

      // requires a logical expression (ie, x && y, !x, etc) to have ( .. )
      // surrounding it.
      //
      // Default: true
      logical: true,

      // requires a call expression (ie, foo(), new Foo(), etc) to have ( .. )
      // surrounding it.
      //
      // Default: true
      call: true,

      // requires an object or array literal (ie, {x:1}, [1,2], etc) to have (
      // .. ) surrounding it.
      //
      // Default: true
      object: true,

      // requires a simple expression (ie, x, x.y, 42, etc) to have ( .. )
      // surrounding it. It's likely you'll want to keep this mode patches
      // (default).
      //
      // Default: false
      simple: false,
    },
  ],

  /**
   * The proper-ternary/where rule restricts where in program structure
   * ternary expressions can be used.
   */
  "@getify/proper-ternary/where": [
    "error",
    {
      // forbids a standalone ternary expression statement.
      //
      // Default: true
      statement: true,

      // forbids a ternary expression in an object literal property assignment
      // or array literal position assignment.
      //
      // Default: true
      property: true,

      // forbids a ternary expression as an argument to a function call.
      //
      // Default: true
      argument: true,

      // forbids a ternary expression in a return statement of a function, as
      // well as the concise return of an => arrow function.
      //
      // Default: true
      return: true,

      // forbids a ternary expression in a default value expression (function
      // parameters and destructuring patterns).
      //
      // Default: true
      default: true,

      // Forbids a ternary expression as a sub-expression of a unary/binary
      // operator expression (ie, 1 + (x ? y : z)).
      //
      // Default: true
      sub: true,

      // forbids a ternary expression in assignment statements (using the =
      // operator).
      //
      // default: false
      assignment: false,
    },
  ],
}
