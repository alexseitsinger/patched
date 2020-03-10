const confusingBrowserGlobals = require("confusing-browser-globals")

module.exports = {
  /**
   * Enforce linebreaks after opening and before closing array brackets.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/array-bracket-newline.
   */

  "array-bracket-newline": ["error", "consistent"],

  /**
   * Enforce consistent spacing inside array brackets.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/array-bracket-spacing.
   */

  "array-bracket-spacing": [
    "error",
    "never",
    {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    },
  ],

  /**
   * Enforce line breaks after each array element.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/array-element-newline.
   */

  "array-element-newline": ["error", "consistent"],

  /**
   * Disallow or enforce spaces inside of blocks after opening block and
   * before closing block.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/block-spacing.
   */

  "block-spacing": ["error", "always"],

  /**
   * Enforce consistent brace style for blocks.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/brace-style.
   */

  "brace-style": [
    "error",
    "stroustrup",
    {
      allowSingleLine: false,
    },
  ],

  /**
   * Enforce camelcase naming convention.
   *
   * NOTES:
   * - We sometimes use underscored variables from our REST API, so enable
   *   ignoreDestructuring.
   * - We sometimes get variables that are underscored from our REST API. So,
   *   disable this rule completely.
   *
   * Https://eslint.org/docs/rules/camelcase.
   */

  camelcase: [
    "off",
    {
      properties: "never",
      ignoreDestructuring: true,
      allow: [],
    },
  ],

  /**
   * Enforce or disallow capitalization of the first letter of a comment.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/capitalized-comments.
   */

  "capitalized-comments": [
    "error",
    "always",
    {
      ignorePattern: "",
      ignoreInlineComments: false,
      ignoreConsecutiveComments: false,
    },
  ],

  /**
   * Require or disallow trailing commas.
   *
   * (fixable).
   *
   * NOTES:
   * - With function calls, we must pass a composed component tree as an
   *   argument. When we do this, we dont wnat to have to also pass a comma
   *   after the closing tag. So, ignore this rule for functions.
   * - We ignore objects because eslint applies commas to ingerfaces/types in
   *   TypeScript, and then the TS compiler re-removes them. To avoid this
   *   unnecessary-ness, just ignore them completely on objects.
   *
   * https://eslint.org/docs/rules/comma-dangle
   */

  "comma-dangle": [
    "warn",
    {
      arrays: "only-multiline",
      objects: "only-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "ignore",
    },
  ],

  /**
   * Enforce consistent spacing before and after commas.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/comma-spacing.
   */

  "comma-spacing": [
    "warn",
    {
      before: false,
      after: true,
    },
  ],

  /**
   * Enforce consistent comma style.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/comma-style.
   */

  "comma-style": [
    "warn",
    "last",
    {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: true,
        VariableDeclaration: false,
        NewExpression: false,
      },
    },
  ],

  /**
   * Enforce consistent spacing inside computed property brackets.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/computed-property-spacing.
   */

  "computed-property-spacing": [
    "error",
    "never",
    {
      enforceForClassMembers: true,
    },
  ],

  /**
   * Enforce consistent naming when capturing the current execution context.
   *
   * Https://eslint.org/docs/rules/consistent-this.
   */

  "consistent-this": ["error", "that", "self"],

  /**
   * Require or disallow newline at the end of files.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/eol-last.
   */

  "eol-last": ["error", "always"],

  /**
   * Require or disallow spacing between function identifiers and their
   * invocations.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/func-call-spacing.
   */

  "func-call-spacing": ["error", "never"],

  /**
   * Require function names to match the name of the variable or property to
   * which they are assigned.
   *
   * Https://eslint.org/docs/rules/func-name-matching.
   */

  "func-name-matching": [
    "error",
    "always",
    {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: false,
    },
  ],

  /**
   * Require or disallow named function expressions.
   *
   * Https://eslint.org/docs/rules/func-names.
   */

  "func-names": [
    "error",
    "always",
    {
      generators: "always",
    },
  ],

  /**
   * Enforce the consistent use of either function declarations or
   * expressions.
   *
   * Https://eslint.org/docs/rules/func-style.
   */

  "func-style": [
    "error",
    "declaration",
    {
      allowArrowFunctions: true,
    },
  ],

  /**
   * Enforce consistent line breaks inside function parentheses.
   *
   * This may fuck up formatting with prettier?.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/function-paren-newline.
   */

  "function-paren-newline": ["error", "consistent"],

  /**
   * Disallow specified identifiers.
   *
   * Https://eslint.org/docs/rules/id-blacklist.
   */
  // Add strings in here..

  "id-blacklist": ["error"],

  /**
   * Enforce minimum and maximum identifier lengths.
   *
   * Https://eslint.org/docs/rules/id-length.
   */

  "id-length": [
    "error",
    {
      min: 1,
      max: 78,
      properties: "always",
      exceptions: [],
    },
  ],

  /**
   * Require identifiers to match a specified regular expression.
   *
   * Https://eslint.org/docs/rules/id-match.
   */

  "id-match": [
    "error",
    "^.+",
    {
      properties: true,
      onlyDeclarations: false,

      // Might want it true

      ignoreDestructuring: false,
    },
  ],

  /**
   * Enforce the location of arrow function bodies.
   *
   * NOTE: This wil force the line to exceed the max-len (or printWidth with
   *       prettier, so either disable this rule or use 'below'.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/implicit-arrow-linebreak.
   */

  "implicit-arrow-linebreak": "off",

  /**
   * Enforce consistent indentation.
   *
   * (fixable).
   *
   * Enabled to ensure the stroustrup blocks are formatted correctly.
   *
   * Https://eslint.org/docs/rules/indent.
   */

  indent: [
    "error",
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3,
      },
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: "first",
        body: 1,
      },
      FunctionExpression: {
        parameters: "first",
        body: 1,
      },
      CallExpression: {
        arguments: "first",
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: true,
      ignoredNodes: [],
      ignoreComments: false,
    },
  ],

  /**
   * Enforce the consistent use of either double or single quotes in JSX
   * attributes.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/jsx-quotes.
   */

  "jsx-quotes": ["error", "prefer-double"],

  /**
   * Enforce consistent spacing between keys and values in object literal
   * properties.
   *
   * Https://eslint.org/docs/rules/key-spacing.
   */

  "key-spacing": [
    "error",
    {
      beforeColon: false,
      afterColon: true,
    },
  ],

  /**
   * Enforce consistent spacing before and after keywords.
   *
   * This fucks up prettier, so pathc it there.
   *
   * Https://eslint.org/docs/rules/keyword-spacing.
   */

  "keyword-spacing": [
    "error",
    {
      before: true,
      after: true,
      overrides: {},
    },
  ],

  /**
   * Enforce position of line comments.
   *
   * Https://eslint.org/docs/rules/line-comment-position.
   */

  "line-comment-position": ["error", "above"],

  /**
   * Enforce consistent linebreak style.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/linebreak-style.
   */

  "linebreak-style": ["error", "unix"],

  /**
   * Require empty lines around comments.
   *
   * (fixable).
   *
   * We use small starred-block comments to disable eslint rules, so dont
   * enforce lines BEFORE or AFTER block comments.
   *
   * Https://eslint.org/docs/rules/lines-around-comment.
   */

  "lines-around-comment": [
    "error",
    {
      beforeBlockComment: false,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false,
      allowClassStart: true,
      allowClassEnd: false,
      applyDefaultIgnorePatterns: false,
      ignorePattern: "",
    },
  ],

  /**
   * Require or disallow an empty line between class members.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/lines-between-class-members.
   */

  "lines-between-class-members": [
    "error",
    "always",
    {
      exceptAfterSingleLine: false,
    },
  ],

  /**
   * Enforce a maximum depth that blocks can be nested.
   *
   * In order to adhere to the unix philosophy, we should limit the maximum
   * depth level of any one block to reduc complexity and improve readability.
   *
   * Https://eslint.org/docs/rules/max-depth.
   */

  "max-depth": [
    "error",
    {
      max: 6,
    },
  ],

  /**
   * Enforce a maximum line length.
   *
   * In order to adhere to the unix philosophy, we should limit the maximum
   * column size used for our code to maximize readability and reduce
   * complexity.
   *
   * We enable this rule even though we also use prettier to format our lines
   * just to make sure we end up with the correct formatting.
   *
   * NOTE:
   * If our lines somehow still exceed the max-len value, even after prettier,
   * see the 'implicit-arrow-linebreak' rule to make sure it's not forcing arrow
   * functions to appear on the same line.
   *
   * Https://eslint.org/docs/rules/max-len.
   */

  "max-len": [
    "error",
    {
      code: 88,
      tabWidth: 2,
      comments: 88,

      /*
       * Setting an ignore pattern according to suggestion on github.
       * https://github.com/prettier/prettier/issues/1954
       */

      ignorePattern: "^import\\W.*",
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],

  /**
   * Enforce a maximum number of lines per file.
   *
   * In an attempt to adhere to the unix philosophy, we should try to keep
   * modules small by limiting the number of lines we use in any one of them.
   *
   * NOTE:
   * When considering this, remember that some modules may have dozen(s) of
   * lines used for imports, especially when { name, name, Name } imports are
   * split 1x per line.
   *
   * Additionally, consider that imports are split into groups, with each of
   * these groups separated by a blank line, based on the folder their imported
   * 'from'.
   *
   * eg: import {
   *    NameOne,
   *    NameTwo,
   * } from "./module-a"
   *
   * NOTE:
   * When this rule is used for linting THIS package (a collection of eslint
   * rulesets) we should disable it, since each of the modules often exceeds
   * this limit.
   *
   * Https://eslint.org/docs/rules/max-lines.
   */

  "max-lines": [
    "error",
    {
      max: 400,
      skipBlankLines: true,
      skipComments: true,
    },
  ],

  /**
   * Enforce a maximum number of line of code in a function.
   *
   * In an attempt to adhere to the unix philosophy, we should try to keep
   * modules small and readable by limting the size of any one function. This
   * will force us organize the logic of our processes rationally.
   *
   * Https://eslint.org/docs/rules/max-lines-per-function.
   */

  "max-lines-per-function": [
    "error",
    {
      max: 200,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: false,
    },
  ],

  /**
   * Enforce a maximum depth that callbacks can be nested,.
   *
   * In an attempt to adhere to the unix philosophy, we should try to keep
   * the number of layers we nest callbacks to a minimum to improve readability
   * and reduce complexity.
   *
   * Https://eslint.org/docs/rules/max-nested-callbacks.
   */

  "max-nested-callbacks": [
    "error",
    {
      max: 4,
    },
  ],

  /**
   * Enforce a maximum number of parameters in function definitions.
   *
   * In an attempt to adhere to the unix philosophy, we should try to keep the
   * number of parameters that any one function expects to a minimum. This
   * forces us to organize and structure the logic of our processes better.
   *
   * Https://eslint.org/docs/rules/max-params.
   */

  "max-params": [
    "error",
    {
      max: 10,
    },
  ],

  /**
   * Enforce a maximum number of statements allowed in function blocks.
   *
   * In an attempt to adhere to the unix philosophy, we should try to limit the
   * number of statements any one function can have to reduce complexity and
   * improve readability.
   *
   * Https://eslint.org/docs/rules/max-statements.
   */

  "max-statements": [
    "error",
    {
      max: 35,
    },
  ],

  /**
   * Enforce a maximum number of statements allowed per line.
   *
   * In an attempt to adhere to the unix philosophy, we should try to limit the
   * number of statements any one function line can have to reduce complexity
   * and improve readability.
   *
   * Https://eslint.org/docs/rules/max-statements-per-line.
   */

  "max-statements-per-line": [
    "error",
    {
      max: 1,
    },
  ],

  /**
   * Enforce a particular style for multiline comments.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/multiline-comment-style.
   */

  "multiline-comment-style": ["error", "starred-block"],

  /**
   * Enforce newlines between operands of ternary expressions.
   *
   * Https://eslint.org/docs/rules/multiline-ternary.
   */

  "multiline-ternary": ["error", "always-multiline"],

  /**
   * Require constructor names to begin with a capital letter.
   *
   * Https://eslint.org/docs/rules/new-cap.
   */

  "new-cap": [
    "error",
    {
      newIsCap: true,
      newIsCapExceptions: [],
      newIsCapExceptionPattern: "",
      capIsNew: true,
      capIsNewExceptions: [],
      capIsNewExceptionPattern: "",
      properties: true,
    },
  ],

  /**
   * Enforce or disallow parentheses when invoking a constructor with no
   * arguments.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/new-parens.
   */

  "new-parens": "error",

  /**
   * Require a newline after each call in a method chain.
   *
   * Https://eslint.org/docs/rules/newline-per-chained-call.
   */

  "newline-per-chained-call": [
    "error",
    {
      ignoreChainWithDepth: 4,
    },
  ],

  /**
   * Disallow Array constructors.
   *
   * Https://eslint.org/docs/rules/no-array-constructor.
   */

  "no-array-constructor": "error",

  /**
   * Disallow bitwise operators.
   *
   * Https://eslint.org/docs/rules/no-bitwise.
   */

  "no-bitwise": [
    "error",
    {
      allow: [],
      int32Hint: false,
    },
  ],

  /**
   * Disallow continue statements.
   *
   * NOTE: We sometimes use continue in while statements, so disable.
   *
   * Https://eslint.org/docs/rules/no-continue.
   */

  "no-continue": "off",

  /**
   * Disallow inline comments after code.
   *
   * NOTE: We should always prefer block comments since they're easier to read.
   *
   * Https://eslint.org/docs/rules/no-inline-comments.
   */

  "no-inline-comments": "error",

  /**
   * Disallow if statements as the only statement in else blocks.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-lonely-if.
   */

  "no-lonely-if": "error",

  /**
   * Disallow mixed binary operators.
   *
   * NOTES:
   * - Added options according to AirBNB's config.
   *
   * Https://eslint.org/docs/rules/no-mixed-operators.
   */

  "no-mixed-operators": [
    "error",
    {
      // Arithmetic groups disallowed from mixing with other groups.

      groups: [
        ["%", "**"],
        ["%", "+"],
        ["%", "-"],
        ["%", "*"],
        ["%", "/"],
        ["**", "+"],
        ["**", "-"],
        ["**", "/"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"],
      ],
      allowSamePrecedence: false,
    },
  ],

  /**
   * Disallow mixed spaces and tabs for indentation.
   *
   * Https://eslint.org/docs/rules/no-mixed-spaces-and-tabs.
   */

  "no-mixed-spaces-and-tabs": "error",

  /**
   * Disallow use of chained assignment expressions.
   *
   * Https://eslint.org/docs/rules/no-multi-assign.
   */

  "no-multi-assign": "error",

  /**
   * Disallow multiple empty lines.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-multiple-empty-lines.
   */

  "no-multiple-empty-lines": [
    "error",
    {
      max: 2,
      maxEOF: 1,
      maxBOF: 0,
    },
  ],

  /**
   * Disallow negated conditions.
   *
   * NOTES:
   * - We sometimes use negated conditions, so we may want to disable this
   *   rule in the future.
   *
   * Https://eslint.org/docs/rules/no-negated-condition.
   */

  "no-negated-condition": "off",

  /**
   * Disallow nested ternary expressions.
   *
   * Https://eslint.org/docs/rules/no-nested-ternary.
   */

  "no-nested-ternary": "error",

  /**
   * Disallow Object constructors.
   *
   * Https://eslint.org/docs/rules/no-new-object.
   */

  "no-new-object": "error",

  /**
   * Disallow the unary operators ++ and --.
   *
   * Https://eslint.org/docs/rules/no-plusplus.
   */

  "no-plusplus": [
    "error",
    {
      allowForLoopAfterthoughts: true,
    },
  ],

  /**
   * Disallow specified syntax.
   *
   * NOTES:
   * - Extended this setting using the AirBNB eslint.
   *
   * Https://eslint.org/docs/rules/no-restricted-syntax.
   */

  "no-restricted-syntax": [
    "error",
    {
      selector: "CallExpresion[callee.name='setTimeout'][arguments.length!=2]",
      message: "setTimeout must always be invoked with two arguments.",
    },
    {
      selector: "WithStatement",
      message: "With statements are not allowed.",
    },
    {
      selector: "ForInStatement",
      message:
        "for-in loops iterate over the entire prototype chain. Use Object.{keys,values,entries} instead.",
    },
    {
      selector: "ForOfStatement",
      message:
        "iterators/generators require regenerator-runtime, which is too heavyweight. Separately, loops should be avoided in favor of array iterations.",
    },
    {
      selector: "LabeledStatement",
      message:
        "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
    },
  ],

  /**
   * Looks for tabs anywhere inside a file: code, comments or anything else.
   *
   * Https://eslint.org/docs/rules/no-tabs.
   */

  "no-tabs": [
    "error",
    {
      allowIndentationTabs: false,
    },
  ],

  /**
   * Disallow ternary operators.
   *
   * Https://eslint.org/docs/rules/no-ternary.
   */

  "no-ternary": "off",

  /**
   * Disallow trailing whitespace at the end of lines.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-trailing-spaces.
   */

  "no-trailing-spaces": [
    "error",
    {
      skipBlankLines: false,
      ignoreComments: false,
    },
  ],

  /**
   * Disallow dangling underscores in identifiers.
   *
   * Https://eslint.org/docs/rules/no-underscore-dangle.
   */

  "no-underscore-dangle": [
    "off",
    {
      allow: ["__STATE__", "__INITIAL_STATE__"],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],

  /**
   * Disallow ternary operators when simpler alternatives exist.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-unneeded-ternary.
   */

  "no-unneeded-ternary": [
    "error",
    {
      defaultAssignment: false,
    },
  ],

  /**
   * Disallow whitespace before properties.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-whitespace-before-property.
   */

  "no-whitespace-before-property": "error",

  /**
   * Enforce the location of single-line statements.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/nonblock-statement-body-position.
   */

  "nonblock-statement-body-position": [
    "error",
    "below",
    {
      overrides: {},
    },
  ],

  /**
   * Enforce consistent line breaks inside braces.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/object-curly-newline.
   */

  "object-curly-newline": [
    "error",
    {
      ObjectExpression: {
        multiline: true,
        consistent: true,
      },
      ObjectPattern: {
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        multiline: true,
        consistent: true,
      },
    },
  ],

  /**
   * Enforce consistent spacing inside braces.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/object-curly-spacing.
   */

  "object-curly-spacing": [
    "error",
    "always",
    {
      arraysInObjects: true,
      objectsInObjects: true,
    },
  ],

  /**
   * Enforce placing object properties on separate lines.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/object-property-newline.
   */

  "object-property-newline": [
    "error",
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],

  /**
   * Enforce variables to be declared either together or separately in
   * functions.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/one-var.
   */

  "one-var": ["error", "never"],

  /**
   * Require or disallow newlines around variable declarations.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/one-var-declaration-per-line.
   */

  "one-var-declaration-per-line": ["error", "always"],

  /**
   * Require or disallow assignment operator shorthand where possible.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/operator-assignment.
   */

  "operator-assignment": ["error", "always"],

  /**
   * Enforce consistent linebreak style for operators.
   *
   * (fixable).
   *
   * Overrides match prettier
   *
   * Https://eslint.org/docs/rules/operator-linebreak.
   */

  "operator-linebreak": [
    "error",
    "after",
    {
      overrides: {
        "?": "before",
        ":": "before",
      },
    },
  ],

  /**
   * Require or disallow padding within blocks.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/padded-blocks.
   */

  "padded-blocks": [
    "error",
    "never",
    {
      allowSingleLineBlocks: false,
    },
  ],

  /**
   * Requires or disallows blank lines between the given 2 kinds of
   * statements.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/padding-line-between-statements.
   */

  "padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      prev: "var",
      next: "return",
    },
  ],

  /**
   * Disallow using Object.assign with an object literal as the first argument
   * and prefer the use of object spread instead.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/prefer-object-spread.
   */

  "prefer-object-spread": "error",

  /**
   * Require quotes around object literal property names.
   *
   * Https://eslint.org/docs/rules/quote-props.
   */

  "quote-props": [
    "error",
    "as-needed",
    {
      keywords: false,
      unnecessary: true,
      numbers: false,
    },
  ],

  /**
   * Enforces the consistent use of either backticks, double, or single
   * quotes.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/quotes.
   */

  quotes: [
    "error",
    "double",
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],

  /**
   * Require or disallow semicolons instead of ASI.
   *
   * (fixable).
   *
   * Set to any to match prettier.
   *
   * Https://eslint.org/docs/rules/semi.
   */

  semi: [
    "error",
    "never",
    {
      beforeStatementContinuationChars: "any",
    },
  ],

  /**
   * Enforce spacing around a semicolon.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/semi-spacing.
   */

  "semi-spacing": [
    "error",
    {
      before: false,
      after: true,
    },
  ],

  /**
   * Enforce location of semicolons.
   *
   * (fixable).
   *
   * Set to "first" to match prettier.
   *
   * Https://eslint.org/docs/rules/semi-style.
   */

  "semi-style": ["error", "first"],

  /**
   * Require object keys to be sorted.
   *
   * Https://eslint.org/docs/rules/sort-keys.
   */

  "sort-keys": [
    "off",
    "asc",
    {
      caseSensitive: false,
      natural: false,
    },
  ],

  /**
   * Require variables within the same declaration block to be sorted.
   * (fixable).
   *
   * Https://eslint.org/docs/rules/sort-vars.
   */

  "sort-vars": [
    "off",
    {
      ignoreCase: true,
    },
  ],

  /**
   * Enforce consistent spacing before blocks.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/space-before-blocks.
   */

  "space-before-blocks": [
    "error",
    {
      functions: "always",
      keywords: "always",
      classes: "always",
    },
  ],

  /**
   * Enforce consistent spacing before function definition opening
   * parenthesis.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/space-before-function-paren.
   */

  "space-before-function-paren": [
    "error",
    {
      anonymous: "never",
      named: "never",
      asyncArrow: "always",
    },
  ],

  /**
   * Enforce consistent spacing inside parentheses.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/space-in-parens.
   */

  "space-in-parens": ["error", "never"],

  /**
   * Require spacing around infix operators.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/space-infix-ops.
   */

  "space-infix-ops": [
    "error",
    {
      int32Hint: false,
    },
  ],

  /**
   * Enforce consistent spacing before or after unary operators.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/space-unary-ops.
   */

  "space-unary-ops": [
    "error",
    {
      words: true,
      nonwords: false,
      overrides: {
        // ...
      },
    },
  ],

  /**
   * Enforce consistent spacing after the // or /* in a comment.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/spaced-comment.
   */

  "spaced-comment": [
    "error",
    "always",
    {
      exceptions: [],
      markers: [],
    },
  ],

  /**
   * Enforce spacing around colons of switch statements.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/switch-colon-spacing.
   */

  "switch-colon-spacing": [
    "error",
    {
      after: true,
      before: false,
    },
  ],

  /**
   * Require or disallow spacing between template tags and their literals.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/template-tag-spacing.
   */

  "template-tag-spacing": ["error", "never"],

  /**
   * Require or disallow Unicode byte order mark (BOM).
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/unicode-bom.
   */

  "unicode-bom": ["error", "never"],

  /**
   * Require parenthesis around regex literals.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/wrap-regex.
   */

  "wrap-regex": "off",

  /**
   * Requires or disallows strict mode directives.
   *
   * (fixable).
   *
   * NOTES:
   * - Since we use babel, we don't need to add this manually.
   *
   * Https://eslint.org/docs/rules/strict.
   */

  strict: ["error", "never"],

  /**
   * Require return statements after callbacks.
   *
   * NOTES:
   * - Since our callback are often asyncronous, we shouldn't expect return
   *   statements. As a result, disable this rule.
   *
   * Https://eslint.org/docs/rules/callback-return.
   */

  "callback-return": [
    "off",
    ["callback", "cb", "errback", "eb", "next", "fn", "func", "f"],
  ],

  /**
   * Require require() calls to be placed at top-level module scope.
   *
   * NOTES:
   * - Since we use require() calls in our reducer, when its hot reloaded, we
   *   need to disable this rule.
   *
   * Https://eslint.org/docs/rules/global-require.
   */

  "global-require": "off",

  /**
   * Require error handling in callbacks.
   *
   * Https://eslint.org/docs/rules/handle-callback-err.
   */

  "handle-callback-err": ["error", "err"],

  /**
   * Disallow use of the Buffer() constructor.
   *
   * Https://eslint.org/docs/rules/no-buffer-constructor.
   */

  "no-buffer-constructor": "error",

  /**
   * Disallow require calls to be mixed with regular variable declarations.
   *
   * Https://eslint.org/docs/rules/no-mixed-requires.
   */

  "no-mixed-requires": [
    "error",
    {
      grouping: false,
      allowCall: false,
    },
  ],

  /**
   * Disallow new operators with calls to require.
   *
   * Https://eslint.org/docs/rules/no-new-require.
   */

  "no-new-require": "error",

  /**
   * Disallow string concatenation with __dirname and __filename.
   *
   * Https://eslint.org/docs/rules/no-path-concat.
   */

  "no-path-concat": "error",

  /**
   * Disallow the use of process.env.
   *
   * NOTES:
   * - Since we use process.env for webpack configs, we need to disable this
   *   rule.
   *
   * Https://eslint.org/docs/rules/no-process-env.
   */

  "no-process-env": "off",

  /**
   * Disallow the use of process.exit().
   *
   * Https://eslint.org/docs/rules/no-process-exit.
   */

  "no-process-exit": "error",

  /**
   * Disallow specified modules when loaded by require.
   *
   * NOTES:
   * - Since we arent specifying any modules, by default, we don't need to
   *   enable this rule.
   *
   * Https://eslint.org/docs/rules/no-restricted-modules.
   */

  "no-restricted-modules": [
    "off",
    {
      paths: [],
      patterns: [],
    },
  ],

  /**
   * Disallow synchronous methods.
   *
   * NOTES:
   * - We use syncronous methods in some node packages, so we should disable
   *   this rule.
   *
   * Https://eslint.org/docs/rules/no-sync.
   */

  "no-sync": [
    "off",
    {
      allowAtRootLevel: false,
    },
  ],

  /**
   * Enforce “for” loop update clause moving the counter in the right direction.
   *
   * Https://eslint.org/docs/rules/for-direction.
   */

  "for-direction": "error",

  /**
   * Enforce return statements in getters.
   *
   * Https://eslint.org/docs/rules/getter-return.
   */

  "getter-return": [
    "error",
    {
      allowImplicit: true,
    },
  ],

  /**
   * Disallow using an async function as a Promise executor.
   *
   * Https://eslint.org/docs/rules/no-async-promise-executor.
   */

  "no-async-promise-executor": "error",

  /**
   * Disallow await inside of loops.
   *
   * Https://eslint.org/docs/rules/no-await-in-loop.
   */

  "no-await-in-loop": "error",

  /**
   * Disallow comparing against -0.
   *
   * Https://eslint.org/docs/rules/no-compare-neg-zero.
   */

  "no-compare-neg-zero": "error",

  /**
   * Disallow assignment operators in conditional expressions.
   *
   * Https://eslint.org/docs/rules/no-cond-assign.
   */

  "no-cond-assign": "error",

  /**
   * Disallow the use of console.
   *
   * NOTES:
   * - We use console statements a lot, so disable this rule.
   *
   * Https://eslint.org/docs/rules/no-console.
   */

  "no-console": "off",

  /**
   * Disallow constant expressions in conditions.
   *
   * Https://eslint.org/docs/rules/no-constant-condition.
   */

  "no-constant-condition": [
    "error",
    {
      checkLoops: true,
    },
  ],

  /**
   * Disallow control characters in regular expressions.
   *
   * Https://eslint.org/docs/rules/no-control-regex.
   */

  "no-control-regex": "error",

  /**
   * Disallow the use of debugger.
   *
   * Https://eslint.org/docs/rules/no-debugger.
   */

  "no-debugger": "error",

  /**
   * Disallow duplicate arguments in function definitions.
   *
   * Https://eslint.org/docs/rules/no-dupe-args.
   */

  "no-dupe-args": "error",

  /**
   * Disallow duplicate keys in object literals.
   *
   * Https://eslint.org/docs/rules/no-dupe-keys.
   */

  "no-dupe-keys": "error",

  /**
   * Disallow duplicate case labels.
   *
   * Https://eslint.org/docs/rules/no-duplicate-case.
   */

  "no-duplicate-case": "error",

  /**
   * Disallow empty block statements.
   *
   * Https://eslint.org/docs/rules/no-empty.
   */

  "no-empty": [
    "error",
    {
      allowEmptyCatch: true,
    },
  ],

  /**
   * Disallow empty character classes in regular expressions.
   *
   * Https://eslint.org/docs/rules/no-empty-character-class.
   */

  "no-empty-character-class": "error",

  /**
   * Disallow reassigning exceptions in catch clauses.
   *
   * Https://eslint.org/docs/rules/no-ex-assign.
   */

  "no-ex-assign": "error",

  /**
   * Disallow unnecessary boolean casts.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-extra-boolean-cast.
   */

  "no-extra-boolean-cast": "error",

  /**
   * Disallow unnecessary parentheses.
   *
   * (fixable).
   *
   * NOTES:
   * - Since we often group expressions using parens, to make them easier to
   *   read, we should disable this rule.
   *
   * Https://eslint.org/docs/rules/no-extra-parens.
   */

  "no-extra-parens": [
    "off",
    "all",
    {
      conditionalAssign: true,
      returnAssign: false,
      nestedBinaryExpressions: false,
      ignoreJSX: "all",
      enforceForArrowConditionals: false,
    },
  ],

  /**
   * Disallow unnecessary semicolons.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-extra-semi.
   */

  "no-extra-semi": "error",

  /**
   * Disallow reassigning function declarations.
   *
   * Https://eslint.org/docs/rules/no-func-assign.
   */

  "no-func-assign": "error",

  /**
   * Disallow variable or function declarations in nested blocks.
   *
   * Https://eslint.org/docs/rules/no-inner-declarations.
   */

  "no-inner-declarations": ["error", "functions"],

  /**
   * Disallow invalid regular expression strings in RegExp constructors.
   *
   * Https://eslint.org/docs/rules/no-invalid-regexp.
   */

  "no-invalid-regexp": [
    "error",
    {
      allowConstructorFlags: ["u", "y"],
    },
  ],

  /**
   * Disallow irregular whitespace.
   *
   * Https://eslint.org/docs/rules/no-irregular-whitespace.
   */

  "no-irregular-whitespace": [
    "error",
    {
      skipStrings: false,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
    },
  ],

  /**
   * Disallow characters which are made with multiple code points in character class syntax.
   *
   * Https://eslint.org/docs/rules/no-misleading-character-class.
   */

  "no-misleading-character-class": "error",

  /**
   * Disallow calling global object properties as functions.
   *
   * Https://eslint.org/docs/rules/no-obj-calls.
   */

  "no-obj-calls": "error",

  /**
   * Disallow calling some Object.prototype methods directly on objects.
   *
   * Https://eslint.org/docs/rules/no-prototype-builtins.
   */

  "no-prototype-builtins": "error",

  /**
   * Disallow multiple spaces in regular expressions.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-regex-spaces.
   */

  "no-regex-spaces": "error",

  /**
   * Disallow sparse arrays.
   *
   * Https://eslint.org/docs/rules/no-sparse-arrays.
   */

  "no-sparse-arrays": "error",

  /**
   * Disallow template literal placeholder syntax in regular strings.
   *
   * Https://eslint.org/docs/rules/no-template-curly-in-string.
   */

  "no-template-curly-in-string": "error",

  /**
   * Disallow confusing multiline expressions.
   *
   * Https://eslint.org/docs/rules/no-unexpected-multiline.
   */

  "no-unexpected-multiline": "error",

  /**
   * Disallow unreachable code after return, throw, continue, and break statements.
   *
   * Https://eslint.org/docs/rules/no-unreachable.
   */

  "no-unreachable": "error",

  /**
   * Disallow control flow statements in finally blocks.
   *
   * Https://eslint.org/docs/rules/no-unsafe-finally.
   */

  "no-unsafe-finally": "error",

  /**
   * Disallow negating the left operand of relational operators.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-unsafe-negation.
   */

  "no-unsafe-negation": "error",

  /**
   * Disallow assignments that can lead to race conditions due to usage of await or yield.
   *
   * Https://eslint.org/docs/rules/require-atomic-updates.
   */

  "require-atomic-updates": "error",

  /**
   * Require calls to isNaN() when checking for NaN.
   *
   * Https://eslint.org/docs/rules/use-isnan.
   */

  "use-isnan": "error",

  /**
   * Enforce comparing typeof expressions against valid strings.
   *
   * Https://eslint.org/docs/rules/valid-typeof.
   */

  "valid-typeof": [
    "error",
    {
      requireStringLiterals: true,
    },
  ],

  /**
   * Enforce getter and setter pairs in objects.
   *
   * Https://eslint.org/docs/rules/accessor-pairs.
   */

  "accessor-pairs": [
    "off",
    {
      setWithoutGet: true,
      getWithoutSet: true,
    },
  ],

  /**
   * Enforce return statements in callbacks of array methods.
   *
   * Https://eslint.org/docs/rules/array-callback-return.
   */

  "array-callback-return": [
    "error",
    {
      allowImplicit: true,
    },
  ],

  /**
   * Enforce the use of variables within the scope they are defined.
   *
   * Https://eslint.org/docs/rules/block-scoped-var.
   */

  "block-scoped-var": "error",

  /**
   * Enforce that class methods utilize this.
   *
   * Https://eslint.org/docs/rules/class-methods-use-this.
   *
   * Very annoying rule.
   */

  "class-methods-use-this": [
    "off",
    {
      exceptMethods: [],
    },
  ],

  /**
   * Enforce a maximum cyclomatic complexity allowed in a program.
   *
   * Https://eslint.org/docs/rules/complexity.
   */

  complexity: [
    "error",
    {
      max: 30,
    },
  ],

  /**
   * Require return statements to either always or never specify values.
   *
   * NOTES:
   * - Since reducer functions only return for matching cases, we dont supply
   *   a return value at the end of them. As a result, turn this rule off to
   *   avoid throwng this error.
   *
   * Https://eslint.org/docs/rules/consistent-return.
   */

  "consistent-return": [
    "off",
    {
      treatUndefinedAsUnspecified: false,
    },
  ],

  /**
   * Enforce consistent brace style for all control statements.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/curly.
   */

  curly: ["error", "all"],

  /**
   * Require default cases in switch statements.
   *
   * NOTE: Oftentimes, we don't need a default case, but it may make sense to
   *       enforce one.
   *
   * Https://eslint.org/docs/rules/default-case.
   */

  "default-case": [
    "off",
    {
      commentPattern: "^no\\sdefault$",
    },
  ],

  /**
   * Enforce consistent newlines before and after dots.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/dot-location.
   */

  "dot-location": ["error", "property"],

  /**
   * Enforce dot notation whenever possible.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/dot-notation.
   */

  "dot-notation": [
    "error",
    {
      allowKeywords: true,
      allowPattern: "",
    },
  ],

  /**
   * Require the use of === and !==.
   *
   * Https://eslint.org/docs/rules/eqeqeq.
   */

  eqeqeq: ["error", "always"],

  /**
   * Require for-in loops to include an if statement.
   *
   * Https://eslint.org/docs/rules/guard-for-in.
   */

  "guard-for-in": "error",

  /**
   * Enforce a maximum number of classes per file.
   *
   * Https://eslint.org/docs/rules/max-classes-per-file.
   */

  "max-classes-per-file": ["error", 5],

  /**
   * Disallow the use of alert, confirm, and prompt.
   *
   * Https://eslint.org/docs/rules/no-alert.
   */

  "no-alert": "error",

  /**
   * Disallow the use of arguments.caller or arguments.callee.
   *
   * Https://eslint.org/docs/rules/no-caller.
   */

  "no-caller": "error",

  /**
   * Disallow lexical declarations in case clauses,.
   *
   * Https://eslint.org/docs/rules/no-case-declarations.
   */

  "no-case-declarations": "error",

  /**
   * Disallow division operators explicitly at the beginning of regular
   * expressions.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-div-regex.
   */

  "no-div-regex": "error",

  /**
   * Disallow else blocks after return statements in if statements.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-else-return.
   */

  "no-else-return": [
    "error",
    {
      allowElseIf: false,
    },
  ],

  /**
   * Disallow empty functions.
   *
   * NOTES:
   * - We sometimes use empty functions for defaultProps in react. As a
   *   result, allow functions and methods to be empty.
   *
   * Https://eslint.org/docs/rules/no-empty-function.
   */

  "no-empty-function": [
    "error",
    {
      allow: [
        "functions",
        "arrowFunctions",

        // "generatorFunctions",

        "methods",

        /*
         * "generatorMethods",
         * "getters",
         * "setters",
         * "constructors",
         */
      ],
    },
  ],

  /**
   * Disallow empty destructuring patterns.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-empty-pattern.
   */

  "no-empty-pattern": "error",

  /**
   * Disallow null comparisons without type-checking operators.
   *
   * Https://eslint.org/docs/rules/no-eq-null.
   */

  "no-eq-null": "error",

  /**
   * Disallow the use of eval().
   *
   * Https://eslint.org/docs/rules/no-eval.
   */

  "no-eval": [
    "error",
    {
      allowIndirect: false,
    },
  ],

  /**
   * Disallow extending native types.
   *
   * Https://eslint.org/docs/rules/no-extend-native.
   */

  "no-extend-native": [
    "error",
    {
      exceptions: [],
    },
  ],

  /**
   * Disallow unnecessary calls to .bind().
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-extra-bind.
   */

  "no-extra-bind": "error",

  /**
   * Disallow unnecessary labels.
   *
   * Https://eslint.org/docs/rules/no-extra-label.
   */

  "no-extra-label": "error",

  /**
   * Disallow fallthrough of case statements.
   *
   * Https://eslint.org/docs/rules/no-fallthrough.
   */

  "no-fallthrough": [
    "error",
    {
      commentPattern: "fallthrough",
    },
  ],

  /**
   * Disallow leading or trailing decimal points in numeric literals.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-floating-decimal.
   */

  "no-floating-decimal": "error",

  /**
   * Disallow assignments to native objects or read-only global variables.
   *
   * Https://eslint.org/docs/rules/no-global-assign.
   */

  "no-global-assign": [
    "error",
    {
      exceptions: [],
    },
  ],

  /**
   * Disallow shorthand type conversions.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-implicit-coercion.
   */

  "no-implicit-coercion": [
    "error",
    {
      boolean: true,
      number: true,
      string: true,
      allow: [
        /*
         * "~",
         * "!!",
         * "+",
         * "*",
         */
      ],
    },
  ],

  /**
   * Disallow variable and function declarations in the global scope.
   *
   * Https://eslint.org/docs/rules/no-implicit-globals.
   */

  "no-implicit-globals": "error",

  /**
   * Disallow the use of eval()-like methods.
   *
   * Https://eslint.org/docs/rules/no-implied-eval.
   */

  "no-implied-eval": "error",

  /**
   * Disallow this keywords outside of classes or class-like objects.
   *
   * NOTES:
   * - We use 'this' for references the global scope when we use IIFE's, etc.
   *   As a result, disable this rule.
   *
   * Https://eslint.org/docs/rules/no-invalid-this.
   */

  "no-invalid-this": "off",

  /**
   * Disallow the use of the __iterator__ property.
   *
   * Https://eslint.org/docs/rules/no-iterator.
   */

  "no-iterator": "error",

  /**
   * Disallow labeled statements.
   *
   * Https://eslint.org/docs/rules/no-labels.
   */

  "no-labels": [
    "error",
    {
      allowLoop: false,
      allowSwitch: false,
    },
  ],

  /**
   * Disallow unnecessary nested blocks.
   *
   * Https://eslint.org/docs/rules/no-lone-blocks.
   */

  "no-lone-blocks": "error",

  /**
   * Disallow function declarations that contain unsafe references inside loop
   * statements.
   *
   * Https://eslint.org/docs/rules/no-loop-func.
   */

  "no-loop-func": "error",

  /**
   * Disallow magic numbers.
   *
   * NOTES:
   * - Setting a literal 0 will throw an error with this rules. So, disable
   *   this rule completely.
   *
   * Https://eslint.org/docs/rules/no-magic-numbers.
   */

  "no-magic-numbers": [
    "off",
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: true,
    },
  ],

  /**
   * Disallow multiple spaces.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-multi-spaces.
   */

  "no-multi-spaces": [
    "error",
    {
      ignoreEOLComments: false,
      exceptions: {
        // Default is True

        Property: false,
      },
    },
  ],

  /**
   * Disallow multiline strings.
   *
   * Https://eslint.org/docs/rules/no-multi-str.
   */

  "no-multi-str": "error",

  /**
   * Disallow new operators outside of assignments or comparisons.
   *
   * NOTES:
   * - Since webpack uses plugins with new, we might need to set this to warn only.
   *
   * Https://eslint.org/docs/rules/no-new.
   */

  "no-new": "off",

  /**
   * Disallow new operators with the Function object.
   *
   * Https://eslint.org/docs/rules/no-new-func.
   */

  "no-new-func": "error",

  /**
   * Disallow new operators with the String, Number, and Boolean objects.
   *
   * Https://eslint.org/docs/rules/no-new-wrappers.
   */

  "no-new-wrappers": "error",

  /**
   * Disallow octal literals.
   *
   * Https://eslint.org/docs/rules/no-octal.
   */

  "no-octal": "error",

  /**
   * Disallow octal escape sequences in string literals.
   *
   * Https://eslint.org/docs/rules/no-octal-escape.
   */

  "no-octal-escape": "error",

  /**
   * Disallow reassigning function parameters.
   *
   * Https://eslint.org/docs/rules/no-param-reassign.
   */

  "no-param-reassign": [
    "error",
    {
      props: true,
      ignorePropertyModificationsFor: [
        // For reduce accumulators

        "acc",
        "accumulator",

        // For events

        "e",
        "event",

        // For Express requests

        "req",
        "request",

        // For Express responses

        "res",
        "response",

        // For ReactRouter context

        "staticContext",
      ],
    },
  ],

  /**
   * Disallow the use of the __proto__ property.
   *
   * Https://eslint.org/docs/rules/no-proto.
   */

  "no-proto": "error",

  /**
   * Disallow variable redeclaration.
   *
   * Https://eslint.org/docs/rules/no-redeclare.
   */

  "no-redeclare": [
    "error",
    {
      builtinGlobals: true,
    },
  ],

  /**
   * Disallow certain properties on certain objects.
   *
   * Https://eslint.org/docs/rules/no-restricted-properties.
   */

  "no-restricted-properties": [
    "error",
    {
      object: "arguments",
      property: "callee",
      message: "arguments.callee is deprecated",
    },
    {
      object: "global",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "self",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "window",
      property: "isFinite",
      message: "Please use Number.isFinite instead",
    },
    {
      object: "global",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "self",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      object: "window",
      property: "isNaN",
      message: "Please use Number.isNaN instead",
    },
    {
      property: "__defineGetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      property: "__defineSetter__",
      message: "Please use Object.defineProperty instead.",
    },
    {
      object: "Math",
      property: "pow",
      message: "Use the exponentiation operator (**) instead.",
    },
  ],

  /**
   * Disallow assignment operators in return statements.
   *
   * Https://eslint.org/docs/rules/no-return-assign.
   */

  "no-return-assign": ["error", "always"],

  /**
   * Disallow unnecessary return await.
   *
   * Https://eslint.org/docs/rules/no-return-await.
   */

  "no-return-await": "error",

  /**
   * Disallow javascript: urls.
   *
   * Https://eslint.org/docs/rules/no-script-url.
   */

  "no-script-url": "error",

  /**
   * Disallow assignments where both sides are exactly the same.
   *
   * Https://eslint.org/docs/rules/no-self-assign.
   */

  "no-self-assign": [
    "error",
    {
      props: true,
    },
  ],

  /**
   * Disallow comparisons where both sides are exactly the same.
   *
   * Https://eslint.org/docs/rules/no-self-compare.
   */

  "no-self-compare": "error",

  /**
   * Disallow comma operators.
   *
   * Https://eslint.org/docs/rules/no-sequences.
   */

  "no-sequences": "error",

  /**
   * Disallow throwing literals as exceptions.
   *
   * Https://eslint.org/docs/rules/no-throw-literal.
   */

  "no-throw-literal": "error",

  /**
   * Disallow unmodified loop conditions.
   *
   * Https://eslint.org/docs/rules/no-unmodified-loop-condition.
   */

  "no-unmodified-loop-condition": "error",

  /**
   * Disallow unused expressions.
   *
   * Https://eslint.org/docs/rules/no-unused-expressions.
   */

  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  /**
   * Disallow unused labels.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-unused-labels.
   */

  "no-unused-labels": "error",

  /**
   * Disallow unnecessary calls to .call() and .apply().
   *
   * NOTES:
   * - Sometimes, .call() and .apply() are used to invoke a function with a
   *   specific context/arguments. As a result, disable this rule.
   *
   * Https://eslint.org/docs/rules/no-useless-call.
   */

  "no-useless-call": "off",

  /**
   * Disallow unnecessary catch clauses,.
   *
   * Https://eslint.org/docs/rules/no-useless-catch.
   */

  "no-useless-catch": "error",

  /**
   * Disallow unnecessary concatenation of literals or template literals.
   *
   * Https://eslint.org/docs/rules/no-useless-concat.
   */

  "no-useless-concat": "error",

  /**
   * Disallow unnecessary escape characters.
   *
   * Https://eslint.org/docs/rules/no-useless-escape.
   */

  "no-useless-escape": "error",

  /**
   * Disallow redundant return statements.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-useless-return.
   */

  "no-useless-return": "error",

  /**
   * Disallow void operators,.
   *
   * Https://eslint.org/docs/rules/no-void.
   */

  "no-void": "error",

  /**
   * Disallow specified warning terms in comments.
   *
   * NOTES:
   * - We use warning comments to keep our place when we're developing
   *   something. So, disable this rule.
   *
   * Https://eslint.org/docs/rules/no-warning-comments.
   */

  "no-warning-comments": [
    "off",
    {
      terms: ["todo", "fix"],
      location: "start",
    },
  ],

  /**
   * Disallow with statements.
   *
   * Https://eslint.org/docs/rules/no-with.
   */

  "no-with": "error",

  /**
   * Enforce using named capture group in regular expression.
   *
   * NOTES:
   * - This is only available in newer ecmascript version.
   *
   * Https://eslint.org/docs/rules/prefer-named-capture-group.
   */

  "prefer-named-capture-group": "off",

  /**
   * Require using Error objects as Promise rejection reasons.
   *
   * Https://eslint.org/docs/rules/prefer-promise-reject-errors.
   */

  "prefer-promise-reject-errors": "error",

  /**
   * Enforce the consistent use of the radix argument when using parseInt().
   *
   * Https://eslint.org/docs/rules/radix.
   */

  radix: ["error", "as-needed"],

  /**
   * Disallow async functions which have no await expression.
   *
   * NOTES:
   * - patches this according to AirBNB eslint.
   * - If an async function doens't contain await, it is executed synchronously,
   *   so when we use it, we should enforce await.
   *
   * Https://eslint.org/docs/rules/require-await.
   */

  "require-await": "error",

  /**
   * Enforce the use of u flag on RegExp.
   *
   * Https://eslint.org/docs/rules/require-unicode-regexp.
   */

  "require-unicode-regexp": "off",

  /**
   * Require var declarations be placed at the top of their containing scope.
   *
   * Https://eslint.org/docs/rules/vars-on-top.
   */

  "vars-on-top": "off",

  /**
   * Require parentheses around immediate function invocations.
   *
   * Https://eslint.org/docs/rules/wrap-iife.
   */

  "wrap-iife": [
    "error",
    "outside",
    {
      functionPrototypeMethods: false,
    },
  ],

  /**
   * Require or disallow “Yoda” conditions.
   *
   * Https://eslint.org/docs/rules/yoda.
   */

  yoda: [
    "error",
    "never",
    {
      exceptRange: true,
      onlyEquality: false,
    },
  ],

  /**
   * Require braces around arrow function bodies.
   * (See also implict-arrow-linebreak rule)
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/arrow-body-style.
   */

  "arrow-body-style": ["error", "as-needed"],

  /**
   * Require parentheses around arrow function arguments.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/arrow-parens.
   */

  "arrow-parens": [
    "error",
    "as-needed",
    {
      requireForBlockBody: false,
    },
  ],

  /**
   * Enforce consistent spacing before and after the arrow in arrow functions.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/arrow-spacing.
   */

  "arrow-spacing": [
    "error",
    {
      before: true,
      after: true,
    },
  ],

  /**
   * Require super() calls in constructors.
   *
   * Https://eslint.org/docs/rules/constructor-super.
   */

  "constructor-super": "error",

  /**
   * Enforce consistent spacing around * operators in generator functions.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/generator-star-spacing.
   */

  "generator-star-spacing": [
    "error",
    {
      before: false,
      after: true,
    },
  ],

  /**
   * Disallow reassigning class members.
   *
   * Https://eslint.org/docs/rules/no-class-assign.
   */

  "no-class-assign": "error",

  /**
   * Disallow arrow functions where they could be confused with comparisons.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-confusing-arrow.
   */

  "no-confusing-arrow": [
    "error",
    {
      allowParens: true,
    },
  ],

  /**
   * Disallow reassigning const variables.
   *
   * Https://eslint.org/docs/rules/no-const-assign.
   */

  "no-const-assign": "error",

  /**
   * Disallow duplicate class members.
   *
   * Https://eslint.org/docs/rules/no-dupe-class-members.
   */

  "no-dupe-class-members": "error",

  /**
   * Disallow duplicate module imports.
   *
   * Https://eslint.org/docs/rules/no-duplicate-imports.
   */

  "no-duplicate-imports": [
    "error",
    {
      includeExports: false,
    },
  ],

  /**
   * Disallow new operators with the symbol object.
   *
   * Https://eslint.org/docs/rules/no-new-symbol.
   */

  "no-new-symbol": "error",

  /**
   * Disallow specified modules when loaded by import.
   *
   * Https://eslint.org/docs/rules/no-restricted-imports.
   */

  "no-restricted-imports": [
    "error",
    {
      paths: [],
      patterns: [],
    },
  ],

  /**
   * Disallow this/super before calling super() in constructors.
   *
   * Https://eslint.org/docs/rules/no-this-before-super.
   */

  "no-this-before-super": "error",

  /**
   * Disallow unnecessary computed property keys in object literals.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-useless-computed-key.
   */

  "no-useless-computed-key": "error",

  /**
   * Disallow unnecessary constructors.
   *
   * Https://eslint.org/docs/rules/no-useless-constructor.
   */

  "no-useless-constructor": "error",

  /**
   * Disallow renaming import, export, and destructured assignments to the
   * same name.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/no-useless-rename.
   */

  "no-useless-rename": [
    "error",
    {
      ignoreImport: false,
      ignoreExport: false,
      ignoreDestructuring: false,
    },
  ],

  /**
   * Require let or const instead of var.
   *
   * Https://eslint.org/docs/rules/no-var.
   */

  "no-var": "off",

  /**
   * Require or disallow method and property shorthand syntax for object
   * literals.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/object-shorthand.
   */

  "object-shorthand": ["off", "consistent-as-needed"],

  /**
   * Require using arrow functions for callbacks.
   *
   * Https://eslint.org/docs/rules/prefer-arrow-callback.
   */

  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: false,
    },
  ],

  /**
   * Require const declarations for variables that are never reassigned after
   * declared.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/prefer-const.
   */

  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    },
  ],

  /**
   * Require destructuring from arrays and/or objects.
   *
   * Https://eslint.org/docs/rules/prefer-destructuring.
   */

  "prefer-destructuring": [
    "error",
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  /**
   * Disallow parseint() and number.parseint() in favor of binary, octal, and
   * hexadecimal literals.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/prefer-numeric-literals.
   */

  "prefer-numeric-literals": "error",

  /**
   * Require rest parameters instead of arguments.
   *
   * Https://eslint.org/docs/rules/prefer-rest-params.
   */

  "prefer-rest-params": "error",

  /**
   * Require spread operators instead of .apply().
   *
   * Https://eslint.org/docs/rules/prefer-spread.
   */

  "prefer-spread": "error",

  /**
   * Require template literals instead of string concatenation.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/prefer-template.
   */

  "prefer-template": "error",

  /**
   * Require generator functions to contain yield.
   *
   * Https://eslint.org/docs/rules/require-yield.
   */

  "require-yield": "error",

  /**
   * Enforce spacing between rest and spread operators and their expressions.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/rest-spread-spacing.
   */

  "rest-spread-spacing": ["error", "never"],

  /**
   * Enforce sorted import declarations within modules.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/sort-imports.
   */

  "sort-imports": [
    "off",
    {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: true,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    },
  ],

  /**
   * Require symbol descriptions.
   *
   * Https://eslint.org/docs/rules/symbol-description.
   */

  "symbol-description": "error",

  /**
   * Require or disallow spacing around embedded expressions of template
   * strings.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/template-curly-spacing.
   */

  "template-curly-spacing": ["error", "never"],

  /**
   * Require or disallow spacing around the * in yield* expressions.
   *
   * (fixable).
   *
   * Https://eslint.org/docs/rules/yield-star-spacing.
   */

  "yield-star-spacing": [
    "error",
    {
      after: true,
    },
  ],

  /**
   * Require or disallow initialization in variable declarations.
   *
   * NOTES:
   * - We sometimes declare varialbes with values, so disable this rule.
   *
   * Https://eslint.org/docs/rules/init-declarations.
   */

  "init-declarations": [
    "off",
    "never",
    {
      ignoreForLoopInit: true,
    },
  ],

  /**
   * Disallow deleting variables.
   *
   * NOTES:
   * - We infrequently use delete on variables to enforce garbage collection.
   *   So, disable this rule.
   *
   * Https://eslint.org/docs/rules/no-delete-var.
   */

  "no-delete-var": "off",

  /**
   * Disallow labels that share a name with a variable.
   *
   * Https://eslint.org/docs/rules/no-label-var.
   */

  "no-label-var": "error",

  /**
   * Disallow specified global variables.
   *
   * NOTES:
   * - We added variables based on AirBNB's eslint config.
   *
   * Https://eslint.org/docs/rules/no-restricted-globals.
   */

  "no-restricted-globals": ["error", "isFinite", "isNaN"].concat(
    confusingBrowserGlobals
  ),

  /**
   * Disallow variable declarations from shadowing variables declared in the
   * outer scope.
   *
   * Https://eslint.org/docs/rules/no-shadow.
   */

  "no-shadow": [
    "error",
    {
      builtinGlobals: true,
      hoist: "functions",
      allow: [
        "done",
        "next",
        "data",
        "e",
        "event",
        "err",
        "error",
        "resolve",
        "reject",
        "callback",
        "cb",
        "errback",
        "eb",
        "f",
        "fn",
        "func",
        "method",
      ],
    },
  ],

  /**
   * Disallow identifiers from shadowing restricted names.
   *
   * Https://eslint.org/docs/rules/no-shadow-restricted-names.
   */

  "no-shadow-restricted-names": "error",

  /**
   * Disallow the use of undeclared variables unless mentioned in global
   * comments.
   *
   * Https://eslint.org/docs/rules/no-undef.
   */

  "no-undef": [
    "error",
    {
      typeof: true,
    },
  ],

  /**
   * Disallow initializing variables to undefined.
   *
   * Https://eslint.org/docs/rules/no-undef-init.
   */

  "no-undef-init": "error",

  /**
   * Disallow the use of undefined as an identifier.
   *
   * NOTE: We set the root reducer states to undefined to reset them all, so
   * turn this rule off.
   *
   * Https://eslint.org/docs/rules/no-undefined.
   */

  "no-undefined": "off",

  /**
   * Disallow unused variables.
   *
   * NOTES:
   * - We sometimes declare catch without using the error object, so dont
   *   check them.
   * - Ignore rest siblings should be true,
   * - We should check all variable, even global ones.
   *
   * Https://eslint.org/docs/rules/no-unused-vars.
   */

  "no-unused-vars": [
    "warn",
    {
      vars: "all",

      // VarsIgnorePattern: "[iI]gnore",

      args: "after-used",
      ignoreRestSiblings: true,

      // ArgsIgnorePattern: "^_",

      caughtErrors: "none",

      // CaughtErrorsIgnorePattern: "^ignore",
    },
  ],

  /**
   * Disallow the use of variables before they are defined.
   *
   * NOTES:
   * - Since function definitions get hoisted to the top of the scope, we can
   *   disable this rule for functions. (This assumes we have prefered
   *   function definitions in another rule.).
   *
   * Https://eslint.org/docs/rules/no-use-before-define.
   */

  "no-use-before-define": [
    "error",
    {
      functions: false,
      classes: true,
      variables: true,
    },
  ],
}
