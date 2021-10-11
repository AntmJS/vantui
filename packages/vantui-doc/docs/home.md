<div class="card">
  <div class="intro" style="text-align: center; padding: 20px;">
    <img class="intro__logo" style="height: 120px; box-shadow: none;" src="https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png">
    <img class="intro__logo" style="width: 120px; height: 120px; box-shadow: none;" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png">
    <h2 style="margin: 0; font-size: 32px; line-height: 60px;">@antmjs/vantui</h2>
    <p>一套基于 vant-weapp 开发的用于 Taro-React 框架的多端 UI 组件库</p>
  </div>
</div>

### 关联
- [Taro](https://github.com/NervJS/taro)：由京东团队打造的开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5/React Native 等应用
- [Vant Weapp](https://github.com/youzan/vant-weapp)：由有赞团队打造的轻量、可靠的微信小程序 UI 组件库

### 起源
- 为什么要做这个组件库？我们认为有赞团队的组件库经过了多年的实践积累，以及经过我们的实际体验之后认为确实是一款优秀的组件库，但可惜的是他们只提供了Vue版本和微信小程序版本，而我们的技术架构选用的是京东的Taro框架，所以就开始思考如何能把有赞微信小程序的版本迁移到Taro上面来，最终我们实现了[@antmjs/vantui](https://github.com/antmjs/vantui)。
- 为什么是99%？迁移的步骤其实不难，第一步100%同步样式，第二步通过Taro convert转译之后再重构js部分，但因为有赞微信小程序的版本完全基于微信小程序实现的，所以在改造兼容支付宝小程序、H5的时候还是存在不能100%兼容的情况，具体的个别差异点可以参考[快速上手](https://antmjs.github.io/vantui/#/quickstart)。

### 预览

正在全力建设中...

### 优势

- TS类型安全
- 目前支持微信小程序、支付宝小程序、H5。其他端逐渐更新中...

### 贡献代码

使用过程中发现任何问题都可以提 [Issue](https://github.com/antmjs/vantui/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/antmjs/vantui/pulls)

### 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源


### 参与贡献的小伙伴

[![hisanshao](https://avatars.githubusercontent.com/u/26359618?s=100&v=4)](https://github.com/hisanshao/) | [![Chitanda60](https://avatars.githubusercontent.com/u/16026533?s=100&v=4)](https://github.com/Chitanda60/) | [![zuolung](https://avatars.githubusercontent.com/u/19684540?s=100&v=4)](https://github.com/Banlangenn/) | [![hisanshao](https://avatars.githubusercontent.com/u/28145148?s=100&v=4)](https://github.com/zuolung/)
:---:|:---:|:---:|:---:
[hisanshao](https://github.com/hisanshao/) | [Chitanda60](https://github.com/Chitanda60/) | [Banlangenn](https://github.com/Banlangenn/) | [zuolung](https://github.com/zuolung/)
