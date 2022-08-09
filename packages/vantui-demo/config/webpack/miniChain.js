/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-commonjs */
const MiniFixPlugin = require('@antmjs/plugin-mini-fix')
const GlobalFixPlugin = require('./globalFixPlugin')

module.exports = function (chain) {
  // add @antmjs/plugin-mini-fix and @antmjs/mini-fix
  // 解决微信小程序和抖音小程序的path上的params没有自动decode的问题，支付宝和钉钉是有decode过的
  // 这个问题是因为微信抖音和支付宝钉钉原生小程序的返回结果就是不一致的，Taro目前是没有去处理的
  chain.plugin('MiniFixPlugin').use(new MiniFixPlugin())

  //解决支付宝小程序、钉钉小程序、百度小程序没有暴露全局变量global的问题
  chain.plugin('GlobalFixPlugin').use(new GlobalFixPlugin())

  // taro内部的配置：scriptRule.exclude = [filename => /css-loader/.test(filename) || (/node_modules/.test(filename) && !(/taro/.test(filename)))];
  // taro内置的webpack配置在编译script的时候使用的是项目根目录的babel.config.js的配置，如果你项目的useBuiltIns设置为'usage'，则runtime和shared都会polyfill，就会导致出错
  // 所以下面重写了exclude的配置，并给runtime和shared单独进行了匹配
  // 根据exclude可以看出，不要在项目名称上面带上taro字样，否则所有引用到node_modules的包都会重新被编译一次
  chain.module
    .rule('script')
    .exclude.clear()
    .add(
      (filename) =>
        /css-loader/.test(filename) ||
        (/node_modules/.test(filename) &&
          !(
            /(taro)|(react-spring)/.test(filename) &&
            !/tarojs[\\/](runtime|shared|plugin-platform)/.test(filename)
          )),
    )

  chain.module
    .rule('taro-script')
    .test(/tarojs[\\/](runtime|shared|plugin-platform)/i)
    .use('taro-loader')
    .loader(require.resolve('babel-loader'))
    .options({
      presets: [
        [
          'taro',
          {
            framework: 'react',
            ts: true,
            // 这里必须要用false即runtime和shared这两个包不能进行polyfill
            useBuiltIns: false,
          },
        ],
      ],
    })
}
