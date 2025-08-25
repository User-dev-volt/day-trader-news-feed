module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^shared-types$': '<rootDir>/../../packages/shared-types/src',
  },
};