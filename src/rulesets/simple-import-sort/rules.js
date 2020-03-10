// simple-import-sort plugin

/**
 * NOTE:
 * This config shuld be listed AFTER 'import' and 'eslint' because it patches
 * rules from those configs.
 */

const projectDirs = "^([sS]rc|[aA]pp|[cC]ore|[sS]ite|[pP]ages|[tT]ests)(/.*|$)"
const reactHotLoader = "^react-hot-loader(/root)?$"
const builtins = [
  "assert",
  "buffer",
  "child_process",
  "cluster",
  "console",
  "constants",
  "crypto",
  "dgram",
  "dns",
  "domain",
  "events",
  "fs",
  "https",
  "module",
  "net",
  "os",
  "path",
  "punycode",
  "querystring",
  "readline",
  "repl",
  "stream",
  "string_decoder",
  "sys",
  "timers",
  "tls",
  "tty",
  "url",
  "util",
  "vm",
  "zlib",
  "freelist",
  "v8",
  "process",
  "async_hooks",
  "http2",
  "perf_hooks",
]

module.exports = {
  "simple-import-sort/sort": [
    "error",
    {
      groups: [
        // Make sure out polyfills are always imported first.
        // Side effect imports.
        ["^\\u0000"],

        // Node.js builtins. You could also generate this regex if you use a `.js` config.
        // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
        [`^(${builtins.join("|")})(/.*|$)`],

        // React hot loader shoudl always be imported before react since it
        // patches it.
        [reactHotLoader],

        // Packages. `react` related packages come first.
        [`^react(?!${reactHotLoader})`, "^prop-types", "^@?\\w"],

        // Internal packages.
        [projectDirs],

        // Other relative imports. Put same-folder imports and `.` last.
        [("^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$")],

        // Parent imports. Put `..` last.
        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

        // Misc imports.
        ["^.+\\.(s?css|json|png|jpe?g|gif|ico)$"],
      ],
    },
  ],
}
