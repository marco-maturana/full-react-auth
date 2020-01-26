module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb-typescript"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-one-expression-per-line": "off",
        "comma-dangle": ["error", "never"],
        "spaced-comment": ["error", "always", {
            "line": { "markers": ["*package", "!", "/", ","] },
            "block": { "balanced": true, "markers": ["*package", "!", ","], "exceptions": ["*"] }
        }],
    }
};