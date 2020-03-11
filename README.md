# QT

Comprehensive and opnionated linter and formatter. Inspired by the fantastic [XO](https://github.com/xojs/xo) and [Standard](https://github.com/standard/standard), among others.

This was created simply because I got tired of manually installing all the eslint plugins that I use in each of my packages (and the related config files).

Things should work, but it's still a work-in-progress.

## Installation

```javascript
yarn add qt
```

## Features

1. Generates the configuration using plugin groups.
2. Each plugin has a [ruleset](https://github.com/alexseitsinger/qt-rulesets) which includes it's rules, a collection of patches to apply to other plugin's rules, and the options to include
(ie: project: './tsconfig.json' in parserOptions, etc.)
3. Detects the plugins (groups) to use automatically based on some basic criteria (file extensions, source code content, dependency existence, etc.)
4. I probably forgot some stuff, so this will be updated later.

## Rule Summary
space type               | space
space size               | 2
if/else style            | stroustrup
semi                     | prefer ASI, except for `;((){ })`
quotes                   | double
quote props              | when necessary
line length              | 88
implicit arrow linebreak | off

## Integrations

1. [coc.nvim](https://github.com/neoclide/coc.nvim): Forking [coc-eslint](https://github.com/neoclide/coc-eslint) was simple enough, so qt integration will be available soon.

