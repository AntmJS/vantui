# Ellipsis 文本省略

### 介绍

展示文本内容过多的时候，隐去部分内容并用“…”替代，可以自定义收起内容后的行数，可以手动控制内容是否全部展示

### 引入

在 Taro 文件中引入组件

```jsx
import { Ellipsis } from '@antmjs/vantui'
```

### 基本使用

```jsx
function Demo() {
  return (
    <Ellipsis rows={4}>
      整个组件库是依赖开源项目 Vant Weapp
      的代码经过全量编译而来，所有样式文件及代码结构都与其保持高度一致，只是生命周期经过改造使其支持
      React，很大程度避免了重新造轮子带来的各种问题，同时保留了 Vant Weapp
      多年积累的经验 收到了一些反馈，这里说明一下吧。关于 demo
      的质量和文档现在确实是有一些不足的地方的，因为做这件事的人并不多暂时，我们把更多的精力放在了组件本身，确保大家在实际的应用中能够更少的被中断。目前除了
      50 多个组件要维护，还有 Taro Demo 和 React Demo
      和文档，同时公司也有业务要跟进，所以希望大家能够体谅，当然非常欢迎有兴趣的人一起来完善它！
    </Ellipsis>
  )
}
```

### 隐藏操作按钮

```jsx
function Demo() {
  return (
    <Ellipsis rows={4} hiddenAction>
      整个组件库是依赖开源项目 Vant Weapp
      的代码经过全量编译而来，所有样式文件及代码结构都与其保持高度一致，只是生命周期经过改造使其支持
      React，很大程度避免了重新造轮子带来的各种问题，同时保留了 Vant Weapp
      多年积累的经验 收到了一些反馈，这里说明一下吧。关于 demo
      的质量和文档现在确实是有一些不足的地方的，因为做这件事的人并不多暂时，我们把更多的精力放在了组件本身，确保大家在实际的应用中能够更少的被中断。目前除了
      50 多个组件要维护，还有 Taro Demo 和 React Demo
      和文档，同时公司也有业务要跟进，所以希望大家能够体谅，当然非常欢迎有兴趣的人一起来完善它！
    </Ellipsis>
  )
}
```

### EllipsisProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/ellipsis.d.ts)

| 参数          | 说明               | 类型                         | 默认值  | 必填    |
| ------------- | ------------------ | ---------------------------- | ------- | ------- |
| children      | 内容               | _&nbsp;&nbsp;string<br/>_    | -       | `true`  |
| defaultExpand | 默认是否展开       | _&nbsp;&nbsp;boolean<br/>_   | `false` | `false` |
| rows          | 展示几行           | _&nbsp;&nbsp;number<br/>_    | 1       | `false` |
| expandText    | 展开文案           | _&nbsp;&nbsp;string<br/>_    | `展开`  | `false` |
| collapseText  | 收起文案           | _&nbsp;&nbsp;string<br/>_    | `收起`  | `false` |
| symbol        | 省略的文案         | _&nbsp;&nbsp;ReactNode<br/>_ | `...`   | `false` |
| hiddenAction  | 是否要隐藏操作按钮 | _&nbsp;&nbsp;boolean<br/>_   | `false` | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                        | 默认值                   |
| --------------------------- | ------------------------ |
| --ellipsis-font-size        | ` 28px;`                 |
| --ellipsis-line-height      | ` 50px;`                 |
| --ellipsis-action-font-size | ` 30px;`                 |
| --ellipsis-primary-color    | ` var(--primary-color);` |
