/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const { ModuleFederationPlugin } = require('webpack').container
const cwd = process.cwd()

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
    port: 10010,
    host: 'localhost',
    hot: true,
    open: true,
    historyApiFallback: true,
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
        loader: 'postcss-loader',
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

  optimization: {
    runtimeChunk: true,
  },

  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDom',
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
    }),
  ],
}
