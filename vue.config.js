module.exports = {
  runtimeCompiler: true,

  pwa: {
    name: 'Poke App'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
}