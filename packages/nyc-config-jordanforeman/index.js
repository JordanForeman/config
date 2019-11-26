module.exports = {
    exclude: [
        'test',
        'lib'
    ],
    require: ['@babel/register'],
    sourceMap: false,
    instrument: false,
    lines: 100,
    statements: 100,
    functions: 100,
    branches: 100
};
