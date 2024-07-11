export default {
  preset: 'jest-preset-angular/presets/defaults-esm',
  // globalSetup: 'jest-preset-angular/global-setup.mjs',
  extensionsToTreatAsEsm: ['.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|js|html)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    tslib: 'tslib/tslib.es6.js',
    '^rxjs(/operators$)?$':
      '<rootDir>../../node_modules/rxjs/dist/bundles/rxjs.umd.js',
    '^rxjs/testing$':
      '<rootDir>../../node_modules/rxjs/dist/cjs/testing/index.js',
  },

  // perf (you might try various options based on the available cores)
  maxWorkers: '8',

  // other
  displayName: '@angular-extensions/elements',
  cacheDirectory: '<rootDir>../../.jest-cache',
  coverageDirectory: '<rootDir>/coverage/elements',
  coverageReporters: ['json', 'lcovonly', 'text', 'html'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
};
