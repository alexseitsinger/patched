module.exports = {
  /**
   * Improve regexes by making them shorter, consistent, and safer
   * (Fixable)
   *
   * Disabled because we're getting "no definition" error each time we try to
   * lint
   */
  "unicorn/better-regex": [
    "off",
    {
      /**
       * Disables optimizations that affect the sorting of character classes.
       * default: true
       */
      sortCharacterClasses: true,
    },
  ],

  /**
   * Enforce a specific parameter name in catch clauses
   */
  "unicorn/catch-error-name": [
    "error",
    {
      name: "error",

      // This option lets you specify a regex pattern for matches to ignore
      caughtErrorsIgnorePattern: "^_$",
    },
  ],

  /**
   * Move function definitions to the highest possible scope
   *
   * A function definition should be placed as close to the top-level scope as
   * possible without breaking its captured values. This improves readability,
   * directly improves performance and allows JavaScript engines to better
   * optimize performance.
   *
   * NOTE:
   * This rule does not detect or remove extraneous code blocks inside of
   * functions.
   *
   * It also ignores functions that contain JSXElement references.
   *
   * Disabled
   */
  "unicorn/consistent-function-scoping": "off",

  /**
   * Enforce correct Error subclassing
   *
   * Enforces the only valid way of Error subclassing. It works with any super
   * class that ends in Error.
   *
   * (Fixable)
   *
   * "off" according to plugin:recommended
   */
  "unicorn/custom-error-definition": "off",

  /**
   * Enforce passing a message value when throwing a built-in error
   *
   * This rule enforces a message value to be passed in when throwing an
   * instance of a built-in Error object, which leads to more readable and
   * debuggable code.
   */
  "unicorn/error-message": "error",

  /**
   * Require escape sequences to use uppercase values
   *
   * Enforces defining escape sequence values with uppercase characters rather
   * than lowercase ones. This promotes readability by making the escaped value
   * more distinguishable from the identifier.
   *
   * (Fixable)
   */
  "unicorn/escape-case": "error",

  /**
   * Add expiration conditions to TODO comments
   *
   * This rule makes it possible to pass arguments to TODO, FIXME and XXX
   * comments to trigger ESLint to report.
   *
   * TODO comments are useful when a piece of code needs some work.
   * Unfortunately these can be easily forgotten as it's common to forget to
   * track them, leaving dangling tasks to be found at later random moments, or
   * never at all.
   *
   * With this rule, a TODO can have a condition right from the beginning to
   * define its lifespan. When the condition is met, ESLint will take care of
   * reporting that there's work to be done.
   *
   * This rule will ignore all TODOs without conditions. For more information, read
   * the below eslint/no-warning-comments section.
   *
   * Conditions
   *    1. Expiry Date:
   *    2. Package Version:
   *    3. Engine Version:
   *    4. Dependency Presence
   *    5. Dependency Version
   */
  "unicorn/expiring-todo-comments": [
    "error",
    {
      /*
       * Disables Expiry Date checks during pull requests.
       * default: true
       */
      ignoreDatesOnPullRequests: true,

      // Add or remove TODO verbs.
      terms: ["todo", "fixme", "xxx"],

      /*
       * Ignore TODOs without conditions.
       * default: true
       */
      allowWarningComments: true,
    },
  ],

  /**
   * Enforce explicitly comparing the length property of a value
   * (Partially fixable)
   */
  "unicorn/explicit-length-check": [
    "error",
    {
      /*
       * Not-equal: Enforces non-zero to be checked with: array.length !== 0
       * greater-than: Enforces non-zero to be checked with: array.length > 0
       * greater-than-or-equal: Enforces non-zero to be checked with: array.length
       *                        >= 1
       */
      "non-zero": "greater-than-or-equal",
    },
  ],

  /**
   * Enforce a case style for filenames
   *
   * Enforces all linted files to have their names in a certain case style. The
   * default is kebabCase.
   *
   * Possible values are:
   * 1. kebabCase
   * 2. camelCase
   * 3. snakeCase
   * 4. pascalCase
   *
   * Characters in the filename except a-z, A-Z, 0-9, -, _ and $ are ignored.
   *
   * NOTE: This rule is preferred to the naming rules in
   *       'eslint-plugin-react-redux'.
   */
  "unicorn/filename-case": [
    "error",
    {
      case: "kebabCase",

      /*
       * Cases: {
       *   kebabCase: true,
       *   camelCase: true,
       *   snakeCase: true,
       *   pascalCase: true,
       * }
       */

      // Filenames to ignore.
      ignore: ["^README.md$"],
    },
  ],

  /**
   * Enforce importing index files with .
   * (Fixable)
   */
  "unicorn/import-index": [
    "error",
    {
      // Default: false
      ignoreImports: false,
    },
  ],

  /**
   * Enforce the use of new for all builtins, except String, Number and Boolean
   */
  "unicorn/new-for-builtins": "error",

  /**
   * Enforce specifying rules to disable in eslint-disable comments
   *
   * This rule makes you specify the rules you want to disable when using
   * eslint-disable, eslint-disable-line or eslint-disable-next-line comments.
   */
  "unicorn/no-abusive-eslint-disable": "error",

  /**
   * Require Array.isArray() instead of instanceof Array
   * (Fixable)
   */
  "unicorn/no-array-instanceof": "error",

  /**
   * Do not use leading/trailing space between console.log parameters
   * (Fixable)
   */
  "unicorn/no-console-spaces": "error",

  /**
   * Prevent passing a function reference directly to iterator methods
   * (Fixable)
   *
   * This fucks up tests, so disable.
   *
   * "off" according to recommended
   */
  "unicorn/no-fn-reference-in-iterator": "off",

  /**
   * Do not use a for loop that can be replaced with a for-of loop
   * (Fixable unless index or element variables were used outside of loop)
   */
  "unicorn/no-for-loop": "error",

  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes
   * (Fixable)
   */
  "unicorn/no-hex-escape": "error",

  /**
   * Disallow identifiers starting with new or class
   *
   * "off" according to recommended
   */
  "unicorn/no-keyword-prefix": [
    "error",
    {
      // Custom list of forbidden prefixes.
      blacklist: [],
      checkProperties: true,
      onlyCamelCase: false,
    },
  ],

  /**
   * Disallow nested ternary expressions
   * (Partially fixable)
   *
   * We recomend disabling the ESLint no-nested-ternary rule in favor of this
   * one
   */
  "unicorn/no-nested-ternary": "error",

  /**
   * Enforce the use of Buffer.from() and Buffer.alloc() instead of the
   * deprecated new Buffer()
   * (Fixable)
   */
  "unicorn/no-new-buffer": "error",

  /**
   * Disallow process.exit()
   *
   * This rule is an extension to ESLint's no-process-exit rule, that allows
   * process.exit() to be called in files that start with a hashbang →
   * #!/usr/bin/env node. It also allows process.exit() to be called in
   * process.on('<event>', func) event handlers and in files that imports
   * worker_threads.
   */
  "unicorn/no-process-exit": "error",

  /**
   * Disallow unreadable array destructuring
   *
   * You might have to modify the built-in prefer-destructuring rule to be
   * compatible with this one.
   */
  "unicorn/no-unreadable-array-destructuring": "error",

  /**
   * Disallow unsafe regular expressions
   *
   * Uses safe-regex to disallow potentially catastrophic exponential-time
   * regular expressions.
   *
   * "off" according to recommended
   */
  "unicorn/no-unsafe-regex": "error",

  /**
   * Disallow unused object properties
   *
   * See limitations of this rule on the github page.
   *
   * "off" according to recommended
   */
  "unicorn/no-unused-properties": "off",

  /**
   * Disallow number literals with zero fractions or dangling dots
   * (Fixable)
   */
  "unicorn/no-zero-fractions": "error",

  /**
   * Disallow number literals with zero fractions or dangling dots
   * (Fixable)
   */
  "unicorn/number-literal-case": "error",

  /**
   * Prefer .addEventListener() and .removeEventListener() over on-functions
   *
   * (Fixable for addEventListener)
   */
  "unicorn/prefer-add-event-listener": [
    "error",
    {
      excludedPackages: [],
    },
  ],

  /**
   * Prefer using .dataset on DOM elements over .setAttribute(…)
   * (Fixable)
   */
  "unicorn/prefer-dataset": "error",

  /**
   * Prefer KeyboardEvent#key over KeyboardEvent#keyCode
   * (Partially fixable--can only fix direct property access)
   */
  "unicorn/prefer-event-key": "error",

  /**
   * Prefer .flatMap(…) over .map(…).flat()
   * (Fixable)
   */
  "unicorn/prefer-flat-map": "error",

  /**
   * Prefer .includes() over .indexOf() when checking for existence or
   * non-existence
   * (Fixable)
   */
  "unicorn/prefer-includes": "error",

  /**
   * Prefer modern DOM APIs
   * (Fixable)
   */
  "unicorn/prefer-modern-dom-apis": "error",

  /**
   * Prefer negative index over .length - index for
   * {String,Array,TypedArray}#slice() and Array#splice()
   * (Fixable)
   */
  "unicorn/prefer-negative-index": "error",

  /**
   * Prefer Node#append() over Node#appendChild()
   * (Fixable)
   */
  "unicorn/prefer-node-append": "error",

  /**
   * Prefer childNode.remove() over parentNode.removeChild(childNode)
   * (Fixable)
   */
  "unicorn/prefer-node-remove": "error",

  /**
   * Prefer .querySelector() over .getElementById(), .querySelectorAll() over
   * .getElementsByClassName() and .getElementsByTagName()
   *
   * (Partially fixable)
   */
  "unicorn/prefer-query-selector": "error",

  /**
   * Prefer Reflect.apply() over Function#apply()
   * (Fixable)
   */
  "unicorn/prefer-reflect-apply": "error",

  /**
   * Prefer String#replaceAll() over regex searches with the global flag
   * (Fixable)
   *
   * "off" according to recommended.
   * NOTE: enabled by default when Node LTS ships with this.
   */
  "unicorn/prefer-replace-all": "error",

  /**
   * Prefer the spread operator over Array.from()
   * (Fixable)
   */
  "unicorn/prefer-spread": "error",

  /**
   * Prefer String#startsWith() & String#endsWith() over more complex
   * alternatives
   */
  "unicorn/prefer-starts-ends-with": "error",

  /**
   * Prefer String#slice() over String#substr() and String#substring()
   * (Fixable)
   */
  "unicorn/prefer-string-slice": "error",

  /**
   * Prefer .textContent over .innerText
   * (Fixable)
   */
  "unicorn/prefer-text-content": "error",

  /**
   * Prefer String#trimStart() / String#trimEnd() over String#trimLeft() /
   * String#trimRight()
   * (Fixable)
   */
  "unicorn/prefer-trim-start-end": "error",

  /**
   * Enforce throwing TypeError in type checking conditions
   * (Fixable)
   */
  "unicorn/prefer-type-error": "error",

  /**
   * Prevent abbreviations.
   *
   * Using complete words results in more readable code. Not everyone knows all
   * your abbreviations. Code is written only once, but read many times.
   *
   * This rule can also be used to replace terms, disallow words, etc. See the
   * replacements and extendDefaultReplacements options.
   *
   * (Partially fixable)
   */
  "unicorn/prevent-abbreviations": [
    "error",
    {
      /**
       * Lowercase replacements will match both camelcase and pascalcase
       * identifiers.
       * eg: err -> err, Err
       * eg: errCb -> errCb, ErrCb
       *
       * Lowercase replacements will match both complete identifiers and
       * separate words inside identifiers.
       * eg: cmd -> cmd, createCmd, CmdFactory
       *
       * Camelcase replacements will only match complete identifiers.
       * eg: errCb -> errCb, ErrCb (but NOT fooErrCb or errCbFoo)
       */
      replacements: {
        /**
         * Disable some replacements for React.
         */
        prop: false,
        props: false,
        ref: false,
        refs: false,
      },

      /**
       * Exact matches with the whitelist override applying replacements.
       *
       * Unlike the replacements option, whitelist matches full identifier names
       * case-sensitively.
       */
      whitelist: {
        // Class method (+ React)
        constructor: true,

        // React
        props: true,
        ref: true,
        componentDidMount: true,
        componentDidUpdate: true,
        shouldComponentUpdate: true,
        componentWillUnmount: true,
        propTypes: true,
        defaultProps: true,
        getDerivedStateFromProps: true,

        // Package.json
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: true,

        // Jest
        setupFilesAfterEnv: true,
      },

      /**
       * Set to false to replace the default whitelist/replacements completely.
       */
      extendDefaultReplacements: true,
      extendDefaultWhitelist: true,

      /**
       * Internal - Check varaibles decalred in default or namespace import,
       *            but only for internal modules.
       * true - Check variables declared in default or namespace import.
       * false - Don't check variables decalre in default or namespace import.
       * ---
       * Default: 'internal'
       */
      checkDefaultAndNamespaceImports: "internal",

      /**
       * Internal - Check variables declared in shorthand import, but only for
       *            internal modules.
       * true - Check variables declared in shorthand import.
       * false - Don't check variables declared in default shorthand import.
       * --
       * Default: 'internal'
       */
      checkShorthandImports: "internal",

      /**
       * Check variables declared as shorhand properties in object
       * destructuring.
       * --
       * Default: false
       */
      checkShorthandProperties: false,

      /**
       * Check property names
       * --
       * Default: false
       */
      checkProperties: false,

      /**
       * Check variable names
       * --
       * Default: true
       */
      checkVariables: true,

      /**
       * Check file names
       * --
       * Default: true
       */
      checkFilenames: false,
    },
  ],

  /**
   * Require new when throwing an error
   * (Fixable)
   */
  "unicorn/throw-new-error": "error",
}
