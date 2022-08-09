/* eslint-disable import/no-commonjs, @typescript-eslint/no-var-requires */
const npath = require('path')

module.exports = function (chain) {
  // 解决h5的api在Taro变量上不存在的问题
  chain.module
    .rule('enjectH5Api-loader')
    .test(/node_modules[\\/]@tarojs[\\/]taro-h5[\\/]dist[\\/]index\.js/i)
    .pre()
    .use('enjectH5Api-loader')
    .loader(npath.join(process.cwd(), 'config/webpack/enjectH5ApiInTaro'))
  // taro内部的配置：scriptRule.exclude = [filename => /css-loader/.test(filename) || (/node_modules/.test(filename) && !(/taro/.test(filename)))];
  // taro内置的webpack配置在编译script的时候使用的是项目根目录的babel.config.js的配置，如果你项目的useBuiltIns设置为'usage'，则runtime和shared都会polyfill，就会导致出错
  // 所以下面重写了exclude的配置，并给runtime和shared单独进行了匹配
  // 根据exclude可以看出，千万不要在项目名称上面带上taro字样，否则所有引用到node_modules的包都会重新被编译一次
  chain.module
    .rule('script')
    .exclude.clear()
    .add(
      (filename) =>
        /webpack[\\/]buildin[\\/]global\.js/.test(filename) ||
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
