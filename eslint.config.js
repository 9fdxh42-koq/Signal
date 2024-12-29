const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  {
    languageOptions: {
      globals: Object.assign({}, globals.node), 
    },
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
    rules: {
      "no-unused-vars": "warn",
    },
  },
  pluginJs.configs.recommended,
];