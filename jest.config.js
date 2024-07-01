module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js','@testing-library/jest-dom/extend-expect'],
    testEnvironment: 'jsdom',
  };
  