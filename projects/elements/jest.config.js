module.exports = {
  bail: true,
  resetModules: true,
  displayName: '@angular-extensions/elements',
  cacheDirectory: '<rootDir>/.cache',
  coverageDirectory: '<rootDir>/coverage/elements',
  coverageReporters: ['json', 'lcovonly', 'text', 'html'],
  testMatch: ['<rootDir>/projects/elements/**/*.spec.ts'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/elements/tsconfig.spec.json',
    },
  },
};
