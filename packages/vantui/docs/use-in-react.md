# 如何在 React 中使用（单纯的 React 应用，非 Taro 应用）

### 在 React 应用中使用需要在如下文件中添加代码

```bash
yarn add @tarojs/taro @tarojs/components @antmjs/vantui
yarn add @antmjs/babel-preset --dev
```

- index.html

```html
<head>
  <script>
    !(function (n) {
      function e() {
        var e = n.document.documentElement,
          t = e.getBoundingClientRect().width
        e.style.fontSize =
          t >= 640 ? '40px' : t <= 320 ? '20px' : (t / 320) * 20 + 'px'
      }
      n.addEventListener('resize', function () {
        e()
      }),
        e()
    })(window)
  </script>
</head>
```

- src/index.js (入口文件)

```js
import { init } from '@antmjs/vantui'
import { defineCustomElements, applyPolyfills } from '@tarojs/components/loader'

init()
applyPolyfills().then(function () {
  defineCustomElements(window)
})
```

- webpack.config.js

```js
{
  resolve: {
    mainFields: [
      'main:h5',
      'browser',
      'module',
      'jsnext:main',
      'main',
    ],
    alias: {
      // 默认@tarojs/components要指向dist-h5/react，而loader和taro-components.css只要直接指向@tarojs/components就行
      // 理论上还有优化的空间，慢慢来，持续迭代
      '@tarojs/components/dist/taro-components/taro-components.css': path.resolve(process.cwd(), './node_modules/@tarojs/components/dist/taro-components/taro-components.css'),
      '@tarojs/components/loader': path.resolve(process.cwd(), './node_modules/@tarojs/components/loader'),
      '@tarojs/components': path.resolve(process.cwd(), './node_modules/@tarojs/components/dist-h5/react'),
      react: path.resolve(process.cwd(), './node_modules/react'),
      'react-dom': path.resolve(process.cwd(), './node_modules/react-dom'),
    },
  },
  module: {
    rules: [
      {
        // 这里其实可以在自己的webpack内配置，核心就是匹配到test的部分不触发polyfill，仅仅更新下语法就行，否则会报错
        test: /node_modules[\\/]@tarojs(.+?)\.[tj]sx?$/i,
        loader: require.resolve('babel-loader'),
        options: {
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
                  absoluteRuntime: path.dirname(
                    require.resolve(
                      '@babel/runtime-corejs3/package.json',
                    ),
                  ),
                  version: require('@babel/runtime-corejs3/package.json')
                    .version,
                  corejs: false,
                  helpers: true, // 使用到@babel/runtime
                  regenerator: true, // 使用到@babel/runtime
                  useESModules: false,
                },
                exclude: [/@babel[/|\\\\]runtime/, /core-js/],
              },
            ],
          ],
        },
      },
      {
        // 可以参考Taro的自适应方案
        test: /\.less$/
        use: [
          // 这里展示的是组件核心需要的loader，其他loader请自行添加
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-pxtransform')({
                  platform: 'h5',
                  designWidth: 750,
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 为了使移动H5和Taro小程序保持同一套组件，原因在介绍有说明，所以这里需要把Taro内置的一些插件属性给加进来
    new webpack.DefinePlugin({
      ENABLE_INNER_HTML: true,
      ENABLE_ADJACENT_HTML: true,
      ENABLE_TEMPLATE_CONTENT: true,
      ENABLE_CLONE_NODE: true,
      ENABLE_SIZE_APIS: false,
    }),
    new webpack.EnvironmentPlugin({
      LIBRARY_ENV: 'react',
      TARO_ENV: 'h5',
    }),
    // const VantUIPlugin = require('@antmjs/plugin-vantui')
    // 如果用的就是750，则不需要添加该插件了
    new VantUIPlugin({
      designWidth: 750,
      deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
      },
    }),
  ],
}

```

```bash
TARO_ENV=h5 yarn start
```

> 愉快的玩耍吧！
