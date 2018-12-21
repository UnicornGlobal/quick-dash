module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/env'
      ]
    ],
    plugins: [
      'istanbul'
    ]
  }
}
