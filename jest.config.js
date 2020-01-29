require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  // transform: {
  //   '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  roots: ['src'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    'src/(.*)': '<rootDir>/src/$1',
    '^~(.*)$': '<rootDir>/src$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [`<rootDir>/(dist|docs|node_modules|.cache)/`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
    __TEST__: true,
  },
  testURL: `http://localhost`,
  // setupFiles: [`<rootDir>/loadershim.js`],
  unmockedModulePathPatterns: ['react'],
};
