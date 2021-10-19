# 快速上手

### 背景知识

使用 @antmjs/vantui 前，请确保你已经学习过[Taro框架React版](https://taro.zone/) 或者 [React](https://reactjs.org/)。

### 差异点
- 组件属性均用驼峰代替
- slot改为通过属性传递ReactNode slot="footer" => renderFooter={<View></View>}

## 安装

### 通过 npm 安装

```bash
# 通过 npm 安装
npm i @antmjs/vantui -S --production

# 通过 yarn 安装
yarn add @antmjs/vantui --production
```

### 示例工程

我们提供了一个[示例工程](https://github.com/AntmJS/vantui/tree/main/packages/vantui-demo)

## 使用

### 引入组件

```less
/* app.less */
@import '@antmjs/vantui/dist/style/index.less';

page,
body {
  font-size: 28px;
}
```

```jsx
/* page.tsx */
import { Button } from '@antmjs/vantui'

<Button onClick={() => { console.log('Hello World') }}>Hello World</Button>
```

> 其他使用方式暂时请查看[有赞文档](https://youzan.github.io/vant-weapp/#/home)

## 注意

### 单位尺寸转化问题

VantUI默认的尺寸规则 [作用参考](https://taro-docs.jd.com/taro/docs/size) [修改参考](https://taro-docs.jd.com/taro/docs/config)

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

如何在js中转换单位

```js
import { pxTransform } from '@antmjs/vantui'
// 小程序转rpx H5转rem
pxTransform(10)
```
## 其他

### 在开发者工具中预览示例小程序

```bash

# 将项目克隆到本地
git clone git@github.com:antmjs/vantui.git

# 安装项目依赖
yarn & lerna bootstrap & yarn build

lerna run dev:weapp --scope=vantui-demo

接着打开微信开发者工具，导入`weapp`目录的项目就可以预览示例了。
