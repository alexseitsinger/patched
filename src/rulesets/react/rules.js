module.exports = {
  /**
   * Enforces consistent naming for boolean props.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
   */
  "react/boolean-prop-naming": [
    "error",
    {
      propTypeNames: ["bool"],
      rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      //"message": "",
      //"validateNested": true,
    },
  ],

  /**
   * Forbid "button" element without an explicit "type" attribute.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
   */
  "react/button-has-type": [
    "error",
    {
      button: true,
      submit: true,
      reset: true,
    },
  ],

  /**
   * Prevent extraneous defaultProps on components.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
   */
  "react/default-props-match-prop-types": [
    "error",
    {
      allowRequiredDefaults: false,
    },
  ],

  /**
   * Enforces consistent usage of destructuring assignment in component.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
   */
  "react/destructuring-assignment": [
    "error",
    "always",
    {
      ignoreClassFields: true,
    },
  ],

  /**
   * Prevent missing displayName in a React component definition.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
   */
  "react/display-name": [
    "off",
    {
      ignoreTranspilerName: false,
    },
  ],

  /**
   * Forbid certain props on Components.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
   */
  "react/forbid-component-props": [
    "off",
    {
      forbid: ["className", "style"],
    },
  ],

  /**
   * Forbid certain props on DOM Nodes.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
   */
  "react/forbid-dom-props": [
    "error",
    {
      forbid: [],
    },
  ],

  /**
   * Forbid certain elements.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
   */
  "react/forbid-elements": [
    "error",
    {
      forbid: [],
    },
  ],

  /**
   * Forbid certain propTypes.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
   */
  "react/forbid-prop-types": [
    "error",
    {
      forbid: ["any", "array", "object"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],

  /**
   * Forbid foreign propTypes.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
   */
  "react/forbid-foreign-prop-types": "error",

  /**
   * Prevent using this.state inside this.setState.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
   */
  "react/no-access-state-in-setstate": "error",

  /**
   * Prevent using Array index in key props.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
   */
  "react/no-array-index-key": "error",

  /**
   * Prevent passing children as props.
   *
   * 'warn' according to recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
   */
  "react/no-children-prop": "warn",

  /**
   * Prevent usage of dangerous JSX properties.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
   */
  "react/no-danger": "error",

  /**
   * Prevent problem with children and props.dangerouslySetInnerHTML.
   *
   * 'warn' according to plugin:recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
   */
  "react/no-danger-with-children": "warn",

  /**
   * Prevent usage of deprecated methods, including component lifecyle
   * methods.
   *
   * 'warn' according to plugin:recommended
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
   */
  "react/no-deprecated": "warn",

  /**
   * Prevent usage of setState in componentDidMount.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
   */
  "react/no-did-mount-set-state": ["error", "disallow-in-func"],

  /**
   * Prevent usage of setState in componentDidUpdate.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
   */
  "react/no-did-update-set-state": ["error", "disallow-in-func"],

  /**
   * Prevent direct mutation of this.state.
   *
   * 'warn' according to recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
   */
  "react/no-direct-mutation-state": "warn",

  /**
   * Prevent usage of findDOMNode.
   *
   * 'warn' according to plugin:recommended
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
   */
  "react/no-find-dom-node": "warn",

  /**
   * Prevent usage of isMounted.
   *
   * 'warn' according to recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
   */
  "react/no-is-mounted": "warn",

  /**
   * Prevent multiple component definition per file.
   *
   * NOTES:
   * - In tets, we often have multuple components declared in one file. As a
   *   result, it might be better to disable this rule. For now, we will
   *   throw an error if there are more than one Class components in a file.
   *   If we have multiple stateless functions, it will ignore them.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
   */
  "react/no-multi-comp": [
    "error",
    {
      ignoreStateless: true,
    },
  ],

  /**
   * Prevent usage of shouldComponentUpdate when extending
   * React.PureComponent.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
   */
  "react/no-redundant-should-component-update": "error",

  /**
   * Prevent usage of the return value of React.render.
   *
   * 'warn' according to plugin:recommended
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
   */
  "react/no-render-return-value": "warn",

  /**
   * Prevent usage of setState.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
   */
  "react/no-set-state": "off",

  /**
   * Prevent common casing typos.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
   */
  "react/no-typos": "error",

  /**
   * Prevent using string references in ref attribute.
   *
   * 'warn' according to plugin:recommended
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
   */
  "react/no-string-refs": [
    "warn",
    {
      noTemplateLiterals: true,
    },
  ],

  /**
   * Prevent using this in stateless functional components.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
   */
  "react/no-this-in-sfc": "error",

  /**
   * Prevent invalid characters from appearing in markup.
   *
   * 'warn' according to plugin:recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
   */
  "react/no-unescaped-entities": [
    "warn",
    {
      forbid: [">", '"', "'", "}"],
    },
  ],

  /**
   * Prevent usage of unknown DOM property. (fixable)
   *
   * 'warn' according to plugin:recommended
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
   */
  "react/no-unknown-property": [
    "warn",
    {
      ignore: [],
    },
  ],

  /**
   * Prevent usage of unsafe lifecycle methods
   *
   * plugin:recommended prefers 'off'
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
   */
  "react/no-unsafe": [
    "warn",
    {
      checkAliases: true,
    },
  ],

  /**
   * Prevent definitions of unused prop types.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
   */
  "react/no-unused-prop-types": [
    "error",
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],

  /**
   * Prevent definitions of unused state properties.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
   */
  "react/no-unused-state": "error",

  /**
   * Prevent usage of setState in componentWillUpdate.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
   */
  "react/no-will-update-set-state": ["error", "disallow-in-func"],

  /**
   * Enforce ES5 or ES6 class for React Components.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
   */
  "react/prefer-es6-class": ["error", "always"],

  /**
   * Enforce that props are read-only.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
   */
  "react/prefer-read-only-props": "error",

  /**
   * Enforce stateless React Components to be written as a pure function.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
   */
  "react/prefer-stateless-function": [
    "error",
    {
      ignorePureComponents: true,
    },
  ],

  /**
   * Prevent missing props validation in a React component definition.
   *
   * Warn according to plugin:recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
   */
  "react/prop-types": [
    "warn",
    {
      ignore: [],
      customValidators: [],
      skipUndeclared: true,
    },
  ],

  /**
   * Prevent missing React when using JSX.
   *
   * 'warn' according to plugin:recommended
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
   */
  "react/react-in-jsx-scope": "warn",

  /**
   * Enforce a defaultProps definition for every prop that is not a required
   * prop.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
   */
  "react/require-default-props": [
    "error",
    {
      forbidDefaultForRequired: true,
    },
  ],

  /**
   * Enforce React components to have a shouldComponentUpdate method.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
   */
  "react/require-optimization": "off",

  /**
   * Enforce ES5 or ES6 class for returning value in render function.
   *
   * 'warn' according to plugin:recommended
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
   */
  "react/require-render-return": "warn",

  /**
   * Prevent extra closing tags for components without children. (fixable)
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
   */
  "react/self-closing-comp": [
    "error",
    {
      component: true,
      html: true,
    },
  ],

  /**
   * Enforce component methods order.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
   */
  "react/sort-comp": [
    "error",
    {
      order: [
        "static-variables",
        "instance-variables",
        "lifecycle-variables",
        "lifecycle-methods",
        "static-methods",
        "instance-methods",
        "event-methods",
        "everything-else",
        "rendering",
      ],
      groups: {
        "event-methods": ["/^handle.+$/", "/^on.+$/"],
        "lifecycle-variables": [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "mixins",
          "statics",
          "defaultProps",
          "state",
        ],
        "lifecycle-methods": [
          "constructor",
          "getDefaultProps",
          "getInitialState",
          "getChildContext",
          "getDerivedStateFromProps",
          "componentWillMount",
          "UNSAFE_componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "UNSAFE_componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "UNSAFE_componentWillUpdate",
          "getSnapshotBeforeUpdate",
          "componentDidUpdate",
          "componentDidCatch",
          "componentWillUnmount",
        ],
        rendering: ["/^render.+$/", "render"],
      },
    },
  ],

  /**
   * Enforce propTypes declarations alphabetical sorting.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
   */
  "react/sort-prop-types": [
    "off",
    {
      callbacksLast: true,
      ignoreCase: false,
      requiredFirst: true,
      sortShapeProp: true,
      noSortAlphabetically: false,
    },
  ],

  /**
   * Enforce the state initialization style to be either in a constructor or
   * with a class property.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
   */
  "react/state-in-constructor": ["off", "never"],

  /**
   * Enforces where React component static properties should be positioned.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
   */
  "react/static-property-placement": ["error", "static public field"],

  /**
   * Enforce style prop value being an object.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
   */
  "react/style-prop-object": "error",

  /**
   * Prevent void DOM elements (e.g. <img />, <br />) from receiving children.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
   */
  "react/void-dom-elements-no-children": "error",

  /**
   * Enforce boolean attributes notation in JSX. (fixable)
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
   */
  "react/jsx-boolean-value": "off",

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
   */
  "react/jsx-child-element-spacing": "off",

  /**
   * Validate closing bracket location in JSX. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
   */
  "react/jsx-closing-bracket-location": [
    "off",
    {
      nonEmpty: "after-props",
      selfClosing: "tag-aligned",
    },
  ],

  /**
   * Validate closing tag location in JSX. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
   */
  "react/jsx-closing-tag-location": "off",

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
   */
  "react/jsx-curly-spacing": [
    "off",
    {
      // might want to change this
      when: "never",
      allowMultiline: true,
    },
  ],

  /**
   * Enforce or disallow spaces around equal signs in JSX attributes. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
   */
  "react/jsx-equals-spacing": ["off", "never"],

  /**
   * Restrict file extensions that may contain JSX.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
   */
  "react/jsx-filename-extension": [
    "error",
    {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  ],

  /**
   * Enforce position of the first prop in JSX. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
   */
  "react/jsx-first-prop-new-line": ["off", "multiline"],

  /**
   * Enforce event handler naming conventions in JSX.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
   */
  "react/jsx-handler-names": [
    "error",
    {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on",
    },
  ],

  /**
   * Validate JSX indentation. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
   */
  "react/jsx-indent": [
    "off",
    2,
    {
      checkAttributes: true,
      indentLogicalExpressions: true,
    },
  ],

  /**
   * Validate props indentation in JSX. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
   */
  "react/jsx-indent-props": ["off", "first"],

  /**
   * Validate JSX has key prop when in array or iterator.
   *
   * 'warn' according to recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
   */
  "react/jsx-key": "warn",

  /**
   * Validate JSX maximum depth.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
   */
  "react/jsx-max-depth": [
    "error",
    {
      max: 10,
    },
  ],

  /**
   * Limit maximum of props on a single line in JSX. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
   */
  "react/jsx-max-props-per-line": [
    "off",
    {
      //maxmimum: 1,
      when: "multiline",
    },
  ],

  /**
   * Prevent usage of .bind() and arrow functions in JSX props.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
   */
  "react/jsx-no-bind": [
    "error",
    {
      ignoreDOMComponents: false,
      ignoreRefs: false,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    },
  ],

  /**
   * Prevent comments from being inserted as text nodes.
   *
   * Warn according to recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
   */
  "react/jsx-no-comment-textnodes": "warn",

  /**
   * Prevent duplicate props in JSX.
   *
   * 'warn' accorind to recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
   */
  "react/jsx-no-duplicate-props": [
    "warn",
    {
      ignoreCase: true,
    },
  ],

  /**
   * Prevent usage of unwrapped JSX strings.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
   */
  "react/jsx-no-literals": [
    "off",
    {
      noStrings: false,
    },
  ],

  /**
   * Prevent usage of unsafe target='_blank'.
   *
   * 'warn' according to plugin recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
   */
  "react/jsx-no-target-blank": [
    "warn",
    {
      enforceDynamicLinks: "always",
    },
  ],

  /**
   * Disallow undeclared variables in JSX.
   *
   * 'warn' according to recommended.
   *
   * NOTES:
   * - We might want this be true.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
   */
  "react/jsx-no-undef": [
    "warn",
    {
      allowGlobals: false,
    },
  ],

  /**
   * Limit to one expression per line in JSX.
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
   */
  "react/jsx-one-expression-per-line": [
    "off",
    {
      allow: "single-child",
    },
  ],

  /**
   * Enforce curly braces or disallow unnecessary curly braces in JSX.
   *
   * NOTES:
   * - We might want to change this for children.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
   */
  "react/jsx-curly-brace-presence": [
    "error",
    {
      props: "always",
      children: "never",
    },
  ],

  /**
   * Enforce shorthand or standard form for React fragments.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
   */
  "react/jsx-fragments": ["error", "syntax"],

  /**
   * Enforce PascalCase for user-defined JSX components.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
   */
  "react/jsx-pascal-case": [
    "error",
    {
      allowAllCaps: false,
      ignore: [],
    },
  ],

  /**
   * Disallow multiple spaces between inline JSX props. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
   */
  "react/jsx-props-no-multi-spaces": "off",

  /**
   * Disallow JSX props spreading.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
   */
  "react/jsx-props-no-spreading": "off",

  /**
   * Enforce default props alphabetical sorting.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
   */
  "react/jsx-sort-default-props": [
    "off",
    {
      ignoreCase: true,
    },
  ],

  /**
   * Enforce props alphabetical sorting. (fixable)
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
   */
  "react/jsx-sort-props": [
    "off",
    {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
      ignoreCase: true,
      noSortAlphabetically: true,
      reservedFirst: true,
    },
  ],

  /**
   * Validate whitespace in and around the JSX opening and closing brackets.
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
   */
  "react/jsx-tag-spacing": [
    "off",
    {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never",
    },
  ],

  /**
   * Prevent React to be incorrectly marked as unused.
   *
   * 'warn' according to recommended.
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
   */
  "react/jsx-uses-react": "warn",

  /**
   * Prevent variables used in JSX to be incorrectly marked as unused.
   *
   * Changes to warn according to plugin 'recommended'
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
   */
  "react/jsx-uses-vars": "warn",

  /**
   * Prevent missing parentheses around multilines JSX. (fixable)
   *
   * - patches according to eslint-config-prettier/react
   *
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
   */
  "react/jsx-wrap-multilines": [
    "off",
    {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line",
    },
  ],
}
