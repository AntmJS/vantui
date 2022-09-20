/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: path.join(__dirname, './src/app.js'),

  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: 'auto',
  },

  stats: 'normal',

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  devServer: {
    port: 10222,
    host: 'localhost',
    hot: false,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            [
              '@babel/preset-typescript',
              {
                isTSX: true,
                jsxPragma: 'React',
                allExtensions: true,
                allowNamespaces: true,
              },
            ],
            require.resolve('@babel/preset-react'),
          ],
        },
      },
      {
        test: /\.md$/,
        loader: require.resolve('raw-loader'),
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, require.resolve('css-loader')],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          require.resolve('css-loader'),
          require.resolve('less-loader'),
        ],
      },
      {
        test: /\.less$/,
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            plugins: [
              ['postcss-pxtransform', { platform: 'h5', designWidth: 750 }],
            ],
          },
        },
      },
    ],
  },

  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },

  plugins: [
    // 抽离出css
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash].css',
      chunkFilename: '[id]_[contenthash].css',
    }),

    new htmlWebpackPlugin({
      title: 'api-ui',
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      hash: true,
    }),
  ],
}
