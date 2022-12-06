module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "^.+\\.svg$": "jest-transform-stub"
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
