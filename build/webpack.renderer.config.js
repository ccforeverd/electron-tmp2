/* eslint-disable @typescript-eslint/no-var-requires */
const alias = require('./webpack.alias')
const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
})

module.exports = {
  module: {
    rules
  },
  plugins,
  resolve: {
    alias,
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
  externals: {
    vue: 'Vue'
  }
}
