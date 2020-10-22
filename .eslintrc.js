const path = require('path')

module.exports = {
  globals: {
    server: true,
    Set: false,
  },
  root: true,
  overrides: [
    {
      env: { embertest: true },
      files: ['tests/**/*.js'],
      globals: { percySnapshot: false, server: false },
    },

    // node files
    {
      env: {
        browser: false,
        node: true,
      },
      excludedFiles: ['config/deprecation-workflow.js'],
      files: [
        '.eslintrc.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'ember-cli-build.js',
        'lib/*/index.js',
        'lib/ember-faker-pki//generate-certs.js',
        'prettier.config.js',
        'testem.js',
      ],
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'script',
      },
      rules: {
        'ember/use-ember-get-and-set': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['jsdoc', 'hbs'],
  env: {
    browser: true,
  },
  rules: {
    'hbs/check-hbs-template-literals': [
      'error',
      2,
      { ConfigFile: path.join(__dirname, '/.eslint-template-lintrc.json') },
    ],
  },
}
