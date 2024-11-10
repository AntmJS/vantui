# Badge 徽标

### 介绍

在右上角展示数字、文字、小红点， 适用于产品化的新消息、新功能、新服务等内容的提醒，通过醒目视觉形式吸引用户处理。

## 基本使用

content 传空字符串即开启 dot 模式

::: $demo1 :::

### 带边框

::: $demo2 :::

### BadgeProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/badge.d.ts)

| 参数             | 说明                   | 类型                                   | 默认值  | 必填    |
| ---------------- | ---------------------- | -------------------------------------- | ------- | ------- |
| content          | 徽标内容               | _&nbsp;&nbsp;ReactNode<br/>_           | -       | `false` |
| color            | 颜色                   | _&nbsp;&nbsp;string<br/>_              | #ff3141 | `false` |
| bordered         | 是否显示边框           | _&nbsp;&nbsp;boolean<br/>_             | false   | `false` |
| children         | -                      | _&nbsp;&nbsp;ReactNode<br/>_           | -       | `false` |
| wrapperClassName | 徽标根节点的 className | _&nbsp;&nbsp;string<br/>_              | -       | `false` |
| wrapperStyle     | 徽标根节点的 style     | _&nbsp;&nbsp;React.CSSProperties<br/>_ | -       | `false` |
| style            | 徽标内容的 style       | _&nbsp;&nbsp;React.CSSProperties<br/>_ | -       | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                           | 默认值             |
| ------------------------------ | ------------------ |
| --badge-primary-color          | ` #ff3141;`        |
| --badge-font-size              | ` 24px;`           |
| --badge-color-text-light-solid | ` #fff;`           |
| --badge-light-borded           | ` 2px solid #eee;` |
