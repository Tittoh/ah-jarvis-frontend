module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'import'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
    'react/no-unescaped-entities': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    quotes: ['error', 'single'],
    'import/prefer-default-export': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
  },
  globals: {
    document: false,
    it: false,
    window: false,
    expect: false,
    describe: false,
    navigator: false,
    fetch: false,
    localStorage: false,
    beforeEach: false,
    afterEach: false,
    jest: false,
  },
};
