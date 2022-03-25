const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');


// const CopyPlugin = require('copy-webpack-plugin');


module.exports = (envVars) => {
  const { env } = envVars;
  const isProd = env.production;
  const isDev = !isProd;

  // style files regexes
  const cssRegex = /\.css$/;
  const cssModuleRegex = /\.module\.css$/;
  const sassRegex = /\.(scss|sass)$/;
  const sassModuleRegex = /\.module\.(scss|sass)$/;
  const cssModuleLocalIdent = isProd ? '[hash:base64:6]' : '[path][name]__[local]';

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: require.resolve('css-loader'),
        options: {
          url: false,
          ...cssOptions,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
      },
    ].filter(Boolean);

    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve(preProcessor),
        },
      );
    }
    return loaders;
  };


  return {
    mode: (isProd) ? 'production' : 'development',

    optimization: {
      minimize: (isProd) ? true : false,
    },

    devtool: (isProd) ? 'source-map' : 'cheap-module-source-map',

    devServer: {
      hot: true,
      open: true,
    },

    entry: path.resolve(__dirname, './src/index.tsx'),

    resolve: {
      alias: {
        components: path.resolve(__dirname, './src/components/'),
        styles: path.resolve(__dirname, './src/styles/'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: {
            loader: 'ts-loader',
            // options: {
            // // disable type checker - we will use it in fork plugin
            //   transpileOnly: true,
            // },
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
        {
          test: cssRegex,
          exclude: cssModuleRegex,
          use: getStyleLoaders({
            importLoaders: 1,
            modules: {
              compileType: 'icss',
            },
          }),
          // Don't consider CSS imports dead code even if the
          // containing package claims to have no side effects.
          // Remove this when webpack adds a warning or an error for this.
          // See https://github.com/webpack/webpack/issues/6571
          sideEffects: true,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
      }),
      new ReactRefreshWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: './tsconfig.json',
        },
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? 'css/[name][contenthash:8].css' : 'css/[name].css',
      }),
      
    // TODO copying stuff from dev to prod version of project on build run
    // new CopyPlugin({
    //   patterns: [{ from: 'source', to: 'dest' }],
    // }),
    ],
  };
};
