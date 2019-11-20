const common = require('./common');

module.exports = {
    presets: [
        '@babel/env',
        '@babel/react'
    ],
    plugins: common.plugins,
    env: common.env
};
