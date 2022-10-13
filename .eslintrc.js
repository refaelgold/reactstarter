module.exports = {
  root: true,
  extends: 'react-app',
  plugins: ['import'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 0,
        'quotes': [1, 'single', 'avoid-escape'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-duplicate-imports': 'error',
        'no-const-assign': 'error',
        'no-var': 'error',
        'no-multiple-empty-lines': 'error',
        'sort-imports': [
          'warn', {
            'ignoreCase': true,
            'ignoreDeclarationSort': true,
          },
        ],
        'import/order': [
          'warn', {
            'groups': ['builtin', 'external', 'internal'],
            'pathGroups': [
              {
                'pattern': 'react*',
                'group': 'external',
                'position': 'before',
              },
              {
                'pattern': '@*',
                'group': 'external',
                'position': 'after',
              },
              {
                'pattern': '@*/**',
                'group': 'external',
                'position': 'after',
              },
              {
                'pattern': 'assets/**',
                'group': 'internal',
                'position': 'after',
              },
            ],
            'pathGroupsExcludedImportTypes': [],
            'alphabetize': {
              'order': 'asc',
              'caseInsensitive': true,
            },
          },
        ],
      },
    },
  ],
};
