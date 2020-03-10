/**
 * NOTE:
 * This config should be placed AFTER 'eslint' config since it patches rules
 * from that config.
 */

module.exports = {
  /**
   * Require top-level properties to be in a conventional order ("name"first,
   * etc.).
   *
   * Pass an array of top-level package properties to lint sorting on only those
   * properties. All properties not in this collection will be ignored.
   *
   * (Fixable).
   */
  "package-json/order-properties": [
    "error",
    [
      "name",
      "version",
      "description",
      "author",
      "license",
      "repository",
      "homepage",
      "bugs",
      "main",
      "bin",
      "types",
      "files",
      "directories",
      "scripts",
      "dependencies",
      "devDependencies",
      "peerDependencies",
      "optionalDependencies",
      "bundledDependencies",
      "keywords",
      "engines",
      "man",
      "os",
      "cpu",
      "browser",
      "config",
      "publishConfig",
      "private",
    ],
  ],

  /**
   * Keep sub-collections like "dependencies" and "scripts" in alphabetical
   * order.
   *
   * Pass an array of top-level package properties to lint sorting on those
   * collections. All of their values must be objects.
   *
   * (Fixable).
   */
  "package-json/sort-collections": [
    "error",
    [
      "bin",
      "engines",
      "dependencies",
      "devDependencies",
      "peerDependencies",
      "optionalDependencies",
      "scripts",
      "config",
    ],
  ],

  /**
   * Validate package.json files against the NPM specification.
   */
  "package-json/valid-package-def": "off",
}
