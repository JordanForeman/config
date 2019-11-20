# `@jordanforeman/babel-config`

Shared [`Babel`](https://babeljs.io/) configuration

## Installation

```bash
$ npm i -D @jordanforeman/babel-config --save-exact
```

## Usage

1. Create a `.babelrc` file at the root of your repository
2. Customize your newly created `.babelrc` file to extend `@jordanforeman/babel-config` (like so):

### For Non-Browser NodeJS Applications

```json
{
    "extends": "./node_modules/@jordanforeman/babel-config/babel.config.node.js"
}
```

### For Browser (ReactJS) Applications

```json
{
    "extends": "./node_modules/@jordanforeman/babel-config/babel.config.browser.js"
}
```
