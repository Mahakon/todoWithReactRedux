module.exports = function (wallaby) {
    return {
        files: [
            'src/scripts/**/*.js?(x)',
            './jest.config.js',
            '!src/scripts/**/__tests__/**/*.test.js'
        ],
        tests: [
            './src/scripts/__tests__/**/*.test.js'
        ],

        env: {
             type: 'node',
             runner: 'node'
            //kind: "chrome"
        },

        compilers: {
            '**/*.js?(x)': wallaby.compilers.babel({
                babel: require('babel-core'),
                presets: ['es2015', 'react'],
                plugins: ['transform-react-jsx']
            })
        },

        testFramework: 'jest',

        setup: function (wallaby) {
            var jestConfig = require('./jest.config.js');
            wallaby.testFramework.configure(jestConfig);
        },

        debug: true
    };
};