// root: true

// parserOptions:
// ecmaVersion: 2018
// sourceType: "module"

// env:
// es2017: true
// browser: true

// globals:
// _: readonly
// L: readonly
// noUiSlider: readonly
// extends: "htmlacademy/vanilla"

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'htmlacademy/vanilla'
  ],
  rules: {
    'semi': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off',
    'require-jsdoc': 'off',
    'max-len': 'off',
    'object-curly-spacing': 'off',
  }
}
