/**
 * NOTE:
 *
 * This config should be listed AFTER 'node' and BEFORE 'typescript-eslint'
 * because each of these configs patches rules from other.
 */

module.exports = {
  /**
   * Ensure all imports appear before other statements.
   *
   * NOTE: patches in typescript-eslint
   * NOTE: patches because problems with TypeScript when mixed ESM and CJS.
   *        (see xo plugin)
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
   */
  "import/first": "error",

  /**
   * Ensure all exports appear after other statements,
   *
   * NOTES:
   * - With React, we sometimes export stateless functional components, then
   *   define its propType below, so disable this rule.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
   */
  "import/exports-last": "off",

  /**
   * Report repeated import of the same module in multiple places.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
   */
  "import/no-duplicates": "error",

  /**
   * Report namespace imports.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
   */
  "import/no-namespace": "off",

  /**
   * Ensure consistent use of file extension within the import path.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
   */
  "import/extensions": [
    "error",
    {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
      json: "always",
      css: "always",
      ico: "always",
      svg: "always",
      png: "always",
      jpg: "always",
      gif: "always",
      ttf: "always",
      otf: "always",
    },
  ],

  /**
   * Enforce a convention in module import order.
   *
   * NOTE: patches in simple-import-sort.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
   */
  "import/order": [
    "error",
    {
      groups: [
        ["builtin"],
        ["external"],
        ["internal", "parent", "sibling", "index", "unknown"],
      ],
      "newlines-between": "always-and-inside-groups",
    },
  ],

  /**
   * Enforce a newline after import statements.
   *
   * NOTE: patches in typescript-eslint
   * NOTE: patches as it doesn't work with TypeScript (according to XO)
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
   */
  "import/newline-after-import": [
    "error",
    {
      count: 1,
    },
  ],

  /**
   * Prefer a default export if module exports a single name.
   *
   * NOTES:
   * - Using named exports in packages allows for more flexibility when the
   *   package grows and functionality is added later on. As a result, disable
   *   this rule.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
   */
  "import/prefer-default-export": "off",

  /**
   * Limit the maximum number of dependencies a module can have.
   *
   * NOTES:
   * - Some modules use a lot of dependencies, so either increase this to a
   *   larger number, or disable it completely.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
   */
  "import/max-dependencies": [
    "error",
    {
      max: 40,
    },
  ],

  /**
   * Forbid unassigned imports.
   *
   * NOTES:
   * - We might need to disable this rule completely, if we find that we
   *   continue to use a larger number of unassigned modules.
   * - Sometimes, we import CSS as modules without assigning them a name. So,
   *   disable this rule completely.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
   */
  "import/no-unassigned-import": [
    "off",
    {
      allow: ["core-js/stable", "url-search-params-polyfill"],
    },
  ],

  /**
   * Forbid named default exports.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
   */
  "import/no-named-default": "off",

  /**
   * Forbid default exports.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
   */
  "import/no-default-export": "off",

  /**
   * Forbid named exports.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
   */
  "import/no-named-export": "off",

  /**
   * Forbid anonymous values as default exports,
   *
   * - We default export arrays for action-types, so disable that rule.
   * - We default export arrow funcs so disalbe for that (and anon funcs).
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
   */
  "import/no-anonymous-default-export": [
    "error",
    {
      allowArray: true,
      allowArrowFunction: true,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: true,
    },
  ],

  /**
   * Prefer named exports to be grouped together in a single export
   * declaration.
   *
   * NOTES:
   * - Since we sometimes export functions as we define them throughout a
   *   module, its probably better to disable this rule.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
   */
  "import/group-exports": "off",

  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
   */
  "import/dynamic-import-chunkname": [
    "error",
    {
      importFunctions: [],
      webpackChunknameFormat: "[a-zA-Z0-9-/_]+",
    },
  ],

  /**
   * Ensure imports point to a file/module that can be resolved.
   *
   * NOTES:
   * - patches in typescript-eslint.
   * - According to XO, patches because it doesn't work with TypeScript and
   *   is buggy.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
   */
  "import/no-unresolved": [
    "error",
    {
      commonjs: true,
      amd: false,
    },
  ],

  /**
   * Ensure named imports correspond to a named export in the remote file.
   *
   * NOTE:
   * - patches in typescript-eslint
   * -patches as it doesn't work with TypeScript
   *  (according to XO plugin)
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
   */
  "import/named": "error",

  /**
   * Ensure a default export is present, given a default import.
   *
   * - patches in typscript-eslint.
   * - This causes the parser to do its own parsing and tracking,
   *   so disable this. (recommended by the @typescript-eslint github).
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
   */
  "import/default": "error",

  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   *
   * - patches in typescript-eslint.
   * - This causes the parser to do its own parsing and tracking,
   *   so disable this. (recommended by the @typescript-eslint github).
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
   */
  "import/namespace": [
    "error",
    {
      // Change to true according to XO plugin.
      allowComputed: true,
    },
  ],

  /**
   * Restrict which files can be imported in a given folder.
   *
   * NOTES:
   * - Since we split the frontend bundles into two (client, server) we could
   *   add zones to prevent importing server bundles from client.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
   */
  "import/no-restricted-paths": [
    "off",
    {
      zones: [],
    },
  ],

  /**
   * Forbid import of modules using absolute paths.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
   */
  "import/no-absolute-path": [
    "error",
    {
      esmodule: true,
      commonjs: true,
      amd: true,
    },
  ],

  /**
   * Forbid require() calls with expressions.
   *
   * NOTES:
   * - We use dynamic requires for packages, so disable this rule.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
   */
  "import/no-dynamic-require": "off",

  /**
   * Prevent importing the submodules of other modules.
   *
   * NOTES:
   * - We often import components from subdirectories, we disable this rule.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
   */
  "import/no-internal-modules": [
    "off",
    {
      allow: [],
    },
  ],

  /**
   * Forbid webpack loader syntax in imports.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
   */
  "import/no-webpack-loader-syntax": "error",

  /**
   * Forbid a module from importing itself.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
   */
  "import/no-self-import": "error",

  /**
   * Forbid a module from importing a module with a dependency path back to
   * itself.
   *
   * NOTE: patches in typescript-eslint.
   * NOTE: Enable this when Node.js has ES2015 module support.
   * NOTE: patches according to XO plugin.
   * - Recommended (@typescript-eslint) to only run this at CI/push time to
   *   lessen local performance burden.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
   */
  "import/no-cycle": [
    "error",
    {
      maxDepth: Infinity,
    },
  ],

  /**
   * Prevent unnecessary path segments in import and require statements.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
   */
  "import/no-useless-path-segments": [
    "error",
    {
      noUselessIndex: true,
    },
  ],

  /**
   * Forbid importing modules from parent directories.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
   */
  "import/no-relative-parent-imports": "off",

  /**
   * Report potentially ambiguous parse goal (script vs. module).
   *
   * NOTES:
   * - This gets thrown from our webpack configs, so disable it.
   * - According to XO plugin, enable this when Node.js has ES2015 module
   *   support.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
   */
  "import/unambiguous": "off",

  /**
   * Report CommonJS require calls and module.exports or exports.*.
   *
   * NOTES:
   * - According to XO plugin, enable this when Node.js has ES2015 module
   *   support.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
   */
  "import/no-commonjs": [
    "off",
    {
      allowRequire: true,
      allowPrimitiveModules: true,
    },
  ],

  /**
   * Report AMD require and define calls.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
   */
  "import/no-amd": "error",

  /**
   * No Node.js builtin modules.
   *
   * NOTES:
   * - We might need to disable this rule completely, if we find that we
   *   continue to use a larger number of builtin modules.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
   */
  "import/no-nodejs-modules": [
    "error",
    {
      allow: ["fs", "path", "child_process"],
    },
  ],

  /**
   * Report any invalid exports, i.e. re-export of the same name.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
   */
  "import/export": "error",

  /**
   * Report use of exported name as identifier of default export.
   *
   * This rule doesn't have an equivalent check in TypeScript, so only run
   * them at CI/push time to lessen the local performance burden. (according
   * to @typescript-eslint docs)
   * nOTE: patches in typescript-eslint
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
   */
  "import/no-named-as-default": "error",

  /**
   * Report use of exported name as property of default export.
   *
   * - This causes the parser to do its own parsing and tracking,
   *   so disable this. (recommended by the @typescript-eslint github).
   * - patches in typescript-eslint
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
   */
  "import/no-named-as-default-member": "error",

  /**
   * Report imported names marked with @deprecated documentation tag.
   *
   * NOTE: According to XO plugin, looks useful but is unstable, so disable.
   * - According to @typescript-eslint docs, TypeScript doesn't have an
   *   equivalent check for this, so to lessen local performance burden, this
   *   should only be run at CI/push time.
   * - patches in typescript-eslint.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
   */
  "import/no-deprecated": "error",

  /**
   * Forbid the use of extraneous packages.
   *
   * NOTES:
   * - Since we use devDependencies in tests & webpack, we use the glob
   *   patterns to exclude checking modules in those files.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
   */
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: [
        "babel.config.js",
        ".babelrc",
        ".stylelintrc",
        "stylelint.config.js",
        ".eslintrc.js",
        ".eslintrc.*.js",
        ".eslintrc",
        "jest.*.js",
        "webpack/**/*.js",
        "webpack.*.js",
        "webpack.config.js",
        "webpack.config.dev.js",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.test.js",
        "**/*.test.jsx",
        "__tests__/**/*.ts",
        "__tests__/**/*.tsx",
        "__tests__/**/*.js",
        "__tests__/**/*.jsx",
        "tests/**/*.ts",
        "tests/**/*.tsx",
        "tests/**/*.js",
        "tests/**/*.jsx",
      ],
    },
  ],

  /**
   * Forbid the use of mutable exports with var or let.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
   */
  "import/no-mutable-exports": "error",

  /**
   * Report modules without exports, or exports without matching import in
   * another module.
   *
   * - This rule does not have an equivalent check in TypeScript, so
   *   (@typescript-eslint) recommends only running this check at CI/push time
   *   to lessen the local performance burden.
   * - patches in typescript-eslint.
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
   */
  "import/no-unused-modules": [
    "off",
    {
      unusedExports: true,
      // patches because will throw annoyiung errors in entry points and config
      // files and there isn't an option to ignore those files here..
      missingExports: false,
      //src: [],
      // ignoreExports: [
      // "webpack.config.js",
      // "jest.config.js",
      // "jest.setup.js",
      // "jest.assetTransformer.js",
      // "babel.config.js"
      // ]
      //
    },
  ],
}
