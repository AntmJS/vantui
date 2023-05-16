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
3. `packages/vantui-demo`下执行: `yarn watch: [xx平台]`, 如果要修改文档代码请在`packages/vantui-doc`下修改，文档代码会自动同步到`vantui-demo`项目

---

- 代码提交:

---

- 内部开发成员提交: 根目录创建.webhook.js 文件，向 git 管理者获取 webhooks 的 token，然后设置

```js
module.exports = 'xxxxxtoken'
```

- fork 的项目的提交: 本地执行`eslint`后`git commit -m xxxxmessage -n`强制提交

`message` 须按照下面规范, 如新功能`git commit -m "feat:xxxx" -n`

```json
{
  "feat": {
    "description": "新功能（feature）"
  },
  "fix": {
    "description": "修补bug"
  },
  "style": {
    "description": "格式（不影响代码运行的变动）"
  },
  "chore": {
    "description": "构建过程或辅助工具的变动"
  },
  "typings": {
    "description": "Typescript 类型错误"
  },
  "docs": {
    "description": "文档（documentation）"
  },
  "refactor": {
    "description": "重构（既不是新增功能，也不是修改bug的代码变动）"
  },
  "test": {
    "description": "增加或修改测试用例"
  }
}
```

### 组件 README 代码同步规则

- Demo 组件的整体书写格式必须是`*** function Demo(){...} ***`
- `reactAPI`的引用都是用 react.xxx
- `@tarojs/components`和`@antmjs/vantui`组件都不需要自己 import
- 内部自定义组件的组件名称须带前缀`_`, Form 组件文档下的`DatetimePickerBox_`, 暂时不支持写在`common`标识的代码块里
- 多个组件公用的数据或方法，给代码块设置`common`标志符号，例如单独定义一个 sku 数据：

 <img src="https://raw.githubusercontent.com/AntmJS/vantui/main/resource/%20code-demo.png" alt="contributors">

在 demo 代码块中使用

```js
function Demo () {
  const { sku } = COMMON
  ...
}
```

### 如何编写组件的 API 描述

如果需要更改或新建组件文档的 API，请阅读[ts 同步到文档说明](https://antmjs.github.io/vantui/#/comments)
