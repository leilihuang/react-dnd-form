module.exports = {
  extends: "react-app",
  plugins: ["prettier", "react"],
  rules: {
    "prettier/prettier": "error",
    "jsx-a11y/anchor-is-valid": "off",
    "no-script-url": "off",
    "jsx-a11y/alt-text": "off",
    eqeqeq: "off",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  globals: {
    EWMURL: false,
  },
};
