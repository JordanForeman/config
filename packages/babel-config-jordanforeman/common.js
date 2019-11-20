module.exports = {
    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-function-bind',
    ],
    env: {
        coverage: {
            plugins: ['istanbul']
        }
    }
};
