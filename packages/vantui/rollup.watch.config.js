/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve, join, dirname } = require('path')
const { getBabelOutputPlugin } = require('@rollup/plugin-babel')
const json = require('@rollup/plugin-json')
const image = require('@rollup/plugin-image')
const copy = require('rollup-plugin-copy-watch')
const typescript = require('@rollup/plugin-typescript')
const commonjs = require('@rollup/plugin-commonjs')
const styles = require('rollup-plugin-styles')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const apis = require('@tarojs/taro-h5/dist/taroApis')
const cwd = process.cwd()

const config = {
  input: join(cwd, 'src/index.ts'),
  output: [
    {
      file: join(cwd, 'dist/index.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      sourcemap: true,
      format: 'esm',
      file: join(cwd, 'dist/index.esm.js'),
    },
  ],
  external: [
    '@babel/runtime-corejs3',
    '@tarojs/taro',
    '@tarojs/components',
    'react',
    'react-dom',
  ],
  plugins: [
    commonjs({
      include: /\/node_modules\//,
    }),
    nodeResolve({
      customResolveOptions: {
        moduleDirectories: ['node_modules'],
      },
    }),
    json(),
    typescript({
      tsconfig: resolve(__dirname, '../../tsconfig.json'),
      module: 'esnext',
      skipLibCheck: true,
    }),
    getBabelOutputPlugin({
      configFile: resolve(__dirname, '../../babel.config.js'),
    }),
    image(),
    copy({
      watch: 'src/style',
      targets: [{ src: 'src/style', dest: 'dist' }],
    }),
  ],
}

const h5Config = {
  input: join(cwd, 'src/index.ts'),
  output: [
    {
      file: join(cwd, 'dist/h5.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      sourcemap: true,
      format: 'esm',
      file: join(cwd, 'dist/h5.esm.js'),
    },
  ],
  external: ['@babel/runtime-corejs3', 'react', 'react-dom'],
  plugins: [
    commonjs({
      include: /\/node_modules\//,
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.jsx', '.tsx', '.ts', '.vue'],
      mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main'],
      customResolveOptions: {
        moduleDirectories: ['node_modules'],
      },
    }),
    json(),
    typescript({
      tsconfig: resolve(__dirname, '../../tsconfig.json'),
      module: 'esnext',
      skipLibCheck: true,
    }),
    getBabelOutputPlugin({
      exclude: /node_modules/,
      configFile: resolve(__dirname, '../../babel.config.js'),
    }),
    getBabelOutputPlugin({
      include: /node_modules\/@tarojs(.+?)\.[tj]sx?$/i,
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
              absoluteRuntime: dirname(
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
    }),
    image(),
    styles(),
  ],
}

module.exports = [config, h5Config]
