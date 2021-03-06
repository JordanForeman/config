'use strict';

module.exports = {
    "branch": "master",
    "plugins": [
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/github",
        "@semantic-release/npm",
        ["@semantic-release/git", {
            assets: ["package.json"],
            message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }]
    ]
}
