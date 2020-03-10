module.exports = {
  // The Emotion 10 codemods are contained in this package. To use them,
  // enable the rule shown below.
  "@emotion/pkg-renaming": "error",

  // The Emotion 10 codemods are contained in this package. To use them,
  // enable the rules shown below. Keeping these rules after migrating is also
  // useful to have jsx from @emotion/react automatically imported when the css prop
  // is used and other such things. You may also want to not enable certain rules
  // while you are migrating or forever, such the no-vanilla rule. NOTE: These rules
  // assume you are using React, if you are not using React, you should keep
  // using the emotion package.
  "@emotion/jsx-import": "error",
  "@emotion/no-vanilla": "error",
  "@emotion/import-from-emotion": "error",
  "@emotion/styled-import": "error",
}
