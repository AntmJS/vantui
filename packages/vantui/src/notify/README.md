# Notify 消息提示

### 介绍

在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

### 引入

在 Taro 文件中引入组件

```js
import { Notify } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```js
import { Notify } from 'vantui'
```

::: $demo1 :::

### 通知类型

支持`primary`、`success`、`warning`、`danger`四种通知类型，默认为`danger`。

::: $demo2 :::

### 自定义通知

自定义消息通知的颜色和展示时长。

::: $demo3 :::

### 自定义选择器

::: $demo4 :::

### NotifyProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/notify.d.ts)

| 参数             | 说明 | 类型                                                                                                | 默认值 | 必填    |
| ---------------- | ---- | --------------------------------------------------------------------------------------------------- | ------ | ------- |
| selector         | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| message          | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                        | -      | `false` |
| background       | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| type             | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| color            | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| duration         | -    | _&nbsp;&nbsp;number<br/>_                                                                           | -      | `false` |
| zIndex           | -    | _&nbsp;&nbsp;number<br/>_                                                                           | -      | `false` |
| safeAreaInsetTop | -    | _&nbsp;&nbsp;boolean<br/>_                                                                          | -      | `false` |
| top              | -    | _&nbsp;&nbsp;number<br/>_                                                                           | -      | `false` |
| id               | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| onClick          | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;any<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onOpened         | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                             | -      | `false` |
| onClose          | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                             | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                              | 默认值        |
| --------------------------------- | ------------- |
| --notify-padding                  | ` 12px 30px;` |
| --notify-font-size                | ` 28px;`      |
| --notify-line-height              | ` 40px;`      |
| --notify-primary-background-color | ` @blue;`     |
| --notify-success-background-color | ` @green;`    |
| --notify-danger-background-color  | ` @red;`      |
| --notify-warning-background-color | ` @orange;`   |
