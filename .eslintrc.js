module.exports = {
  plugins: ["prettier"],
  extends: ["eslint:recommended", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 11,
    requireConfigFile: false,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "no-debugger": 2,
    "no-alert": 2,
    "no-await-in-loop": 0,
    "no-prototype-builtins": 0,
    "no-return-assign": ["error", "except-parens"],
    "no-restricted-syntax": [
      2,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "comma-dangle": [
      "off",
      {
        arrays: "always",
        objects: "always",
        imports: "always",
        exports: "always",
        functions: "always",
      },
    ],
    "no-unused-vars": [
      0,
      {
        ignoreSiblings: true,
        argsIgnorePattern: "React|res|next|^_",
      },
    ],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "no-unused-expressions": [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    "no-console": 1,
    "jsx-quotes": [2, "prefer-double"],
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": [
      "off",
      {
        trailingComma: "all",
        doubleQuote: true,
        printWidth: 80,
      },
    ],
  },
};
