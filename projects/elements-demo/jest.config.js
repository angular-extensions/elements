module.exports = {
  bail: true,
  resetModules: true,
  displayName: 'elements-demo',
  cacheDirectory: '<rootDir>/.cache',
  coverageDirectory: '<rootDir>/coverage/elements-demo',
  coverageReporters: ['json', 'lcovonly', 'text', 'html'],
  testMatch: ['<rootDir>/projects/elements-demo/**/*.spec.ts'],
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/elements-demo/tsconfig.spec.json',
    },
  },
};
