'use strict';

const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:import/errors', 'prettier', 'prettier/react', 'prettier/flowtype', 'plugin:flowtype/recommended'],
  plugins: ['react', 'prettier', 'flowtype', 'import'],
  rules: {
    quotes: [ERROR, 'single'],
    'react/jsx-filename-extension': [WARN, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'no-console': WARN,
    'prettier/prettier': [
      "error",
      {
        'semi': false,
        'singleQuote': true,
        'tabWidth': 2,
        'bracketSpacing': true,
        'trailingComma': 'es5'
      }
    ]
  },
  parserOptions: {
    sourceType: 'module'
  }
};
