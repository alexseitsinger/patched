/**
 * https://github.com/bryanrsmith/eslint-plugin-sort-class-members
 */

module.exports = {
  "sort-class-members/sort-class-members": [
    "error",
    {
      /**
       * Used to specify the expected sort order of class members.
       */
      order: [
        "[static-properties]",
        "[conventional-private-properties]",
        "[properties]",
        "constructor",
        "[static-methods]",
        //"[getters]",
        //"[setters]",
        //"[accessor-pairs]",
        "[conventional-private-methods]",
        "[event-handlers]",
        "[async-methods]"
        "[arrow-function-properties]"
        //"[methods]",
        "[everything-else]",
      ],
      /**
       * May optionally be used to created customized named groups of members so
       * that order can be more easily maintained. Groups can be referenced by
       * name by using square brackets. E.g., "[group-name]".
       */
      groups: {
        "event-handlers": [{ name: "/on.+/", type: "method" }],
        // ...
      },
      /**
       * Used to specify the required positioning of get/set pairs. Available
       * values: getThenSet, setThenGet, together, any.
       */
      accessorPairPositioning: "getThenSet",
      /**
       * Only report the first sort problem in each class (plus the number of
       * problems found). Useful if you only want to know that the class has
       * sort problems without spamming error messages. The default is false.
       *
       * Members can be matched to positional slots using several criteria,
       * including name (exact match or regexp), member type (method or
       * property), and whether or not the member is static. Each match slot is
       * described by an object with six properties, all of which are optional.
       */
      stopAfterFirstProblem: false,
    },
  ],
}
