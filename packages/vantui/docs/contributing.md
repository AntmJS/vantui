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
3. `packages/vantui-demo`下执行: `yarn watch: [xx平台]`

---

- 代码提交:

---

- 内部开发成员提交: 根目录创建 temp.js

```js
module.exports = {
  // `@octokit/core`的auth参数，用于release，需要有主干main分支权限
  gitAuth: 'xxxxx',
  // 钉钉webhooks的token, 需要向管理者索要 , 提交代码时通知群内成员package.json等文件的更改
  webhooksToken: 'xxxxx',
}
```

##### 跳过 git Hooks 的校验

- 本地执行`eslint`后`git commit -m xxxxmessage -n`强制提交

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

### 如何编写组件的 API 描述

如果需要更改或新建组件文档的 API，请阅读[ts 同步到文档说明](https://antmjs.github.io/vantui/#/comments)
