'use strict'

module.exports = {
    extends: 'eslint-config-airbnb-base',
    parser: 'babel-eslint',
    plugins: ['react'],
    env: {
        mocha: true
    },
    rules: {
        'import/prefer-default-export': 0,
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'one-var': ['error', {
            'let': 'consecutive',
            'const': 'never'
        }]
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    }
};
