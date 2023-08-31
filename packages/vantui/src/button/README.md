# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

在 Taro 文件中引入组件

```js
import {
  Button,
  MiniLoginButton,
  MiniPhoneButton,
  MiniUserButton,
} from '@antmjs/vantui'
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`。

::: $demo1 :::

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

::: $demo2 :::

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现。

::: $demo3 :::

### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮的`onClick`事件不会触发。

::: $demo4 :::

### 加载状态

::: $demo5 :::

### 按钮形状

::: $demo6 :::

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

::: $demo7 :::

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`。

::: $demo8 :::

### 块级元素

通过`block`属性可以将按钮的元素类型设置为块级元素。

::: $demo9 :::

### 自定义颜色

通过`color`属性可以自定义按钮的颜色。

::: $demo10 :::

### ButtonProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/button.d.ts)

| 参数        | 说明                                            | 类型                                                                                                                                                                                                                                                                                     | 默认值 | 必填    |
| ----------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| icon        | 传入 Icon 的 name 值                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| classPrefix | -                                               | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| type        | -                                               | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"default"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"primary"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"info"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"warning"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"danger"<br/>_ | -      | `false` |
| size        | -                                               | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"small"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"normal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"large"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"mini"<br/>_                                                         | -      | `false` |
| block       | -                                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| round       | -                                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| square      | -                                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| loading     | -                                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| hairline    | -                                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| disabled    | -                                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| loadingText | loading 的文案                                  | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                             | 加载中 | `false` |
| loadingSize | -                                               | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| loadingType | -                                               | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"spinner"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"circular"<br/>_                                                                                                                                                        | -      | `false` |
| loadingMode | loading 的模式，按钮内 loading 或 Toast.loading | _&nbsp;&nbsp;"normal"&nbsp;&brvbar;&nbsp;"toast"<br/>_                                                                                                                                                                                                                                   | normal | `false` |
| loadingMask | loading 的蒙层,默认开启                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | true   | `false` |
| color       | -                                               | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| children    | -                                               | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                             | -      | `false` |
| onClick     | -                                               | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void&nbsp;&brvbar;&nbsp;Promise<any><br/>_                                                                                                                                             | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                              | 默认值                   |
| --------------------------------- | ------------------------ |
| --button-line-height              | ` 40px;`                 |
| --button-normal-height            | ` 80px;`                 |
| --button-normal-font-size         | ` @font-size-md;`        |
| --button-normal-border-radius     | ` @border-radius-lg;`    |
| --button-mini-height              | ` 44px;`                 |
| --button-mini-font-size           | ` @font-size-xs;`        |
| --button-mini-border-radius       | ` @border-radius-sm;`    |
| --button-mini-min-width           | ` 100px;`                |
| --button-small-height             | ` 60px;`                 |
| --button-small-font-size          | ` @font-size-sm;`        |
| --button-small-border-radius      | ` @border-radius-md;`    |
| --button-small-min-width          | ` 120px;`                |
| --button-large-height             | ` 100px;`                |
| --button-large-font-size          | ` @font-size-lg;`        |
| --button-large-border-radius      | ` @border-radius-lg;`    |
| --button-default-color            | ` @text-color;`          |
| --button-default-background-color | ` @white;`               |
| --button-primary-color            | ` @white;`               |
| --button-primary-background-color | ` var(--primary-color);` |
| --button-info-color               | ` @white;`               |
| --button-info-background-color    | ` @blue;`                |
| --button-danger-color             | ` @white;`               |
| --button-danger-background-color  | ` @red;`                 |
| --button-warning-color            | ` @white;`               |
| --button-warning-background-color | ` @orange;`              |
| --button-border-width             | ` 2px;`                  |
| --button-round-border-radius      | ` @border-radius-max;`   |
| --button-plain-background-color   | ` @white;`               |
| --button-active-opacity           | ` @active-opacity;`      |
| --button-disabled-opacity         | ` @disabled-opacity;`    |
