module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: "standard",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: 0,
    "comma-dangle": 0,
    semi: 0,
    camelcase: 0,
    "space-before-function-paren": 0,
  },
};
