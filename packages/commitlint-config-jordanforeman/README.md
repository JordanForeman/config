# `@jordanforeman/commitlint-config`

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
