module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "@sspaeshop/shopping-service": "<rootDir>/__mocks__/shopping-service.mock.js"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
