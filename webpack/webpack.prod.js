const webpack = require('webpack');
/* BundleAnalyzer can be used to analize the structure of app but regularly it's not needed */
// const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('PRODUCTION MODE IS CURRENT'),
    }),
    // new BundleAnalyzer(),
  ],
};
