<div class="card">
  <div class="intro" style="text-align: center; padding: 20px;">
    <img class="intro__logo" style="width: 120px; height: 120px; box-shadow: none;" src="https://antm-js.gitee.io/resource/antmjs-vantui.jpg">
    <h2 style="margin: 0; font-size: 32px; line-height: 60px;">@antmjs/vantui</h2>
    <p>一套基于 vant-weapp 开发的在 Taro-React / React 框架中使用的多端 UI 组件库</p>
  </div>
</div>

### 组件文档

[点击查看](https://antmjs.github.io/vantui/#/home)

### 关联

- [Vant Weapp](https://github.com/youzan/vant-weapp)：由有赞团队打造的轻量、可靠的微信小程序 UI 组件库
- [Taro](https://github.com/NervJS/taro)：由京东团队打造的开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5/React Native 等应用
- [React](https://reactjs.org/)：Facebook 内部开源出来的用于构建用户界面的 JavaScript 库

### 起源

- 为什么要做这个组件库？我们认为有赞团队的组件库经过了多年的实践积累，以及经过我们的实际体验之后认为确实是一款优秀的组件库，但可惜的是他们只提供了 Vue 版本和微信小程序版本，而我们的技术架构选用的是 Facebook 的 React 库以及京东的 Taro 库，所以就开始思考如何能把有赞微信小程序的版本迁移到 Taro 上面来，最终我们实现了[@antmjs/vantui](https://github.com/antmjs/vantui)。
- 为什么是 99%？迁移的步骤其实不难，第一步 100%同步样式，第二步通过 Taro convert 转译之后再重构 js 部分，但因为有赞微信小程序的版本完全基于微信小程序实现的，所以在改造兼容支付宝小程序、H5 的时候还是存在不能 100%兼容的情况，具体的个别差异点可以参考[快速上手](https://antmjs.github.io/vantui/#/quickstart)。
- 为什么能支持 React 应用？创建初期是为了在 Taro 上面使用才建立的，但当我们开始在 H5 端测试的时候发现，既然这个库能在 Taro 版的 H5 应用中使用，为什么不能在 React 中使用呢？于是乎我们开始调研 Taro 的底层架构随即理清思路，在不重构任何组件的前提下使之能在 React 中使用

### 预览

正在全力建设中...

### 优势

<div>
<div style="display:inline-block;width:48px;"><img height="20px" src="data:image/png;base64,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" />
</div>
TS类型安全
</div>
<div>
<div style="display:inline-block;">
<img height="20px" src="https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png" />
</div>
目前支持微信小程序、支付宝小程序、H5。其他端逐渐更新中...
</div>
<div>
<div style="display:inline-block;width:48px;">
<img height="20px" src="https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/img/header_logo.svg" />
</div>
React应用中使用
</div>

> 小程序、Taro-React-H5、React-H5 多端完全统一

### 贡献代码

使用过程中发现任何问题都可以提 [Issue](https://github.com/antmjs/vantui/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/antmjs/vantui/pulls)，同时，到目前为止我们已经对 vant-weapp 的[commit](https://github.com/youzan/vant-weapp/commits/dev)记录同步到了 2021-12-23 的版本，我们也会持续同步

### 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源

### 参与贡献的小伙伴

| [![hisanshao](https://avatars.githubusercontent.com/u/26359618?s=100&v=4)](https://github.com/hisanshao/) | [![Chitanda60](https://avatars.githubusercontent.com/u/16026533?s=100&v=4)](https://github.com/Chitanda60/) | [![zuolung](https://avatars.githubusercontent.com/u/19684540?s=100&v=4)](https://github.com/Banlangenn/) | [![hisanshao](https://avatars.githubusercontent.com/u/28145148?s=100&v=4)](https://github.com/zuolung/) |
| :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
|                                [hisanshao](https://github.com/hisanshao/)                                 |                                [Chitanda60](https://github.com/Chitanda60/)                                 |                               [Banlangenn](https://github.com/Banlangenn/)                               |                                 [zuolung](https://github.com/zuolung/)                                  |
