/* eslint-disable @typescript-eslint/no-var-requires */
const npath = require('path')
const apis = require('@tarojs/taro-h5/dist/taroApis')
module.exports = function (chain) {
  // 内部exclude = [filename => /node_modules/.test(filename) && !(/taro/.test(filename))];
  // taro编译由下面compile-node-modules来处理
  chain.module
    .rule('script')
    .exclude.clear()
    .add((filename) => /node_modules/.test(filename))
  // node_modules需要二次编译的在这里处理，taro相关的包不能加载polyfill
  chain.module
    .rule('compile-node-modules')
    .test(/node_modules\/@tarojs(.+?)\.[tj]sx?$/i)
    .use('taro-loader')
    .loader(npath.join(process.cwd(), 'node_modules/babel-loader/lib/index.js'))
    .options({
      presets: [
        [
          '@antmjs/babel-preset',
          {
            presets: {
              env: {
                debug: false,

                /**
                 * false: 不处理polyfill，自己手动引入【全量】
                 * usage: 按需加载 polyfill，且不需要手动引入【按需】
                 * entry: 必须手动引入，但会根据设置的目标环境全量导入【按环境全量】
                 * 注：在 Babel 7.4.0 之后的版本，Babel官方明确建议了不再使用 @babel/polyfill ，建议使用 core-js/stable 和 regenerator-runtime/runtime。本包已经安装了core-js、@babel/plugin-transform-runtime和@babel/runtime，所以选择false或者entry选项的只需要在主文件顶部引入core-js即可
                 */
                useBuiltIns: false,
                corejs: false,
                modules: false, // 对es6的模块文件不做转译，以便使用tree shaking、sideEffects等
              },
              react: {
                runtime: 'automatic',
              },
              typescript: {
                isTSX: true,
                jsxPragma: 'React',
                allExtensions: true,
                allowNamespaces: true,
              },
            },
            decorators: {
              legacy: false,
              decoratorsBeforeExport: false,
            },
            classProperties: {
              loose: false,
            },
            runtime: {
              absoluteRuntime: npath.dirname(
                require.resolve('@babel/runtime-corejs3/package.json'),
              ),
              version: require('@babel/runtime-corejs3/package.json').version,
              corejs: false,
              helpers: true, // 使用到@babel/runtime
              regenerator: true, // 使用到@babel/runtime
              useESModules: false,
            },
            exclude: [/@babel[/|\\\\]runtime/, /core-js/],
          },
        ],
      ],
      plugins: [
        [
          require('babel-plugin-transform-taroapi'),
          { packageName: '@tarojs/taro', apis },
        ], // taro可以加，tree-shaking用
      ],
    })
}
