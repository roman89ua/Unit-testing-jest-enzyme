module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['import', 'react', '@typescript-eslint'],
  extends: ['airbnb-typescript'],
  rules: {
    'linebreak-style': 'off',
    radix: 'warn',
    'max-len': [
      'warn',
      {
        code: 120,
      },
    ],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*test.ts', '**/*test.tsx', '**/*spec.ts', '**/*spec.tsx'] },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['.eslintrc.js'],
};
