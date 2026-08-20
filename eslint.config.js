// @ts-check
const { defineConfig } = require('eslint/config');
const angular = require('angular-eslint');

module.exports = defineConfig([
  {
    ignores: ['dist/**', 'coverage/**'],
  },
  {
    files: ['projects/**/*.ts'],
    extends: [angular.configs.tsRecommended],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/no-empty-lifecycle-method': 'off',
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'demo',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'demo',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['projects/**/*.html'],
    extends: [angular.configs.templateRecommended],
    rules: {},
  },
  {
    files: ['projects/elements/**/*.ts'],
    rules: {
      '@angular-eslint/no-input-rename': 'off',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'ax',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ax',
          style: 'kebab-case',
        },
      ],
    },
  },
]);
