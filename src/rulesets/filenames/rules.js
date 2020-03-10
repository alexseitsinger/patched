module.exports = {
  /**
   * A rule to enforce a certain file naming convention using a regular
   * expression.
   *
   * This convention can be configured using a regular expression (the
   * default is camelCase.js). Additionally, exporting files can be ignored
   * with a second configuratoin parameter.
   */
  "filenames/match-regex": ["error", "^[a-z-]+$", true],

  /**
   * Match the filename against the default exported value in the module.
   * Files that don't have a default export will be ignored. THe exports of
   * index.js are matched against their parent directoru.
   *
   * Add one or multiple transforms (an array)  to allow for multiple naming
   * convention policies.
   *
   * ie: null, kebab, snake, camel, pascal
   *
   * If you prefer to use suffixes for files, use a second transformation
   * parameter to allow us to remove parts of a filename (matching a regex
   * pattern) before transforming and matching against the export.
   *
   * ie: ["error", null, "\\.react$"]
   *
   *     export default function variableName
   *
   *     Would throw an error if file isnt named:
   *     1. variableName.react.js
   *     2. variableName.js
   *     3. variableName/index.js
   *
   * If you also want to match func calls, you can use the third option:  a
   * boolean flag.
   *
   * ie: ["error", null, null, true]
   *
   *     export default functionName()
   *
   *     Would only be considered a problem if file isn't named:
   *     1. functionName.js
   *     2. function-name/index.js
   */
  "filenames/match-exported": ["error", null, null, false],

  /**
   * Having a bunch of index.js files can have negative influence on developer
   * experience, eg: when opening files by name. When enabling this rule,
   * index.js files will always be considered a problem.
   *
   * NOTE: We often organize our modules within directories, and reference them
   *       by the directory name. This means the contained index file get
   *       automatically used as the import target. Therefore, disable this rule.
   */
  "filenames/no-index": "off",
}
