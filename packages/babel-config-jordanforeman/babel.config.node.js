const common = require('./common');

module.exports = {
    presets: [
        ['@babel/env', {
            targets: {
                node: 'current'
            }
        }]
    ],
    plugins: common.plugins,
    env: common.env
};
