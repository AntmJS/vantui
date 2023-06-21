# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

> 注意：1.8.0 以下的版本取消按钮会触发 catch。1.8.0 及以后的版本取消按钮会触发 then 需要通过返回的 value 为 confirm 或者 cancel 来判断是否点了确认还是取消

### 引入

在 Taro 文件中引入组件

```js
import { Dialog } from '@antmjs/vantui'
```

## 代码演示

### 提示弹窗

- alart 用于提示一些消息，只包含一个确认按钮。
- confirm 用于确认消息，包含取消和确认按钮。

案例

::: $demo1 :::

### 圆角按钮风格

将 theme 选项设置为 `roundButton` 可以展示圆角按钮风格的弹窗。

::: $demo2 :::

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

::: $demo2 :::

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

::: $demo3 :::

### DialogProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dialog.d.ts)

| 参数                  | 说明 | 类型                                                                                                                                                                                                                                                                                                                                                                               | 默认值 | 必填    |
| --------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| show                  | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| title                 | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |
| width                 | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                | -      | `false` |
| zIndex                | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                          | -      | `false` |
| theme                 | -    | _&nbsp;&nbsp;"round-button"<br/>_                                                                                                                                                                                                                                                                                                                                                  | -      | `false` |
| cancelButtonColor     | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                          | -      | `false` |
| confirmButtonColor    | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                          | -      | `false` |
| onConfirm             | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dialog?:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dialog:&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onCancel              | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dialog?:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dialog:&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onClose               | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;string<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                             | -      | `false` |
| message               | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |
| overlay               | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| selector              | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                          | -      | `false` |
| ariaLabel             | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                          | -      | `false` |
| className             | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                          | -      | `false` |
| style                 | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                          | -      | `false` |
| transition            | -    | _&nbsp;&nbsp;"fade"&nbsp;&brvbar;&nbsp;"none"<br/>_                                                                                                                                                                                                                                                                                                                                | -      | `false` |
| asyncClose            | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| beforeClose           | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;action:&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=><br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Promise<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;void&nbsp;&brvbar;&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;void<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;boolean<br/>_   | -      | `false` |
| messageAlign          | -    | _&nbsp;&nbsp;"left"&nbsp;&brvbar;&nbsp;"right"<br/>_                                                                                                                                                                                                                                                                                                                               | -      | `false` |
| confirmButtonText     | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |
| cancelButtonText      | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |
| showConfirmButton     | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| showCancelButton      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| closeOnClickOverlay   | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| confirmButtonOpenType | -    | _&nbsp;&nbsp;TaroButtonProps.OpenType<br/>_                                                                                                                                                                                                                                                                                                                                        | -      | `false` |
| renderTitle           | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |

### dialogProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dialog.d.ts)

| 参数                | 说明                                                    | 类型                                                                                                                                                                                                   | 默认值 | 必填   |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------ |
| alert               | -                                                       | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:&nbsp;DialogProps<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<<br/>&nbsp;&nbsp;&nbsp;&nbsp;"confirm"&nbsp;&brvbar;&nbsp;"cancel"<br/>&nbsp;&nbsp;><br/>_ | -      | `true` |
| confirm             | -                                                       | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:&nbsp;DialogProps<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<<br/>&nbsp;&nbsp;&nbsp;&nbsp;"confirm"&nbsp;&brvbar;&nbsp;"cancel"<br/>&nbsp;&nbsp;><br/>_ | -      | `true` |
| setDefaultOptions   | -                                                       | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:&nbsp;DialogProps<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                         | -      | `true` |
| resetDefaultOptions | -                                                       | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                | -      | `true` |
| close               | -                                                       | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                | -      | `true` |
| stopLoading         | -                                                       | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                | -      | `true` |
| createOnlyDialog    | 创建唯一的 Dialog， 命令式调用不需要设置 selector 和 id | _&nbsp;&nbsp;()&nbsp;=>&nbsp;FunctionComponent<DialogProps>&nbsp;&<br/>&nbsp;&nbsp;&nbsp;&nbsp;dialogProps<br/>_                                                                                       | -      | `true` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                   | 默认值                |
| -------------------------------------- | --------------------- |
| --dialog-width                         | ` 640px;`             |
| --dialog-small-screen-width            | ` 90%;`               |
| --dialog-font-size                     | ` @font-size-lg;`     |
| --dialog-border-radius                 | ` 32px;`              |
| --dialog-background-color              | ` @white;`            |
| --dialog-header-font-weight            | ` @font-weight-bold;` |
| --dialog-header-line-height            | ` 48px;`              |
| --dialog-header-padding-top            | ` @padding-lg;`       |
| --dialog-header-isolated-padding       | ` @padding-lg 0;`     |
| --dialog-message-padding               | ` @padding-lg;`       |
| --dialog-message-font-size             | ` @font-size-md;`     |
| --dialog-message-line-height           | ` 40px;`              |
| --dialog-message-max-height            | ` 60vh;`              |
| --dialog-has-title-message-text-color  | ` @gray-7;`           |
| --dialog-has-title-message-padding-top | ` @padding-xs;`       |
| --dialog-cancel-button-color           | ` @gray-7;`           |
| --dialog-confirm-button-color          | ` @text-link-color;`  |
