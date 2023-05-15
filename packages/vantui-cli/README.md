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
    ignore: [/types.d.ts/],
  },
}
```
