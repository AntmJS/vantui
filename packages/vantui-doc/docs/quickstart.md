# 快速上手

### 背景知识

使用 @antmjs/vantui 前，请确保你已经学习过[Taro框架React版](https://taro.zone/) 或者 [React](https://reactjs.org/)。

### 差异点
- 组件属性均用驼峰代替
- slot改为通过属性传递ReactNode 即 slot="footer" 改为 render为前缀F大写传ReactNode renderFooter={<View></View>}
- 组件文档案例部分可能会存在一些小问题（时间紧大家见谅）如果有问题可以提issue给我们，你们可以先看实际demo。文档TS信息是和我们的组件同步的

### 支持程度
- Taro需要使用3.0+的版本
- 小程序参考Taro的最低支持程度

## 安装

### 通过 npm 安装

```bash
# 通过 npm 安装
npm i @antmjs/vantui -S --production

# 通过 yarn 安装
yarn add @antmjs/vantui --production
```

### 示例工程

- 拉取代码[VantUI](https://github.com/AntmJS/vantui)

- 执行 yarn && yarn bootstrap

> 进入Taro版工程:vantui-demo即 cd packages/vantui-demo && yarn start

> 进入React版工程:react-demo即 cd packages/react-demo && yarn watch:weapp

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
