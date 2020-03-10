module.exports = {
  "spellcheck/spell-checker": [
    "error",
    {
      comments: true,
      // Since this checked template string, we should siable it.
      strings: false,
      // Idenfifiers are rarely strictly english words, so disable it.
      identifiers: false,
      lang: "en_US",
      skipWords: ["hunspellchecker", "hunspell"],
      skipIfMatch: [
        // URL's
        "http://[^s]*",
        // MIME-types
        "^[-\\w]+/[-\\w\\.]+$",
      ],
      skipWordIfMatch: [],
      minLength: 3,
    },
  ],
}
