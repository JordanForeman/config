'use strict'

module.exports = {
    extends: 'eslint-config-airbnb-base',
    parser: 'babel-eslint',
    env: {
        mocha: true
    },
    rules: {
        'import/prefer-default-export': 0,
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'one-var': ['error', {
            'let': 'consecutive',
            'const': 'never'
        }]
    }
};
