module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    // semi: ['error', 'never'],
    'no-console': 0,
    // 'linebreak-style': ['error', 'unix'],
    'linebreak-style': ['error', 'windows'],
  },

};
