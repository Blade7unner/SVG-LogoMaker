module.exports = {
  transform: {},
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'mjs', 'json', 'node'],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
    "**/?(*.)+(spec|test).mjs" 
  ],
  extensionsToTreatAsEsm: ['.cjs'],
  testRunner: "jest-cjs-runner", 
};
