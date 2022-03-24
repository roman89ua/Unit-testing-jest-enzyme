module.exports = {
  modulePaths: ['<rootDir>/src'],
  roots: ['<rootDir>/src'],
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
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'src'],
};
