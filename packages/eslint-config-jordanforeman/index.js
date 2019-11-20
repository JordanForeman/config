'use strict'

module.exports = {
    extends: 'eslint-config-airbnb-base',
    env: {
        mocha: true
    },
    rules: {
        'import/prefer-default-export': 0,
        indent: ['error', 4]
    }
};
