const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),

  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
        },
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    // TODO copying stuff from dev to prod version of project on build run
    // new CopyPlugin({
    //   patterns: [{ from: 'source', to: 'dest' }],
    // }),
  ],
};
