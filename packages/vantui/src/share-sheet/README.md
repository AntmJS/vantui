# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

### 引入

在 Taro 文件中引入组件

```js
import { ShareSheet } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

::: $demo1 :::

### 展示多行选项

当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。

::: $demo2 :::

### 自定义图标

除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标。

::: $demo3 :::

### 展示描述信息

通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。

::: $demo4 :::

### ShareSheetOptionItem [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/share-sheet.d.ts)

[object Object]
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| name | - | _&nbsp;&nbsp;string<br/>_ |
| icon | - | _&nbsp;&nbsp;string<br/>_ |
| description | - | _&nbsp;&nbsp;string<br/>_ |
| openType | - | _&nbsp;&nbsp;string<br/>_ |

### ShareSheetProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/share-sheet.d.ts)

| 参数                | 说明                   | 类型                                                                                                                                                         | 默认值 | 必填    |
| ------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| show                | 是否展示               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                   | -      | `false` |
| overlayStyle        | 蒙层样式               | _&nbsp;&nbsp;string<br/>_                                                                                                                                    | -      | `false` |
| zIndex              | 蒙层样式               | _&nbsp;&nbsp;number<br/>_                                                                                                                                    | 2      | `false` |
| title               | 标题                   | _&nbsp;&nbsp;string<br/>_                                                                                                                                    | -      | `false` |
| overlay             | 是否展示蒙层           | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                   | -      | `false` |
| safeAreaInsetBottom | 是否开启底部安全区适配 | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                   | -      | `false` |
| closeOnClickOverlay | 是否点击关闭蒙层       | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                   | -      | `false` |
| duration            | 动画时间（ms）         | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                          | 300    | `false` |
| onClickOverlay      | -                      | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                      | -      | `false` |
| onCancel            | -                      | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                      | -      | `false` |
| onSelect            | -                      | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;ShareSheetOptionItem<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_                         | -      | `false` |
| onClose             | -                      | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                      | -      | `false` |
| renderTitle         | 自定义渲染标题         | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                 | -      | `false` |
| renderDescription   | 自定义渲染内容         | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                 | -      | `false` |
| cancelText          | 取消按钮名称           | _&nbsp;&nbsp;string<br/>_                                                                                                                                    | -      | `false` |
| description         | 描述                   | _&nbsp;&nbsp;string<br/>_                                                                                                                                    | -      | `false` |
| options             | 选项                   | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ShareSheetOptionItem[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ShareSheetOptionItem[][]<br/>_ | -      | `false` |

### ShareSheetOptionItem [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/share-sheet.d.ts)

| 参数        | 说明                                                   | 类型                         |
| ----------- | ------------------------------------------------------ | ---------------------------- |
| name        | 名称                                                   | _&nbsp;&nbsp;string<br/>_    |
| icon        | 图标，可以是`url`                                      | _&nbsp;&nbsp;string<br/>_    |
| renderIcon  | 自定义 icon 位置渲染，可以覆盖 icon 属性               | _&nbsp;&nbsp;ReactNode<br/>_ |
| description | 秒速                                                   | _&nbsp;&nbsp;string<br/>_    |
| openType    | 按钮 `open-type`，可用于实现分享功能，可选值为 `share` | _&nbsp;&nbsp;string<br/>_    |

### ShareSheetOption [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/share-sheet.d.ts)

| 参数       | 说明 | 类型                                                                                                                                                                   |
| ---------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showBorder | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                             |
| options    | -    | _&nbsp;&nbsp;ShareSheetOptionItem[]<br/>_                                                                                                                              |
| onSelect   | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;option:&nbsp;ShareSheetOptionItem,<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                       | 默认值                                    |
| ------------------------------------------ | ----------------------------------------- |
| --share-sheet-header-padding               | ` @padding-sm @padding-md @padding-base;` |
| --share-sheet-title-color                  | ` @text-color;`                           |
| --share-sheet-title-font-size              | ` @font-size-md;`                         |
| --share-sheet-title-line-height            | ` @line-height-md;`                       |
| --share-sheet-description-color            | ` @gray-6;`                               |
| --share-sheet-description-font-size        | ` @font-size-sm;`                         |
| --share-sheet-description-line-height      | ` 32px;`                                  |
| --share-sheet-icon-size                    | ` 96px;`                                  |
| --share-sheet-option-name-color            | ` @gray-7;`                               |
| --share-sheet-option-name-font-size        | ` @font-size-sm;`                         |
| --share-sheet-option-description-color     | ` @gray-5;`                               |
| --share-sheet-option-description-font-size | ` @font-size-sm;`                         |
| --share-sheet-cancel-button-font-size      | ` @font-size-lg;`                         |
| --share-sheet-cancel-button-height         | ` 96px;`                                  |
| --share-sheet-cancel-button-background     | ` @white;`                                |
