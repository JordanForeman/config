# `@jordanforeman/nyc-config`

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/@jordanforeman/nyc-config" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@jordanforeman/nyc-config.svg" alt="NPM version" /></a></span>

Shared [`Istanbul`](https://github.com/istanbuljs) configuration

## Installation

```bash
$ npm i -D @jordanforeman/nyc-config --save-exact
```

## Usage

1. Create a `.nycrc` file at the root of your repository
2. Customize your newly created `.nycrc` file to extend `@jordanforeman/nyc-config` (like so):

```json
{
    "nyc": {
        "extends": "@jordanforeman/nyc-config"
    }
}
```
