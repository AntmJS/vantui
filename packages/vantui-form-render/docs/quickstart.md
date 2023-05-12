# 快速上手

### 背景知识

使用 @antmjs/vantui 前，请确保你已经学习过[Taro 框架 React 版](https://taro.zone/) 或者 [React](https://reactjs.org/)。

### 差异点

- 组件属性均用驼峰代替
- slot 改为通过属性传递 ReactNode 即 slot="footer" 改为 render 为前缀 F 大写传 ReactNode renderFooter={<View></View>}
- 组件文档案例部分可能会存在一些小问题（时间紧大家见谅）如果有问题可以提 issue 给我们，你们可以先看实际 demo。文档 TS 信息是和我们的组件同步的

### 支持程度

- Taro 需要使用 3.0+的版本
- 小程序参考 Taro 的最低支持程度

### 使用模版快速开发 Taro 应用

- Pull 代码：[纯净版 React In Taro 模版工程](https://github.com/AntmJS/pure-project-vantui)
- 进入根目录：执行 yarn && yarn watch:weapp

### 使用模版快速开发 React 应用

- Pull 代码：[纯净版 React 模版工程](https://github.com/AntmJS/create-react-app-vantui)
- 进入根目录：执行 yarn && TARO_ENV=h5 yarn start

### 使用高级模版快速开发 Taro 应用

- [高级模版功能说明](/#/premium)
- Pull 代码：[高级版 React In Taro 模版工程](https://github.com/AntmJS/temptaro)
- 进入根目录：执行 yarn && yarn watch:weapp

## 开始使用

> 2.0 版本起内部不再注入 polyfill 逻辑，需要兼容低版本的请自行进行 polyfill。

### 通过 npm/yarn 安装

```bash
# 通过 npm 安装
npm install @antmjs/vantui

# 通过 yarn 安装
yarn add @antmjs/vantui
```

> 由于引用 node_modules 的模块，默认不会编译，所以需要额外给 H5 配置 esnextModules，在 taro 项目的 config/index.js 中新增如下配置项：

```js
h5: {
  esnextModules: [/@antmjs[\\/]vantui/],
  postcss: {
    autoprefixer: {
      enable: true,
      config: {
      }
    },
    pxtransform: {
      enable: true,
      config: {},
    },
    cssModules: {
      enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      config: {
        namingPattern: 'module', // 转换模式，取值为 global/module
        generateScopedName: '[name]__[local]___[hash:base64:5]'
      }
    }
  }
}
```

### 其他注意事项

#### 需要注意开发者工具的项目设置：

- 需要设置关闭 ES6 转 ES5 功能，开启可能报错
- 需要设置关闭上传代码时样式自动补全，开启可能报错
- 需要设置关闭代码压缩上传，开启可能报错

#### 编译问题

2.0 之前的组件在编译阶段默认已经使用了 babel/runtime 进行语法转换以及 polyfill，2.0 开始不再默认注入。另外，使用 taro 的默认 babel 配置在支付宝和钉钉等环境会报错，解决方案可以参考[temptaro](https://github.com/AntmJS/temptaro)的配置。

## 引入组件

### 方式一. 通过 babel 插件按需引入组件

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```

在.babelrc 或 babel.config.js 中添加配置：

```js
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@antmjs/vantui",
        "libraryDirectory": "es",
        "style": true
      },
      "@antmjs/vantui"
    ]
  ]
}
```

```js
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@antmjs/vantui",
        "libraryDirectory": "es",
        "style": (name) => `${name}/style/less`,
      },
      "@antmjs/vantui"
    ]
  ]
}
```

接着你可以在代码中直接引入 VantUI 组件，插件会自动将代码转化为按需引入的形式。

```js
// 原始代码
import { Button } from '@antmjs/vantui'

// 编译后代码
import Button from '@antmjs/vantui/es/button'
import '@antmjs/vantui/es/button/style'
```

### 方式二. 在 Vite 项目中按需引入组件

对于 vite 项目，可以使用 [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) 实现按需引入, 原理和 `babel-plugin-import` 类似。

```bash
# 安装插件
npm i vite-plugin-style-import -D
```

```js
// vite.config.js
import styleImport from 'vite-plugin-style-import'

export default {
  plugins: [
    styleImport({
      libs: [
        {
          libraryName: '@antmjs/vantui',
          esModule: true,
          resolveStyle: (name) => `@antmjs/vantui/es/${name}/style`,
        },
      ],
    }),
  ],
}
```

### 方式三. 手动按需引入组件

在不使用插件的情况下，可以手动引入需要使用的组件和样式。

```js
// 引入组件
import Button from '@antmjs/vantui/es/button'
// 引入组件对应的样式，若组件没有样式文件，则无须引入
import '@antmjs/vantui/es/button/style'
```

### 方式四. 导入所有组件

Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。

```js
// 不需要更改主题，引用它
import '@antmjs/vantui/lib/index.css'
// 需要通过less变量/var()更改主题，引用它
import '@antmjs/vantui/lib/index.less'
```

> Tips: 配置按需引入后，将不允许直接导入所有组件。

### 注意

```js
// Taro小程序
"miniCssExtractPluginOption": {
  "ignoreOrder": true,
}
```

```js
// react
new MiniCssExtractPlugin({
  "ignoreOrder": true,
  ...
})
```

> 线上打包的时候会提示 conflicating order between ... 此类警告，可以通过 ignoreOrder:true 关闭

### 单位尺寸转化问题

VantUI 默认的尺寸规则 [作用参考](https://taro-docs.jd.com/taro/docs/size) [修改参考](https://taro-docs.jd.com/taro/docs/config)

```json
{
  "designWidth": 750,
  "deviceRatio": {
    "640": 2.34 / 2,
    "750": 1,
    "828": 1.81 / 2,
  },
}
```

如何在 js 中转换单位

```js
import { pxTransform } from '@antmjs/vantui'
// 小程序转rpx H5转rem
pxTransform(10)
```

### 兼容 Vant Weapp 以及 兼容项目配置的尺寸设置为非 750 导致组件库的样式偏大偏小问题

[参考 Taro 配置](https://docs.taro.zone/docs/next/config-detail#designwidth)

```js
config = {
  designWidth(input) {
    if (input.file.replace(/\\+/g, '/').indexOf('@antmjs/vantui') > -1) {
      return 750
    }
    return 375
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
}
```
