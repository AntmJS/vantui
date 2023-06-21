# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

在 Taro 文件中引入组件

```js
import { Cell, CellGroup } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框。

::: $demo1 :::

### 卡片风格

通过 CellGroup 的 `inset` 属性，可以将单元格转换为圆角卡片风格。

::: $demo2 :::

### 单元格大小

通过`size`属性可以控制单元格的大小。

::: $demo3 :::

### 展示图标

通过`icon`属性在标题左侧展示图标。

::: $demo4 :::

### 展示箭头

设置`isLink`属性后会在单元格右侧显示箭头，并且可以通过`arrowDirection`属性控制箭头方向。

::: $demo5 :::

### 页面跳转

可以通过`url`属性进行页面跳转，通过`linkType`属性控制跳转类型。

::: $demo6 :::

### 分组标题

通过`CellGroup`的`title`属性可以指定分组标题。

::: $demo7 :::

### 自定义渲染内容

如以上用法不能满足你的需求，可以使用`renderTitle`和`renderRightIcon`来渲染内容

::: $demo8 :::

### 垂直居中

通过`center`属性可以让`Cell`的左右内容都垂直居中。

::: $demo9 :::

### CellProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/cell.d.ts)

| 参数            | 说明                           | 类型                                                                                                                                                                                        | 默认值     | 必填    |
| --------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| url             | 点击后跳转的链接地址           | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                   | -          | `false` |
| linkType        | 点击后跳转的链接地址           | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"navigateTo"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"reLaunch"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"redirectTo"<br/>_ | navigateTo | `false` |
| title           | 左侧标题                       | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                         | -          | `false` |
| value           | 右侧内容                       | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                         | -          | `false` |
| icon            | 标题下方的描述信息             | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                   | -          | `false` |
| size            | 单元格大小，可选值为 large     | _&nbsp;&nbsp;"large"<br/>_                                                                                                                                                                  | -          | `false` |
| label           | 标题下方的描述信息             | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                | -          | `false` |
| center          | 是否使内容垂直居中             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                  | -          | `false` |
| isLink          | 是否展示右侧箭头并开启点击反馈 | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                  | -          | `false` |
| required        | 是否显示表单必填星号           | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                  | false      | `false` |
| clickable       | 是否开启点击反馈               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                  | false      | `false` |
| titleWidth      | 标题宽度，须包含单位           | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                   | -          | `false` |
| style           | -                              | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                   | -          | `false` |
| arrowDirection  | 箭头方向                       | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"left"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"up"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"down"<br/>_                   | -          | `false` |
| border          | 是否显示下边框                 | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                  | -          | `false` |
| titleStyle      | 标题样式                       | _&nbsp;&nbsp;CSSProperties<br/>_                                                                                                                                                            | -          | `false` |
| renderTitle     | 自定义渲染标题                 | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                | -          | `false` |
| renderIcon      | 自定义渲染左侧 icon            | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                | -          | `false` |
| renderLabel     | 自定义 label 显示内容          | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                | -          | `false` |
| renderRightIcon | 自定义 icon 显示内容           | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                | -          | `false` |
| renderExtra     | 自定义右边内容后跟随的内容     | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                | -          | `false` |
| children        | -                              | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                | -          | `false` |

### CellGroup Props [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/cell.d.ts)

| 参数     | 说明                   | 类型                         | 默认值 | 必填    |
| -------- | ---------------------- | ---------------------------- | ------ | ------- |
| title    | 标题                   | _&nbsp;&nbsp;ReactNode<br/>_ | -      | `false` |
| border   | 是否显示外边框         | _&nbsp;&nbsp;boolean<br/>_   | true   | `false` |
| inset    | 是否展示为圆角卡片风格 | _&nbsp;&nbsp;boolean<br/>_   | false  | `false` |
| children | -                      | _&nbsp;&nbsp;ReactNode<br/>_ | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                          | 默认值            |
| ----------------------------- | ----------------- |
| --cell-font-size              | ` @font-size-md;` |
| --cell-line-height            | ` 48px;`          |
| --cell-vertical-padding       | ` @padding-sm;`   |
| --cell-horizontal-padding     | ` @padding-md;`   |
| --cell-text-color             | ` @text-color;`   |
| --cell-background-color       | ` @white;`        |
| --cell-border-color           | ` @border-color;` |
| --cell-required-color         | ` @red;`          |
| --cell-label-color            | ` @gray-6;`       |
| --cell-label-font-size        | ` @font-size-sm;` |
| --cell-label-margin-top       | ` 6px;`           |
| --cell-value-color            | ` @gray-6;`       |
| --cell-icon-size              | ` @font-size-lg;` |
| --cell-right-icon-color       | ` @gray-6;`       |
| --cell-large-vertical-padding | ` @padding-sm;`   |
| --cell-large-title-font-size  | ` @font-size-lg;` |
| --cell-large-value-font-size  | ` @font-size-lg;` |
| --cell-large-label-font-size  | ` @font-size-md;` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                             | 默认值                                              |
| -------------------------------- | --------------------------------------------------- |
| --cell-group-background-color    | ` @white;`                                          |
| --cell-group-title-color         | ` @gray-6;`                                         |
| --cell-group-title-padding       | ` @padding-md @padding-md @padding-xs;`             |
| --cell-group-title-font-size     | ` @font-size-md;`                                   |
| --cell-group-title-line-height   | ` 32px;`                                            |
| --cell-group-inset-padding       | ` 0 @padding-md;`                                   |
| --cell-group-inset-border-radius | ` @border-radius-lg;`                               |
| --cell-group-inset-title-padding | ` @padding-md @padding-md @padding-xs @padding-xl;` |
