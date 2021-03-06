'use strict'

module.exports = {
    hooks: {
        'prepare-commit-msg': 'exec < /dev/tty && npx git-cz --hook || true',
        'commit-msg': 'npx commitlint -E HUSKY_GIT_PARAMS'
    }
};
