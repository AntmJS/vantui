/* eslint-disable @typescript-eslint/no-var-requires */
const npath = require('path')
const MiniFixPlugin = require('@antmjs/plugin-mini-fix')
module.exports = function (chain) {
  chain.plugin('MiniFixPlugin').use(new MiniFixPlugin())
  chain.module
    .rule('global-loader')
    .test(/node_modules[\\/]webpack[\\/]buildin[\\/]global\.js/i)
    .pre()
    .use('global-loader')
    .loader(npath.join(process.cwd(), 'config/webpack/globalLoader'))
  // 内部exclude = [filename => /node_modules/.test(filename) && !(/taro/.test(filename))];
  // taro编译由下面compile-node-modules来处理
  chain.module
    .rule('script')
    .exclude.clear()
    .add(
      (filename) =>
        /css-loader/.test(filename) ||
        (/node_modules/.test(filename) &&
          !(
            /taro/.test(filename) &&
            !/tarojs[\\/](runtime|shared|plugin-platform)/.test(filename)
          )),
    )
  // node_modules需要二次编译的在这里处理，taro相关的包不能加载polyfill
  chain.module
    .rule('compile-node-modules')
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
            useBuiltIns: false,
          },
        ],
      ],
    })
}
