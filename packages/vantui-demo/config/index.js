/* eslint-disable @typescript-eslint/no-var-requires */
const npath = require('path')
const pkg = require('../package.json')
const miniChain = require('./webpack/miniChain')
const h5Chain = require('./webpack/h5Chain')

function getVersion() {
  function fillZero(value) {
    return value < 10 ? `0${value}` : `${value}`
  }
  const date = new Date()

  return `${date.getFullYear() - 2010}.${date.getMonth()}${fillZero(
    date.getDay(),
  )}.${date.getHours()}${fillZero(date.getMinutes())}`
}

const version = getVersion()

let config = {
  projectName: pkg.name,
  date: '2021-07-15',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: process.env.TARO_ENV === 'h5' ? 'build' : process.env.TARO_ENV,
  env: {
    API_ENV: JSON.stringify(process.env.API_ENV),
    WATCHING: JSON.stringify(process.env.WATCHING || 'false'),
    DEPLOY_VERSION: JSON.stringify(version),
  },
  alias: {
    '@': npath.resolve(process.cwd(), 'src'),
    react: npath.resolve(process.cwd(), './node_modules/react'),
  },
  framework: 'react',
  mini: {
    webpackChain(chain) {
      miniChain(chain)
    },
    // lessLoaderOption: {
    //   additionalData: "@import '~/src/style/index.less';",
    // },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          // autoprefixer 配置项
        },
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true,
    },
  },
  h5: {
    webpackChain(chain) {
      const publicPath = process.env.PUBLIC_PATH || '/'
      h5Chain(chain)
      if (process.env.NODE_ENV === 'production') {
        chain.mode('production')
        chain.devtool('hidden-source-map')
        chain.output
          .path(npath.resolve('./build'))
          .filename('assets/js/[name].js')
          .chunkFilename('assets/js/chunk/[name].js')
          .publicPath(publicPath.replace('VERSION', version))
      } else {
        chain.mode('development')
        chain.devtool('eval-cheap-module-source-map')
        chain.output
          .path(npath.resolve('./build'))
          .filename('assets/js/[name].js')
          .chunkFilename('assets/js/chunk/[name].js')
          .publicPath(publicPath.replace('VERSION', version))
      }
      if (process.env.WATCHING === 'true') {
        chain.output.publicPath(`/`)
      }
    },
    router: {
      mode: 'hash',
      // 'pages/empty/index'
    },
    devServer: {
      port: 10086,
      hot: true,
      host: '0.0.0.0',
      historyApiFallback: true,
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*', // 表示允许跨域
      },
    },
    esnextModules: ['@antmjs/vantui'],
    proxy: {},
    // lessLoaderOption: {
    //   additionalData: "@import '~/src/style/index.less';",
    // },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          // autoprefixer 配置项
        },
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    miniCssExtractPluginOption: {
      ignoreOrder: false,
      filename: 'assets/css/[name].css',
      chunkFilename: 'assets/css/chunk/[name].css',
    },
  },
  plugins: [
    '@tarojs/plugin-platform-alipay-dd',
    [npath.join(process.cwd(), 'config/webpack/configPlugin')],
  ],
}

module.exports = function (merge) {
  return merge({}, config, require(`./${process.env.NODE_ENV}`))
}
