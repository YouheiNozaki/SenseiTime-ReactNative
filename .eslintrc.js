module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  root: true,
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "@react-native-community",
    "plugin:react-native/all",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "react-native", "@typescript-eslint", "jest"],
  rules: {
    "no-console": "warn",
    yoda: "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-native/no-raw-text": "off",
    "react-native/sort-styles": "off",
  },
};
