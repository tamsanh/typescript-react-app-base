module.exports = {
  root: true,
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {},
  rules: {
    "react/prop-types": 0,
    "react/display-name": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
};

