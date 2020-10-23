  ],
  extends: [
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
  },
=======
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {},
>>>>>>> 42c5a0b... v3.7.1...v3.22.0
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
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      }
    }
  ]
};
