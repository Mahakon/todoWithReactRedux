module.exports = {
    setupFiles: [
        "./src/scripts/__tests__/global.js",
        "./src/scripts/__tests__/__setups__/localStorage.js"
    ],
    modulePathIgnorePatterns: [
        "global.js",
        "localStorage.js"
    ]
};