import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  // Config for JS files
  {
    ...eslint.configs.recommended,
    files: ['packages/**/*.js']
  },
  // Config for TS files
  ...[
    eslint.configs.recommended,
    ...tseslint.configs.recommended
  ].map(conf => ({
    ...conf,
    files: ['packages/**/*.ts']
  })),
  // Rule overrides
  {
    rules: {
      'semi': ['warn', 'never'],
      'no-redeclare': 0,
      'valid-jsdoc': 0,
      'no-undef': 0,
      'no-constant-condition': 0,
      'no-case-declarations': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/ban-ts-comment': 0
    }
  },
  // Global ignores
  {
    ignores: [
      '**/*.d.ts',
      '**/*.js.flow',
      '**/node_modules/',
      '**/dist/',
      '**/coverage/',
      'flow-typed/',
      'tests/',
      'packages/prebuilt-tdlib/index.js',
    ]
  },
]
