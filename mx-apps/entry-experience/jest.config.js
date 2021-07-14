module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "@sspaeshop/entry-service": "<rootDir>/__mocks__/entry-service.mock.js"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
