/* eslint-disable @typescript-eslint/no-var-requires */
const npath = require('path')
const pkg = require('../package.json')
const miniChain = require('./webpack/miniChain')
const h5Chain = require('./webpack/h5Chain')

process.env.TARO_ENV = process.env.TARO_ENV ?? 'weapp'
process.env.NODE_ENV = process.env.NODE_ENV ?? 'production'

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
console.log(version)

const config = {
  projectName: pkg.name,
  date: '2022-3-14',
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
  },
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  compiler: 'webpack5',
  framework: 'react',
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    webpackChain(chain) {
      miniChain(chain)
    },
    lessLoaderOption: {
      lessOptions: {
        modifyVars: {
          hack: `true; @import "${npath.join(
            process.cwd(),
            'src/styles/index.less',
          )}";`,
        },
      },
      // 适用于全局引入样式
      // additionalData: "@import '~/src/styles/index.less';",
    },
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
        chain.performance.maxEntrypointSize(1000000).maxAssetSize(512000)
        chain.devtool('hidden-source-map')
        chain.output
          .path(npath.resolve('./build'))
          .filename('assets/js/[name]_[contenthash].js')
          .chunkFilename('assets/js/chunk/[name]_[contenthash].js')
          .publicPath(publicPath.replace('VERSION', version))
      } else {
        chain.mode('development')
        chain.devtool('eval-cheap-module-source-map')
        chain.output
          .path(npath.resolve('./build'))
          .filename('assets/js/[name]_[contenthash].js')
          .chunkFilename('assets/js/chunk/[name]_[contenthash].js')
          .publicPath(publicPath.replace('VERSION', version))
      }
      if (process.env.WATCHING === 'true') {
        chain.output.publicPath(`/`)
      }
    },
    esnextModules: [/@antmjs[\\/]vantui/],
    lessLoaderOption: {
      lessOptions: {
        modifyVars: {
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${npath.join(
            process.cwd(),
            'src/styles/index.less',
          )}";`,
        },
      },
    },
    router: {
      mode: 'hash',
    },
    devServer: {
      port: 10068,
      hot: false,
      host: 'localhost',
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*', // 表示允许跨域
      },
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      pxtransform: {
        enable: true,
        config: {
          onePxTransform: false,
        },
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
      filename: 'assets/css/[name]_[contenthash].css',
      chunkFilename: 'assets/css/chunk/[name]_[contenthash].css',
    },
  },
  plugins: [
    ['@tarojs/plugin-framework-react', { reactMode: 'concurrent' }],
    [npath.join(process.cwd(), 'config/webpack/configPlugin')],
    '@tarojs/plugin-platform-alipay-dd',
    ['@tarojs/plugin-platform-kwai'],
  ],
}

module.exports = function (merge) {
  return merge({}, config, require(`./${process.env.NODE_ENV}`))
}
