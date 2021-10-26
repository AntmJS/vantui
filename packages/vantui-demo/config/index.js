/* eslint-disable @typescript-eslint/no-var-requires */
const npath = require('path')
const pkg = require('../package.json')
const miniChain = require('./webpack/miniChain')
const h5Chain = require('./webpack/h5Chain')
const h5Touter = [
  'pages/dashboard/index',
  'pages/action-sheet/index',
  'pages/button/index',
  'pages/card/index',
  'pages/cell/index',
  'pages/col/index',
  'pages/count-down/index',
  'pages/dialog/index',
  'pages/field/index',
  'pages/icon/index',
  'pages/image/index',
  'pages/loading/index',
  'pages/nav-bar/index',
  'pages/notice-bar/index',
  'pages/notify/index',
  // 'pages/panel/index',
  'pages/popup/index',
  'pages/progress/index',
  'pages/stepper/index',
  'pages/steps/index',
  'pages/sticky/index',
  'pages/switch/index',
  'pages/search/index',
  'pages/slider/index',
  'pages/sidebar/index',
  'pages/tab/index',
  'pages/tabbar/index',
  'pages/tag/index',
  'pages/toast/index',
  'pages/transition/index',
  'pages/tree-select/index',
  'pages/area/index',
  'pages/submit-bar/index',
  'pages/radio/index',
  'pages/checkbox/index',
  'pages/goods-action/index',
  'pages/swipe-cell/index',
  'pages/uploader/index',
  'pages/datetime-picker/index',
  'pages/rate/index',
  'pages/collapse/index',
  'pages/picker/index',
  'pages/overlay/index',
  'pages/circle/index',
  'pages/grid/index',
  'pages/dropdown-menu/index',
  'pages/index-bar/index',
  'pages/skeleton/index',
  'pages/divider/index',
  'pages/empty/index',
  'pages/calendar/index',
  'pages/share-sheet/index',
  'pages/config-provider/index',
]
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
      ignoreOrder: false,
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
      customRoutes: process.env.DOC
        ? h5Touter.reduce((p, n) => {
            p[n] = n.replace(/pages\/([\w-]+)\/index/, '$1')
            return p
          }, {})
        : '',
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
  plugins: [[npath.join(process.cwd(), 'config/webpack/configPlugin')]],
}

module.exports = function (merge) {
  return merge({}, config, require(`./${process.env.NODE_ENV}`))
}
