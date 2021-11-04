module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', 'airbnb/hooks'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'arrow-spacing': 'error',
    'arrow-parens': 'error',
    'comma-dangle': 'off',
    complexity: 'warn',
    'constructor-super': 'warn',
    curly: ['warn', 'multi-line'],
    'dot-notation': 'warn',
    'eol-last': ['error', 'always'],
    eqeqeq: ['warn', 'smart'],
    'func-style': ['error', 'expression'],
    'guard-for-in': 'warn',
    'id-blacklist': 'off',
    'id-match': 'off',
    indent: ['warn', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/extensions': ['warn', {
      jsx: 'ignorePackages'
    }],
    'react/require-default-props': [0, {
      forbidDefaultForRequired: false, ignoreFunctionalComponents: true
    }],
    'react/forbid-prop-types': ['none', { 'forbid': ["none"], "checkContextTypes": false, "checkChildContextTypes": false }], 'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error', { beforeColon: false }],
    'max-classes-per-file': ['warn', 3],
    'max-len': ['warn', { code: 200 }],
    'new-parens': 'warn',
    'no-bitwise': 'warn',
    'no-caller': 'error',
    'no-cond-assign': 'warn',
    'no-console': 'off',
    'no-debugger': 'warn',
    'no-empty': 'warn',
    'no-eval': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'warn',
    'no-shadow': ['off'],
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef-init': 'warn',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'warn',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'warn',
    'react/no-unescaped-entities': 0,
    'no-var': 'error',
    'object-shorthand': 'warn',
    'one-var': ['warn', 'never'],
    'prefer-arrow/prefer-arrow-functions': 'off',
    'prefer-const': 'error',
    quotes: ['error', 'single'],
    radix: 'warn',
    semi: ['error', 'always'],
    'keyword-spacing': 'error',
    'space-infix-ops': 'error',
    'semi-style': ['error', 'last'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'spaced-comment': 'warn',
    'use-isnan': 'warn',
    'valid-typeof': 'off',
    'no-multi-spaces': ['error', { exceptions: { VariableDeclarator: true } }]
  }
};
