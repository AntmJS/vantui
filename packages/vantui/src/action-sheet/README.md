# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

### 引入

在 Taro 文件中引入组件

```js
import { ActionSheet } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

需要传入一个`actions`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

::: $demo1 :::

### 选项状态

选项可以设置为加载状态或禁用状态。

::: $demo2 :::

### 展示取消按钮

设置`cancelText`属性后，会在底部展示取消按钮，点击后关闭当前菜单。

::: $demo3 :::

### 展示描述信息

设置`description`属性后，会在选项上方显示描述信息。

::: $demo4 :::

### 展示标题栏

通过设置`title`属性展示标题栏，同时可以使用插槽自定义菜单内容。

::: $demo5 :::

### 微信开放能力

需要传入一个`actions`的数组，数组的每一项是一个对象，对象属性见文档下方表格。

::: $demo6 :::

### ActionSheetItem [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/action-sheet.d.ts)

| 参数     | 说明 | 类型                         |
| -------- | ---- | ---------------------------- |
| name     | -    | _&nbsp;&nbsp;ReactNode<br/>_ |
| subname  | -    | _&nbsp;&nbsp;ReactNode<br/>_ |
| color    | -    | _&nbsp;&nbsp;string<br/>_    |
| loading  | -    | _&nbsp;&nbsp;boolean<br/>_   |
| disabled | -    | _&nbsp;&nbsp;boolean<br/>_   |

### ActionSheetProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/action-sheet.d.ts)

| 参数                | 说明 | 类型                                                                                                                                                                                                                          | 默认值 | 必填    |
| ------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| actions             | -    | _&nbsp;&nbsp;ActionSheetItem[]<br/>_                                                                                                                                                                                          | -      | `false` |
| title               | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                  | -      | `false` |
| show                | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                    | -      | `false` |
| cancelText          | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                  | -      | `false` |
| description         | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                  | -      | `false` |
| overlay             | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                    | -      | `false` |
| closeOnClickOverlay | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                    | -      | `false` |
| closeOnClickAction  | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                    | -      | `false` |
| safeAreaInsetBottom | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                    | -      | `false` |
| round               | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                    | -      | `false` |
| zIndex              | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                     | -      | `false` |
| children            | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                  | -      | `false` |
| onSelect            | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent&nbsp;&&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;ActionSheetItem<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onCancel            | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                       | -      | `false` |
| onClose             | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                       | -      | `false` |
| onClickOverlay      | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                       | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                    | 默认值                |
| --------------------------------------- | --------------------- |
| --action-sheet-max-height               | ` 90%;`               |
| --action-sheet-header-height            | ` 96px;`              |
| --action-sheet-header-font-size         | ` @font-size-lg;`     |
| --action-sheet-description-color        | ` @gray-6;`           |
| --action-sheet-description-font-size    | ` @font-size-md;`     |
| --action-sheet-description-line-height  | ` 40px;`              |
| --action-sheet-item-background          | ` @white;`            |
| --action-sheet-item-font-size           | ` @font-size-lg;`     |
| --action-sheet-item-line-height         | ` 44px;`              |
| --action-sheet-item-text-color          | ` @text-color;`       |
| --action-sheet-item-disabled-text-color | ` @gray-5;`           |
| --action-sheet-subname-color            | ` @gray-6;`           |
| --action-sheet-subname-font-size        | ` @font-size-sm;`     |
| --action-sheet-subname-line-height      | ` 40px;`              |
| --action-sheet-close-icon-size          | ` 44px;`              |
| --action-sheet-close-icon-color         | ` @gray-5;`           |
| --action-sheet-close-icon-padding       | ` 0 @padding-md;`     |
| --action-sheet-cancel-text-color        | ` @gray-7;`           |
| --action-sheet-cancel-padding-top       | ` @padding-xs;`       |
| --action-sheet-cancel-padding-color     | ` @background-color;` |
