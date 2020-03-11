# Patched

Comprehensive and opinionated linter and formatter *(it's just an [ESLint](https://github.com/eslint/eslint) wrapper)*

*(Inspired by the convenience of [XO](https://github.com/xojs/xo), the [criticism](https://www.freebsd.org/doc/en/books/faq/misc.html#bikeshed-painting) from
[FreeBSD](https://www.freebsd.org) via [Standard](https://github.com/standard/standard), and more...)*

After compiling a large number of [eslint configs](https://github.com/alexseitsinger/patched-rulesets/tree/master/src/plugins) for the many
plugins that I try to use, it seemed like a good idea to just bundle them all up together to make things easier. As such,
[Patched](https://github.com/alexseitsinger/patched) was created!

I haven't written any tests, yet. However, things appear to be functional thus far. That means this is currently a ***WORK IN PROGRESS***.

The goal for [Patched](https://github.com/alexseitsinger/patched), like the other fantastic linters & formatters, is to simplify
the very importing linting process by making it:
- ***easier***: By not requiring any configuration or plugins to install
- ***smarter***: By detecting features and correctly loading the appropriate rules (and any patches) on it's own).

## Installation

```javascript
yarn add patched
```

## Highlights

1. Since many plugins often compliment or conflict with eachother, [Patched](https://github.com/alexseitsinger/patched) uses
   predefined plugin groups *(based on language, framework, etc.)* to load plugins, rather than specifying any plugins
   individually.
4. Plugin groups are automatically determined at runtime by testing for some simple criteria *(eg: file extension, source code
   content, dependency existence, etc.)*
2. Each plugin used has its own [ruleset](https://github.com/alexseitsinger/patched-rulesets/tree/master/src/plugins) loaded which each contain:
  - `rules`: The default rules to apply for the plugin *(as if it were the only rules used)*.
  - `patches`: A collection of rules to apply to other plugin's because their rules conflict with ours.
  - `options`: Any additional options that may need to be included within the final `eslint config`. (ie: `tsconfigRootDir`, `project`, `import/resolver`, etc.)
3. Plugins are always loaded in the same order, and the final config is generated in 3 stages to ensure the rules used are
   always what's expected.
  - Load the rulesets for each plugin.
  - Apply the rules for each plugin *(in order)*
  - Find & apply any patches *(from any sibling rulesets)*.

## Summary

Name                     | Value
---                      | ---
space type               | space
space size               | 2
if/else style            | stroustrup
semi                     | prefer ASI, except for `;((){ })`
quotes                   | double
quote props              | when necessary
line length              | 88 (Hi, [Black!](https://github.com/psf/black))

## Integrations

1. [coc.nvim](https://github.com/neoclide/coc.nvim): Forking [coc-eslint](https://github.com/neoclide/coc-eslint) was simple
   enough, so patched integration will be available soon.
