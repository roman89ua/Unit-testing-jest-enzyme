/* eslint @typescript-eslint/no-var-requires: "off" */

const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('PRODUCTION MODE IS CURRENT')
    })
  ],
}