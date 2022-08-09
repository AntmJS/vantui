/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-commonjs
const { Compilation, sources } = require('webpack')

// 一个 JavaScript 命名函数。
function GlobalFixPlugin() {}

// 在插件函数的 prototype 上定义一个 `apply` 方法。
GlobalFixPlugin.prototype.apply = function (compiler) {
  compiler.hooks.thisCompilation.tap('GlobalFixPlugin', (compilation) => {
    compilation.hooks.processAssets.tap(
      {
        name: 'GlobalFixPlugin',
        stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
      },
      (assets) => {
        for (const asset in assets) {
          if (
            asset === 'runtime.js' &&
            (process.env.TARO_ENV === 'kwai' ||
              process.env.TARO_ENV === 'alipay' ||
              process.env.TARO_ENV === 'dd' ||
              process.env.TARO_ENV === 'swan')
          ) {
            compilation.updateAsset(asset, (source) => {
              return new sources.RawSource(
                source
                  .source()
                  .replace(
                    "return this || new Function('return this')();",
                    'return {Object,Function,Array,Number,parseFloat,parseInt,Infinity,NaN,Boolean,String,Symbol,Date,Promise,RegExp,RangeError,ReferenceError,SyntaxError,TypeError,URIError,JSON,Math,console,Intl,ArrayBuffer,Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Float32Array,Float64Array,Uint8ClampedArray,DataView,Map,Set,WeakMap,WeakSet,Proxy,Reflect,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,escape,unescape,isFinite,isNaN,clearInterval,setInterval};',
                  ),
              )
            })
          }
        }
      },
    )
  })
}

module.exports = GlobalFixPlugin
