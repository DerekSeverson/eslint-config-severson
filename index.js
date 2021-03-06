'use strict';

exports = module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "rules": {

    // Strict Mode

    "strict": [2, "global"],

    // Stylistic Issues

    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs"],
    "camelcase": 0,
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": [2, "never"],
    "consistent-this": [2, "self"],
    "eol-last": 0,
    "func-call-spacing": [2, "never"],
    "func-name-matching": 0,
    "func-names": 0,
    "func-style": 0,
    "indent": [2, 2, {
      "SwitchCase": 1
    }],
    "key-spacing": 2,
    "keyword-spacing": 2,
    "linebreak-style": [2, "unix"],
    "lines-around-comment": 0,
    "max-params": 2,
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false,
      "properties": true
    }],
    "new-parens": 0,
    "newline-after-var": 0,
    "newline-before-return": 0,
    "newline-per-chained-call": 2,
    "no-array-constructor": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-new-object": 2,
    "no-nested-ternary": 2,
    "no-tabs": 2,
    "no-ternary": 0,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "nonblock-statement-body-position": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": [2, "always"],
    "object-property-newline": 0,
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "operator-linebreak": 2,
    "padded-blocks": 0,
    "quote-props": 0,
    "quotes": [2, "single", "avoid-escape"],
    "semi": 2,
    "semi-spacing": 2,
    "sort-keys": 0,
    "sort-vars": 0,
    "space-before-blocks": 0,
    "space-before-function-paren": [2, {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": [2, "never"],
    "wrap-regex": 0,

    // ECMAScript 6

    "arrow-body-style": 0,
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "constructor-super": 2,
    "generator-star-spacing": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-new-symbol": 2,
    "no-this-before-super": 2,
    "no-useless-constructor": 1,
    "no-var": 2,
    "object-shorthand": [2, "properties"],
    "prefer-arrow-callback": 0,
    "prefer-const": 0,
    "prefer-destructuring": 0,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 0,
    "require-yield": 1,
    "rest-spread-spacing": [2, "never"],
    "symbol-description": 2,
    "template-curly-spacing": 0,
    "yield-star-spacing": 2,

    // Node.js and CommonJS

    "callback-return": 1,
    "global-require": 1,
    "handle-callback-err": 1,
    "no-mixed-requires": 0,
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-env": 0,
    "no-process-exit": 2,
    "no-sync": 1,

    // Possible Errors

    "no-await-in-loop": 2,
    "no-compare-neg-zero": 2,
    "no-console": 1,
    "no-debugger": 1,
    "no-template-curly-in-string": 1,

    // Variables

    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow": 0,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "none"
    }],
    "no-use-before-define": [2, "nofunc"],


    // Best Practices

    "array-callback-return": 1,
    "block-scoped-var": 1,
    "curly": [2, "multi-line", "consistent"],
    "default-case": 2,
    "dot-location": [2, "property"],
    "eqeqeq": [2, "smart"],
    "guard-for-in": 1,
    "no-caller": 2,
    "no-eval": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-str": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-proto": 2,
    "no-throw-literal": 2,
    "no-with": 2,
    "prefer-promise-reject-errors": 2,
    "require-await": 0,
    "vars-on-top": 1,
    "wrap-iife": [2, "any"],
    "yoda": 0
  }
};
