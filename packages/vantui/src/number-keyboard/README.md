# NumberKeyboard

数字键盘，可以配合密码输入框组件或自定义的输入框组件使用

### 引入

```js
import { NumberKeyboard } from '@antmjs/vantui'
```

### 基础用法

::: $demo1 :::

### NumberKeyboardProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/number-keyboard.d.ts)

| 参数            | 说明                         | 类型                                                                                                | 默认值 | 必填    |
| --------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- | ------ | ------- |
| visible         | 是否展示                     | _&nbsp;&nbsp;boolean<br/>_                                                                          | -      | `false` |
| title           | 键盘标题                     | _&nbsp;&nbsp;ReactNode<br/>_                                                                        | -      | `false` |
| confirmText     | 完成按钮文案，null 不展示    | _&nbsp;&nbsp;ReactNode&nbsp;&brvbar;&nbsp;null<br/>_                                                | null   | `false` |
| customKey       | 自定义按钮                   | _&nbsp;&nbsp;"-"&nbsp;&brvbar;&nbsp;"."&nbsp;&brvbar;&nbsp;"X"<br/>_                                | -      | `false` |
| randomOrder     | 是否乱序键盘                 | _&nbsp;&nbsp;boolean<br/>_                                                                          | false  | `false` |
| showCloseButton | 是否展示收起键盘箭头         | _&nbsp;&nbsp;boolean<br/>_                                                                          | true   | `false` |
| onInput         | 输入内容回调                 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;v:&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | true   | `false` |
| onDelete        | 删除内容回调                 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                             | -      | `false` |
| onClose         | 点击关闭时触发               | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                             | -      | `false` |
| onConfirm       | 点击确定按钮时触发           | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                             | -      | `false` |
| afterClose      | 键盘完全收起回调             | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                             | -      | `false` |
| closeOnConfirm  | 是否在点击确定按钮时自动关闭 | _&nbsp;&nbsp;boolean<br/>_                                                                          | true   | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                    | 默认值      |
| --------------------------------------- | ----------- |
| --number-keyboard-sign-background-color | ` #eeeeee;` |
| --number-keyboard-week-color            | ` #999;`    |
