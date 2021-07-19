module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'lcov',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,
  testEnvironment: 'node',
  transformIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/packages/.*/lib/',
  ],
  verbose: true,
}
