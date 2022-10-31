### 贡献指南

这篇指南会指导你如何为 vantui 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南

### Bugs

我们使用 GitHub Issues 来做 bug 追踪。 如果你想要你发现的 bug 被快速解决，按照给定的[issue 模板](https://github.com/AntmJS/vantui/issues/new?assignees=&labels=&template=BUG.md)，向我们提供问题的复现过程、平台和环境等信息

### 新增功能

如果你有改进我们的 API 或者新增功能的想法， 按照给定的[issue 模板](https://github.com/AntmJS/vantui/issues/new?assignees=&labels=&template=FEATURE.md)，向我们提供具体的需求

### 第一次贡献

如果你还不清楚怎么在 GitHub 上提 Pull Request ，可以阅读下面这篇文章来学习：
[如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

### 开发流程

`yarn`安装所有依赖后

1. `packages/vantui-cli`下执行: `yarn build`
2. `packages/vantui`下执行: `yarn watch`
3. `packages/vantui-doc`下执行: `yarn mdcode-watch`(单纯修复 bug，不需要改案例代码可不执行)
4. `packages/vantui-demo`下执行: `yarn watch: [xx平台]` (新功能的代码请在`vantui-doc`下的 readme 里面书写)
