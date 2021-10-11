### 简介

一套基于 Taro 框架开发的多端 UI 组件库

组件库99%基于有赞团队的[vant-weapp](https://github.com/youzan/vant-weapp)改造而来

#### 说明

- 为什么要做这个组件库？我们认为有赞团队的组件库经过了多年的实践积累，以及经过我们的实际体验之后认为确实是一款优秀的组件库，但可惜的是他们只提供了Vue版本和微信小程序版本，但我们的技术架构选用的是京东的Taro，所以就开始思考如何能把有赞微信小程序的版本迁移到Taro上面来，最终我们实现了@antmjs/vantui。
- 为什么是99%？迁移的步骤其实不难，第一步100%同步样式，第二步通过Taro convert转译之后再重构js部分，但因为有赞微信小程序的版本只完全基于微信小程序实现的，所以在兼容支付宝小程序、H5的时候还是存在不能100%兼容的情况，具体的个别差异点下面有提供。

#### 优势

- TS类型安全
- 目前支持微信小程序、支付宝小程序、H5。其他端逐渐更新中...

#### 安装

yarn add @antmjs/vantui

#### 差异点
- 组件属性均用驼峰代替
- slot改为传递通过属性传递ReactNode

#### 使用

```app.less
@import '@antmjs/vantui/dist/style/index.less';

page,
body {
  font-size: 28px;
}
```

```app.jsx
import { Button } from '@antmjs/vantui'

<Button onClick={() => { console.log('Hello World') }}>Hello World</Button>
```

其他使用方式暂时请查看[有赞文档](https://youzan.github.io/vant-weapp/#/home)

#### 参与贡献的小伙伴

[![hisanshao](https://avatars.githubusercontent.com/u/26359618?s=100&v=4)](https://github.com/hisanshao/) | [![Chitanda60](https://avatars.githubusercontent.com/u/16026533?s=100&v=4)](https://github.com/Chitanda60/) | [![zuolung](https://avatars.githubusercontent.com/u/19684540?s=100&v=4)](https://github.com/Banlangenn/) | [![hisanshao](https://avatars.githubusercontent.com/u/28145148?s=100&v=4)](https://github.com/zuolung/)
:---:|:---:|:---:|:---:
[hisanshao](https://github.com/hisanshao/) | [Chitanda60](https://github.com/Chitanda60/) | [Banlangenn](https://github.com/Banlangenn/) | [zuolung](https://github.com/zuolung/)
