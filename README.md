# QT (Make your ecmascript a cutie!)

Comprehensive and opinionated wrapper for eslint.

No .eslintrc required.

Uses a .qtrc.js to enable plugin groups.

## Installation

```javascript
yarn add qt
```

## Summary of rules

space type               | space
space size               | 2
if/else style            | stroustrup
semi                     | prefer ASI, except for `;((){ })`
quotes                   | double
quote props              | when necessary
line length              | 88
implicit arrow linebreak | off

## Plugin Groups



## Inspiration

This project was heavily inspired by the fantastic XOJS project. However, since the rules I use differ from their
defaults, I decided to simply put a plugin together. After accumulating a large number of eslint configs for dozens of
plugins, I decided it was time to combine them into a single plugin to make using them easier.



