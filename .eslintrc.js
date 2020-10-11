module.exports = {
  extends: [
    'alloy',
    'alloy/typescript'
  ],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': ["error", {
      "variables": false,
      "functions": false,
      "classes": false
    }]
  }
}