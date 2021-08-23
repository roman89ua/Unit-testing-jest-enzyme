/* eslint @typescript-eslint/no-var-requires: "off" */

const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('DEVELOPMENT MODE IS CURRENT'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
