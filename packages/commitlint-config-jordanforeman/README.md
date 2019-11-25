# `@jordanforeman/commitlint-config`

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@jordanforeman/commitlint-config" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@jordanforeman/commitlint-config.svg" alt="NPM version" /></a></span>

Shared [`commitlint`](https://commitlint.js.org/#/) configuration

## Installation

```bash
$ npm i -D @jordanforeman/commitlint-config --save-exact
```

## Usage

1. Create a `commitlint.config.js` file at the root of your repository
2. Customize your newly created `commitlint.config.js` file to extend `@jordanforeman/commitlint-config` (like so):

```js
module.exports = {
    extends: ['@jordanforeman/commitlint-config']
};
```
