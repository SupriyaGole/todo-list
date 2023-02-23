module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  root: true,
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["react-hooks", "simple-import-sort", "import"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      experimentalDecorators: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    "react/display-name": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "simple-import-sort/imports": [
      "error",
      {
        // The default grouping, but with type imports first as a separate group.
        groups: [["^react$"], ["^\\u0000"], ["^@?\\w"], ["^"], ["^\\."]],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  overrides: [
    {
      files: ["./**/**/*.js"],
      rules: {
        // Allow require statement for all JS files
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
