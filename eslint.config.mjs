import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^\\u0000'],
            ['^react', '^@\\w', '^@?\\w', '^'],
            ['^(@|store|api|hooks|utils|constants|icons)(/.*|$)'],
            ['^\\./(?=.*/)(?!/?&)', '^\\.(?!/?$)', '^\\./?$'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^.+\\./styles.ts$'],
          ],
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
