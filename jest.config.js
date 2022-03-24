const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

module.exports = {
  modulePaths: ['<rootDir>/src'],
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/config/setupTest.js'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    ...pathsToModuleNameMapper(compilerOptions.paths),
    '\\.(css|less|sass|scss)$': '<rootDir>/jest.style__mocks__.js',
  },
  moduleDirectories: ['node_modules', 'src'],
};
