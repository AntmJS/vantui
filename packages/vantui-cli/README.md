# Vantui Cli

Vantui Cli 是一个 React 组件库构建工具，通过 Vantui Cli 可以快速搭建一套功能完备的 React 组件库。

### 特性

- 提供丰富的命令，涵盖从开发测试到构建发布的完整流程
- 构建后的组件库默认支持按需引入、主题定制、Tree Shaking

### 安装

```shell
# 通过 npm 安装
npm i @antmjs/vantui-cli -D

# 通过 yarn 安装
yarn add @antmjs/vantui-cli --dev
```

### 组件的构建

```shell
# 直接构建生成 es & lib文件
antm-vantui-cli build
# 开发环境监听源文件修改
antm-vantui-cli watch
```

配置文件 vant.config.mjs 下的 build

```js
export default {
  name: 'antmjs.vantui',
  build: {
    srcDir: 'src',
    namedExport: true,
    skipInstall: ['lazyload'],
    packageManager: 'yarn',
  },
}
```

### 组件文档的构建

```shell
# 组件文档构建参数mode，development或production
antm-vantui-cli docs --mode development
```

md 文件的位置

- src/`componentName`/README.md
- docs/`anyDocName`.md
  配置文件 vant.config.js 下的 build

```js
module.exports = {
  name: 'vantui-doc',
  site: {
    ouDir: join(process.cwd(), 'site'),
    simulator: {
      url: {
        development: 'http://localhost:10086',
        production: '',
      },
    },
    title: '@antmjs/vantui',
    logo: 'https://antm-js.gitee.io/resource/antmjs-vantui.jpg',
    links: [
      {
        logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/antmjs/vantui',
      },
    ],
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home', // 路由名称，对应md文件名和组件名称
            title: '介绍',
            hideSimulator: false, // 是否对应
          },
        ],
      },
      {
        title: '有赞Vant-Weapp小程序文档',
        items: [
          {
            path: 'index',
            title: '参考',
            hideSimulator: false,
          },
        ],
      },
    ],
  },
}
```

### 组件代码同步

基本配置

```js
module.exports = {
  site: {
    ouDir: join(process.cwd(), 'site'),
    simulator: {
      url: {
        development: 'http://localhost:10086',
        production: '',
      },
      pagePath: path.join(__dirname, '../vantui-demo/src/pages'),
      configPath: path.join(__dirname, '../vantui-demo/src/config.json'),
      appConfigPath: path.join(__dirname, '../vantui-demo/src/app.config.js'),
      withTabPages: ['icon', 'power-scroll-view'],
    },
  },
}
```
