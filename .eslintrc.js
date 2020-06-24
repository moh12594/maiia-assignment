module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          "**/*.stories.tsx",
          "**/*.spec.tsx",
        ]
      }
    ],
  }
};
