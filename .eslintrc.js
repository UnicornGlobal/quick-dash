module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'plugin:vue/recommended',
  plugins: [
    'vue',
    'html'
  ],
  'settings': {
    'html/html-extensions': ['.html']
  },
  // add your custom rules here
  'rules': {
    'no-trailing-spaces': 1,
    'space-before-function-paren': 0,
    'space-before-blocks': 1,
    'keyword-spacing': 1,
    'object-curly-spacing': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
