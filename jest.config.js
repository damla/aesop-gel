module.exports = {
  roots: ['src'],
  moduleDirectories: ['node_modules', 'src'],
  unmockedModulePathPatterns: ['react'],
  testURL: 'http://localhost/',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    __TEST__: true,
  },
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/(dist|docs|node_modules)/'],
};
