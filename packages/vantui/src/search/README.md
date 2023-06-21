# Search 搜索

### 介绍

用于搜索场景的输入框组件。

### 引入

在 Taro 文件中引入组件

```js
import { Search } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

`vanSearch` 中，value 用于控制搜索框中的文字。background 可以自定义搜索框外部背景色。

::: $demo1 :::

### 事件监听

`vanSearch` 提供了 search 和 cancel 事件。search 事件在用户点击键盘上的搜索按钮触发。cancel 事件在用户点击搜索框右侧取消按钮时触发。

::: $demo2 :::

### 搜索框内容对齐

通过 `inputAlign` 属性可以设置搜索框内容的对齐方式。

::: $demo3 :::

### 禁用搜索框

通过 `disabled` 属性可以将组件设置为禁用状态。

::: $demo4 :::

### 自定义背景色

通过`background`属性可以设置搜索框外部的背景色，通过`shape`属性设置搜索框的形状，可选值为`round`。

::: $demo5 :::

### 自定义按钮

::: $demo6 :::

### SearchProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/search.d.ts)

| 参数             | 说明 | 类型                                                                                                     | 默认值 | 必填    |
| ---------------- | ---- | -------------------------------------------------------------------------------------------------------- | ------ | ------- |
| value            | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                      | -      | `false` |
| defaultValue     | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                      | -      | `false` |
| label            | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| focus            | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| error            | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| disabled         | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| readonly         | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| inputAlign       | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| showAction       | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| leftIcon         | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| rightIcon        | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| placeholder      | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| placeholderStyle | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| actionText       | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| background       | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| maxlength        | -    | _&nbsp;&nbsp;number<br/>_                                                                                | -      | `false` |
| shape            | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| clearable        | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| clearTrigger     | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| clearIcon        | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| renderLabel      | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| renderLeftIcon   | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| renderRightIcon  | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| renderAction     | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| onChange         | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onSearch         | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onFocus          | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onBlur           | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onClear          | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                  | -      | `false` |
| onCancel         | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                  | -      | `false` |
| onClickInput     | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                  | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                       | 默认值               |
| -------------------------- | -------------------- |
| --search-background-color  | ` @gray-1;`          |
| --search-padding           | ` 20px @padding-sm;` |
| --search-input-height      | ` 68px;`             |
| --search-label-padding     | ` 0 10px;`           |
| --search-label-color       | ` @text-color;`      |
| --search-label-font-size   | ` @font-size-md;`    |
| --search-left-icon-color   | ` @gray-6;`          |
| --search-action-padding    | ` 0 @padding-xs;`    |
| --search-action-text-color | ` @text-color;`      |
| --search-action-font-size  | ` @font-size-md;`    |
