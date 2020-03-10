/**
 * NOTE:
 * This config should be listed AFTER 'import' config because it patches rules
 * from that config.
 */

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

module.exports = {
  /**
   * Require that member overloads be consecutive
   * (Recommended)
   */
  "@typescript-eslint/adjacent-overload-signatures": "error",

  /**
   * Requires using either T[] or Array<T> for arrays
   * (Fixable)
   */
  "@typescript-eslint/array-type": [
    "error",
    {
      default: "array",
      readonly: "array",
    },
  ],

  /**
   * Disallows awaiting a value that is not a Thenable
   * (Fixable)
   * (Requires type info)
   */
  "@typescript-eslint/await-thenable": "error",

  /**
   * Bans “// @ts-ignore” comments from being used
   * (Recommended)
   *
   * NOTE: This is used by react-imported-component when imported.js is
   *       generated, so disable.
   */
  "@typescript-eslint/ban-ts-ignore": "error",

  /**
   * Bans specific types from being used
   * (Recommended)
   * (Fixable)
   */
  "@typescript-eslint/ban-types": [
    "error",
    {
      types: {
        Array: null,
        Object: "Use {} instead",
        String: {
          message: "Use string instead",
          fixWith: "string",
        },
      },
    },
  ],

  /**
   * Enforce consistent brace style for blocks
   * (Fixable)
   *
   * - Requires disabling the original eslint config rule.
   * - This rule is disabled entirely in plugin:recommended.
   */
  "@typescript-eslint/brace-style": [
    "error",
    "stroustrup",
    {
      allowSingleLine: false,
    },
  ],

  /**
   * Enforce camelCase naming convention
   * (Recommended)
   *
   * - Requires disabling the eslint rule.
   *
   * - Note: Should ignore this for REST params that need to match a model
   *   field.
   */
  "@typescript-eslint/camelcase": [
    "off",
    {
      properties: "always",
      genericType: "never",
      // ignore destructuring (since we may have rest responses from here)
      ignoreDestructuring: true,
      allow: [
        // put names of keys that are allowed to be camelcase?
      ],
    },
  ],

  /**
   * Require PascalCased class and interface names
   */
  "@typescript-eslint/class-name-casing": [
    "error",
    {
      allowUnderscorePrefix: false,
    },
  ],

  /**
   * Enforces consistent usage of type assertions.
   */
  "@typescript-eslint/consistent-type-assertions": [
    "error",
    {
      assertionStyle: "as",
      objectLiteralTypeAssertions: "allow",
    },
  ],

  /**
   * Consistent with type definition either interface or type
   * (Fixable)
   */
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

  /**
   * Require explicit return types on functions and class methods
   *
   * 'warn' according to plugin:recommended
   */
  "@typescript-eslint/explicit-function-return-type": [
    "warn",
    {
      allowExpressions: false,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
    },
  ],

  /**
   * Require explicit accessibility modifiers on class properties and methods
   */
  "@typescript-eslint/explicit-member-accessibility": [
    "off",
    {
      accessibility: "explicit",
      ignoredMethodNames: [],
      overrides: {
        accessors: "explicit",
        constructors: "explicit",
        methods: "explicit",
        properties: "explicit",
        parameterProperties: "explicit",
      },
    },
  ],

  /**
   * Require or disallow spacing between function identifiers and their
   * invocations
   *
   * (Fixable)
   *
   * - patches according to eslint-config-prettier/@typescript-eslint
   */
  "@typescript-eslint/func-call-spacing": ["off", "never"],

  /**
   * Enforces naming of generic type variables
   */
  "@typescript-eslint/generic-type-naming": ["error", "^([A-Z]([a-z]+)?)+$"],

  /**
   * Enforce consistent indentation
   * (Fixable)
   *
   * This is disabled according to plugin:recommended.
   *
   * This rule fucks up indentation of Types (if they're longer than max-len),
   * so keep this rule disabled.
   *
   * However, without enabling this, the indentation of stroustrup blocks
   * is misaligned when formatted.
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
   */
  "@typescript-eslint/indent": [
    "off",
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
   * Require that interface names should or should not prefixed with I
   */
  "@typescript-eslint/interface-name-prefix": [
    "error",
    {
      prefixWithI: "never",
      //allowUnderscorePrefix: false
    },
  ],

  /**
   * Require a specific member delimiter style for interfaces and type
   * literals.
   *
   * - patches according to eslint-config-prettier/@typescript-eslint
   */
  "@typescript-eslint/member-delimiter-style": [
    "off",
    {
      multiline: {
        delimiter: "comma",
        requireLast: true,
      },
      singleline: {
        delimiter: "comma",
        requireLast: false,
      },
      overrides: {
        interface: {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: true,
          },
        },
      },
    },
  ],

  /**
   * Enforces naming conventions for class members by visibility
   */
  "@typescript-eslint/member-naming": [
    "error",
    {
      private: "^_",
    },
  ],

  /**
   * Require a consistent member declaration order
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
   */
  "@typescript-eslint/member-ordering": "error",

  /**
   * Disallow generic Array constructors
   * (Fixable)
   */
  "@typescript-eslint/no-array-constructor": "error",

  /**
   * Bans usage of the delete operator with computed key expressions
   * (Fixable)
   *
   * We sometimes do this, so disable this rule.
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
   */
  "@typescript-eslint/no-dynamic-delete": "off",

  /**
   * Disallow empty functions
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
   */
  "@typescript-eslint/no-empty-function": "error",

  /**
   * Disallow the declaration of empty interfaces
   * (Fixable)
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
   */
  "@typescript-eslint/no-empty-interface": [
    "error",
    {
      allowSingleExtends: false,
    },
  ],

  /**
   * Disallow usage of the any type
   * (Fixable)
   *
   * We sometimes use any for dynamic properties and rest args, so disable
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
   */
  "@typescript-eslint/no-explicit-any": [
    "off",
    {
      fixToUnknown: true,
      ignoreRestArgs: true,
    },
  ],

  /**
   * Disallow extra non-null assertion
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md<Paste>
   */
  "@typescript-eslint/no-extra-non-null-assertion": "error",

  /**
   * Disallow unnecessary parentheses
   * (Fixable)
   *
   * NOTE: We might want to disable this because sometimes, using parens makes
   * code easier to read.
   *
   * - patches according to eslint-config-prettier/@typescript-eslint
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
   */
  "@typescript-eslint/no-extra-parens": "off",

  /**
   * Disallow unnecessary semicolons
   * (Fixable)
   *
   * - patches according to eslint-config-prettier/@typescript-eslint
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
   */
  "@typescript-eslint/no-extra-semi": "off",

  /**
   * Forbids the use of classes as namespaces
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
   */
  "@typescript-eslint/no-extraneous-class": [
    "error",
    {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
      allowWithDecorator: false,
    },
  ],

  /**
   * Requires Promise-like values to be handled appropriately.
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
   */
  "@typescript-eslint/no-floating-promises": [
    "error",
    {
      ignoreVoid: false,
    },
  ],

  /**
   * Disallow iterating over an array with a for-in loop
   */
  "@typescript-eslint/no-for-in-array": "error",

  /**
   * Disallows explicit type declarations for variables or parameters
   * initialized to a number, string, or boolean
   * (Fixable)
   */
  "@typescript-eslint/no-inferrable-types": [
    "error",
    {
      ignoreParameters: false,
      ignoreProperties: false,
    },
  ],

  /**
   * Disallows magic numbers
   *
   * patches because its annoying to have to define single-use numbers or
   * seemingly pointless module-level variables just to complete a simple
   * equation or define a timeout delay.
   */
  "@typescript-eslint/no-magic-numbers": [
    "off",
    {
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: false,
      ignoreEnums: false,
    },
  ],

  /**
   * Enforce valid definition of new and constructor
   */
  "@typescript-eslint/no-misused-new": "error",

  /**
   * Avoid using promises in places not designed to handle them
   */
  "@typescript-eslint/no-misused-promises": [
    "error",
    {
      checksConditionals: true,
      checksVoidReturn: true,
    },
  ],

  /**
   * Disallow the use of custom TypeScript modules and namespaces
   */
  "@typescript-eslint/no-namespace": [
    "error",
    {
      allowDeclarations: false,
      allowDefinitionFiles: true,
    },
  ],

  /**
   * Disallows non-null assertions using the ! postfix operator
   *
   * 'warn' according to plugin:recommended
   */
  "@typescript-eslint/no-non-null-assertion": "warn",

  /**
   * Disallow the use of parameter properties in class constructors
   */
  "@typescript-eslint/no-parameter-properties": "error",

  /**
   * Disallows invocation of require()
   *
   * NOTE: We sometimes use require calls for simple dynamic modules. So,
   * disable this rule.
   */
  "@typescript-eslint/no-require-imports": "off",

  /**
   * Disallow aliasing this
   *
   * We allow "self" and "root" since these are sometimes used in javascript
   * modules when the root node is references in an iife.
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
   */
  "@typescript-eslint/no-this-alias": [
    "error",
    {
      allowDestructuring: true,
      allowedNames: ["self", "root"],
    },
  ],

  /**
   * Disallow throwing literals as exceptions
   */
  "@typescript-eslint/no-throw-literal": "error",

  /**
   * Disallow the use of type aliases
   */
  "@typescript-eslint/no-type-alias": [
    "off",
    {
      allowAliases: "never",
      allowCallbacks: "never",
      allowConditionalTypes: "never",
      allowConstructors: "never",
      allowLiterals: "never",
      allowMappedTypes: "never",
      allowTupleTypes: "never",
    },
  ],

  /**
   * Prevents conditionals where the type is always truthy or always falsy
   * (Fixable)
   */
  "@typescript-eslint/no-unnecessary-condition": [
    "error",
    {
      ignoreRhs: false,
      allowConstantLoopConditions: false,
      //checkArrayPredicates: false
    },
  ],

  /**
   * Warns when a namespace qualifier is unnecessary
   * (Fixable)
   */
  "@typescript-eslint/no-unnecessary-qualifier": "error",

  /**
   * Warns if an explicitly specified type argument is the default for that
   * type parameter
   * (Fixable)
   */
  "@typescript-eslint/no-unnecessary-type-arguments": "error",

  /**
   * Warns if a type assertion does not change the type of an expression
   * (Fixable)
   */
  "@typescript-eslint/no-unnecessary-type-assertion": [
    "error",
    {
      typesToIgnore: [],
    },
  ],

  /**
   * Requires that all public method arguments and return type will be
   * explicitly typed
   */
  "@typescript-eslint/no-untyped-public-signature": [
    "error",
    {
      ignoredMethods: [],
    },
  ],

  /**
   * Disallow unused expressions
   */
  "@typescript-eslint/no-unused-expressions": "error",

  /**
   * Disallow unused variables
   *
   * 'warn' according to plugin:recommended
   */
  "@typescript-eslint/no-unused-vars": [
    "off",
    {
      vars: "all",
      args: "after-used",
      ignoreRestSiblings: false,
    },
  ],
  "@typescript-eslint/no-unused-vars-experimental": [
    "warn",
    {
      ignoredNamesRegex: "^_",
      ignoreArgsIfArgsAfterAreUsed: true,
    },
  ],

  /**
   * Disallow the use of variables before they are defined
   *
   * Disalbe the eslint rule for this one.
   *
   * NOTE:
   * The standard practice is to define interfaces/types at the top of the
   * file, so the component's contract is easy to read. Therefore, allow those
   * to be used before defined.
   */
  "@typescript-eslint/no-use-before-define": [
    "error",
    {
      functions: false,
      classes: true,
      enums: false,
      variables: true,
      typedefs: false,
    },
  ],

  /**
   * Disallow unnecessary constructors
   */
  "@typescript-eslint/no-useless-constructor": "error",

  /**
   * Disallows the use of require statements except in import statements
   *
   * - patches because we import our client store via require in a function.
   */
  "@typescript-eslint/no-var-requires": "off",

  /**
   * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only
   * used to access the array being iterated
   */
  "@typescript-eslint/prefer-for-of": "error",

  /**
   * Use function types instead of interfaces with call signatures
   * (Fixable)
   */
  "@typescript-eslint/prefer-function-type": "error",

  /**
   * Enforce includes method over indexOf method
   * (Fixable)
   */
  "@typescript-eslint/prefer-includes": "error",

  /**
   * Require the use of the namespace keyword instead of the module keyword to
   * declare custom TypeScript modules
   * (Fixable)
   */
  "@typescript-eslint/prefer-namespace-keyword": "error",

  /**
   * Enforce the usage of the nullish coalescing operator instead of logical
   * chaining
   * (Fixable)
   */
  "@typescript-eslint/prefer-nullish-coalescing": [
    "error",
    {
      ignoreConditionalTests: true,
      ignoreMixedLogicalExpressions: true,
      forceSuggestionFixer: false,
    },
  ],

  /**
   * Prefer using concise optional chain expressions instead of chained
   * logical ands
   * (Fixable)
   */
  "@typescript-eslint/prefer-optional-chain": "error",

  /**
   * Requires that private members are marked as readonly if they're never
   * modified outside of the constructor
   * (Fixable)
   */
  "@typescript-eslint/prefer-readonly": [
    "error",
    {
      onlyInlineLambdas: false,
    },
  ],

  /**
   * Prefer RegExp#exec() over String#match() if no global flag is provided
   */
  "@typescript-eslint/prefer-regexp-exec": "error",

  /**
   * Enforce the use of String#startsWith and String#endsWith instead of other
   * equivalent methods of checking substrings
   * (Fixable)
   * (Requires Type Info)
   */
  "@typescript-eslint/prefer-string-starts-ends-with": "error",

  /**
   * Requires any function or method that returns a Promise to be marked async
   * (Requires Type Info)
   *
   * patches because annoying
   */
  "@typescript-eslint/promise-function-async": [
    "off",
    {
      allowedPromiseNames: ["Thenable", "p"],
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true,
    },
  ],

  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * (Fixable)
   *
   * - This rule extends the original eslint rule, so disable that one for
   *   this.
   * - patches according to eslint-config-prettier/@typescript-eslint
   */
  "@typescript-eslint/quotes": [
    "off",
    "double",
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],

  /**
   * Enforce giving compare argument to Array#sort
   */
  "@typescript-eslint/require-array-sort-compare": "error",

  /**
   * Disallow async functions which have no await expression
   */
  "@typescript-eslint/require-await": "error",

  /**
   * When adding two variables, operands must both be of type number or of
   * type string
   */
  "@typescript-eslint/restrict-plus-operands": [
    "error",
    {
      checkCompoundAssignments: false,
    },
  ],

  /**
   * Enforce template literal expressions to be of string type
   */
  "@typescript-eslint/restrict-template-expressions": [
    "off",
    {
      allowNumber: false,
      allowBoolean: false,
      allowNullable: false,
    },
  ],

  /**
   * Rules for awaiting returned promises
   */
  "@typescript-eslint/return-await": ["error", "in-try-catch"],

  /**
   * Require or disallow semicolons instead of ASI
   * (Fixable)
   *
   * - Requires disabling the original eslint rule.
   * -This version adds support for numerous typescript features.
   */
  "@typescript-eslint/semi": "off",

  /**
   * enforce consistent spacing before function definition opening parenthesis
   * (Fixable)
   *
   * - patches according to eslint-config-prettier/@typescript-eslint
   */
  "@typescript-eslint/space-before-function-paren": "off",

  /**
   * Restricts the types allowed in boolean expressions
   * (Requires Type Info)
   */
  "@typescript-eslint/strict-boolean-expressions": [
    "error",
    {
      allowNullable: false,
      //allowSafe: false,
      ignoreRhs: false,
    },
  ],

  /**
   * Sets preference level for triple slash directives versus ES6-style import
   * declarations
   */
  "@typescript-eslint/triple-slash-reference": [
    "error",
    {
      path: "never",
      types: "never",
      lib: "never",
    },
  ],

  /**
   * Require consistent spacing around type annotations
   * (Fixable)
   *
   * - patches according to eslint-config-prettier/@typescript-eslint
   */
  "@typescript-eslint/type-annotation-spacing": [
    "off",
    {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true,
          after: true,
        },
      },
    },
  ],

  /**
   * Requires type annotations to exist
   */
  "@typescript-eslint/typedef": [
    "off",
    {
      arrayDestructuring: true,
      arrowParameter: true,
      memberVariableDeclaration: true,
      objectDestructuring: true,
      parameter: true,
      propertyDeclaration: true,
      variableDeclaration: true,
    },
  ],

  /**
   * Enforces unbound methods are called with their expected scope
   */
  "@typescript-eslint/unbound-method": [
    "off",
    {
      ignoreStatic: true,
    },
  ],

  /**
   * Warns for any two overloads that could be unified into one by using a
   * union or an optional/rest parameter
   */
  "@typescript-eslint/unified-signatures": "error",
}
