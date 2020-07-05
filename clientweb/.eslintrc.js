module.exports = {
  parser: '@typescript-eslint/parser',
  extends: 'react-app',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended']
};
