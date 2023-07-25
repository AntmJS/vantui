# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

在 Taro 文件中引入组件

```js
import { Stepper } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

通过`value`设置输入值，可以通过`change`事件监听到输入值的变化。

::: $demo1 :::

### 步长设置

通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为`1`。

::: $demo2 :::

### 限制输入范围

通过`min`和`max`属性限制输入值的范围。

::: $demo2 :::

### 限制输入整数

设置`integer`属性后，输入框将限制只能输入整数。

::: $demo3 :::

### 禁用状态

通过设置`disabled`属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

::: $demo4 :::

### 关闭长按

通过设置`longPress`属性决定步进器是否开启长按手势。

::: $demo5 :::

### 固定小数位数

通过设置`decimalLength`属性可以保留固定的小数位数。

::: $demo6 :::

### 异步变更

如果需要异步地修改输入框的值，可以设置`asyncChange`属性，并在`change`事件中手动修改`value`。

::: $demo7 :::

### 自定义大小

通过`inputWidth`属性设置输入框宽度，通过`buttonSize`属性设置按钮大小和输入框高度。

```jsx
function Demo() {
  return <Stepper value={1} inputWidth="40px" buttonSize="32px" />
}
```

### StepperProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/stepper.d.ts)

| 参数           | 说明                                                                            | 类型                                                                                                                                                                                                                                 | 默认值  | 必填    |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------- |
| name           | 在表单内提交时的标识符                                                          | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                         | -       | `false` |
| value          | 输入值                                                                          | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                  | -       | `false` |
| integer        | 是否只允许输入整数                                                              | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `false` | `false` |
| disabled       | 是否禁用                                                                        | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `false` | `false` |
| adjustPosition | 输入聚焦后，键盘弹起时，是否自动上推页面                                        | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `true`  | `false` |
| inputWidth     | 输入框宽度                                                                      | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                  | `32px`  | `false` |
| buttonSize     | 按钮大小                                                                        | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                  | `28px`  | `false` |
| asyncChange    | 是否异步更新                                                                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `false` | `false` |
| disableInput   | 禁止输入                                                                        | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `false` | `false` |
| decimalLength  | 固定显示的小数位数                                                              | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                            | -       | `false` |
| min            | 最小值                                                                          | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                  | `1`     | `false` |
| max            | 最大值                                                                          | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                  | -       | `false` |
| step           | 步长                                                                            | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                  | `1`     | `false` |
| showPlus       | 是否展示新增按钮                                                                | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `true`  | `false` |
| showMinus      | 是否展示减少按钮                                                                | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `true`  | `false` |
| disablePlus    | 是否禁用新增按钮                                                                | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `false` | `false` |
| disableMinus   | 是否禁用减少按钮                                                                | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `false` | `false` |
| longPress      | 是否开启长按                                                                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `false` | `false` |
| theme          | 可选值 round                                                                    | _&nbsp;&nbsp;"round"<br/>_                                                                                                                                                                                                           | -       | `false` |
| alwaysEmbed    | 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | `false` | `false` |
| onFocus        | 输入框聚焦时触发                                                                | _&nbsp;&nbsp;CommonEventFunction<InputForceEvent><br/>_                                                                                                                                                                              | -       | `false` |
| onChange       | 当绑定值变化时触发的事件                                                        | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -       | `false` |
| onBlur         | 输入框失焦时触发                                                                | _&nbsp;&nbsp;CommonEventFunction<InputForceEvent><br/>_                                                                                                                                                                              | -       | `false` |
| onOverlimit    | 点击不可用的按钮时触发                                                          | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                              | -       | `false` |
| onPlus         | 点击增加按钮时触发                                                              | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                              | -       | `false` |
| onMinus        | 点击减少按钮时触发                                                              | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                              | -       | `false` |
| renderMinus    | 自定义渲染新增按钮                                                              | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                         | -       | `false` |
| renderPlus     | 自定义渲染减少按钮                                                              | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                         | -       | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                      | 默认值                   |
| ----------------------------------------- | ------------------------ |
| --stepper-active-color                    | ` #e8e8e8;`              |
| --stepper-background-color                | ` @active-color;`        |
| --stepper-button-icon-color               | ` @text-color;`          |
| --stepper-button-disabled-color           | ` @background-color;`    |
| --stepper-button-disabled-icon-color      | ` @gray-5;`              |
| --stepper-button-round-theme-color        | ` var(--primary-color);` |
| --stepper-input-width                     | ` 64px;`                 |
| --stepper-input-height                    | ` 56px;`                 |
| --stepper-input-font-size                 | ` @font-size-md;`        |
| --stepper-input-line-height               | ` normal;`               |
| --stepper-input-text-color                | ` @text-color;`          |
| --stepper-input-disabled-text-color       | ` @gray-5;`              |
| --stepper-input-disabled-background-color | ` @active-color;`        |
| --stepper-border-radius                   | ` @border-radius-md;`    |
