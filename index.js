module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
