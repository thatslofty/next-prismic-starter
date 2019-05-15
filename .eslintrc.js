module.exports = {
  "extends": "prettier",
  "parser": "babel-eslint",
  "plugins": [
    "prettier",
    "react",
    "import"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "prettier/prettier": "error"
  },
  "env": {
    "es6": true,
    "node": true
  },
};
