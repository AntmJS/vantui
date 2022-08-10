## Taro 项目模版

目前支持微信、支付宝、抖音、快手、百度小程序；支持 H5

### 代码规范

- 默认集成了 prettier eslint stylelint 解决编码规范问题
- 默认集成了 commitlint commitizen 解决 commit 规范问题
- 默认集成了 husky lint-staged 解决了 commit 之前自动校验代码规范

### 开发效率

- 使用 Unite 库以空间换时间的方案加快研发速度，同时保证 TS 类型安全
- action 层使用@antmjs/rapper 实现根据 TS 类型自动生成 action 逻辑，保证类型安全
- action 层也可以使用 yarn swagger 自动根据服务端的 swagger api 自动生成 action 逻辑，保证类型安全
- 自动埋点
- 自动收集异常
- 自动处理异常
- 自动处理 pullDownloadRefresh
- 快速使用自定义导航
- 快速支持事件抖动
- 二次封装了部分频繁使用的组件

## 使用

1. 将\_antm.config.js 改成 antm.config.js，更新 token 参数，gitignore 去掉 antm.config.js(需要的话)
2. 执行 yarn rapper 自动生成 action 层代码(需要的话)
3. 执行 yarn swagger 自动根据服务端 swagger api 生成 action 层代码(需要的话)
4. 需要引入 iconfont 可以执行 yarn iconfont 会自动生成 src/iconfont.less
5. yarn
6. yarn watch:weapp(package.json 里面填写对应环境的 appId)
