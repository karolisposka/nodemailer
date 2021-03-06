module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: ["error", "double"],
    // "linebreak-style": [
    //   "error",
    //   process.platform === "win32" ? "windows" : "unix",
    // ],
    parser: "off",
  },
};
