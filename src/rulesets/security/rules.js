module.exports = {
  // Locates potentially unsafe regular expressions, which may take a very long
  // time to run, blocking the event loop.
  //
  // https://github.com/nodesecurity/eslint-plugin-security/blob/master/docs/regular-expression-dos-and-node.md
  "security/detect-unsafe-regex": "error",

  // Detects calls to buffer with noAssert flag set
  //
  // From the Node.js API docs: "Setting noAssert to true skips validation of
  // the offset. This allows the offset to be beyond the end of the Buffer."
  "security/detect-buffer-noassert": "error",

  // Detects instances of child_process & non-literal exec()
  //
  // https://github.com/nodesecurity/eslint-plugin-security/blob/master/docs/avoid-command-injection-node.md
  "security/detect-child-process": "error",

  // Detects object.escapeMarkup = false, which can be used with some template
  // engines to disable escaping of HTML entities. This can lead to Cross-Site
  // Scripting (XSS) vulnerabilities.
  //
  // https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)
  "security/detect-disable-mustache-escape": "error",

  // Detects eval(variable) which can allow an attacker to run arbitary code
  // inside your process.
  //
  // http://security.stackexchange.com/questions/94017/what-are-the-security-issues-with-eval-in-javascript
  "security/detect-eval-with-expression": "error",

  // Detects Express csrf middleware setup before method-override middleware.
  // This can allow GET requests (which are not checked by csrf) to turn into
  // POST requests later.
  //
  // https://github.com/nodesecurity/eslint-plugin-security/blob/master/docs/bypass-connect-csrf-protection-by-abusing.md
  "security/detect-no-csrf-before-method-override": "error",

  // Detects variable in filename argument of fs calls, which might allow an
  // attacker to access anything on your system.
  // https://www.owasp.org/index.php/Path_Traversal
  "security/detect-non-literal-fs-filename": "error",

  // Detects RegExp(variable), which might allow an attacker to DOS your server
  // with a long-running regular expression.
  // https://github.com/nodesecurity/eslint-plugin-security/blob/master/docs/regular-expression-dos-and-node.md
  "security/detect-non-literal-regexp": "error",

  // Detects require(variable), which might allow an attacker to load and run
  // arbitrary code, or access arbitrary files on disk.
  //
  // http://www.bennadel.com/blog/2169-where-does-node-js-and-require-look-for-modules.htm
  "security/detect-non-literal-require": "error",

  // Detects variable[key] as a left- or right-hand assignment operand.
  // https://github.com/nodesecurity/eslint-plugin-security/blob/master/docs/the-dangers-of-square-bracket-notation.md
  "security/detect-object-injection": "error",

  // Detects insecure comparisons (==, !=, !== and ===), which check input
  // sequentially.
  // https://snyk.io/blog/node-js-timing-attack-ccc-ctf/
  "security/detect-possible-timing-attacks": "error",

  // Detects if pseudoRandomBytes() is in use, which might not give you the
  // randomness you need and expect.
  // http://stackoverflow.com/questions/18130254/randombytes-vs-pseudorandombytes
  "security/detect-pseudoRandomBytes": "error",
}
