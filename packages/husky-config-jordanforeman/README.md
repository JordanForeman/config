# `@jordanforeman/husky-config`

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@jordanforeman/husky-config" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@jordanforeman/husky-config.svg" alt="NPM version" /></a></span>

Shared [`husky`](https://github.com/typicode/husky) configuration

## Installation

```bash
$ npm i -D @jordanforeman/eslint-config --save-exact
```

## Usage

1. Create a `.huskyrc.js` file at the root of your repository
2. Customize your newly created `.huskyrc.js` file to extend `@jordanforeman/husky-config` (like so):

```js
module.exports = require('node_modules/@jordanforeman/husky-config');
```
