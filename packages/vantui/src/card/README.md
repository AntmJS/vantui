# Card 商品卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息。

### 引入

在 Taro 文件中引入组件

```js
import { Card } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 高级用法

可以通过插槽添加定制内容。

::: $demo2 :::

### CardProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/card.d.ts)

| 参数              | 说明 | 类型                                          | 默认值 | 必填    |
| ----------------- | ---- | --------------------------------------------- | ------ | ------- |
| tag               | -    | _&nbsp;&nbsp;string<br/>_                     | -      | `false` |
| num               | -    | _&nbsp;&nbsp;string<br/>_                     | -      | `false` |
| desc              | -    | _&nbsp;&nbsp;string<br/>_                     | -      | `false` |
| thumb             | -    | _&nbsp;&nbsp;string<br/>_                     | -      | `false` |
| title             | -    | _&nbsp;&nbsp;string<br/>_                     | -      | `false` |
| price             | -    | _&nbsp;&nbsp;string<br/>_                     | -      | `true`  |
| centered          | -    | _&nbsp;&nbsp;boolean<br/>_                    | -      | `false` |
| lazyLoad          | -    | _&nbsp;&nbsp;boolean<br/>_                    | -      | `false` |
| thumbLink         | -    | _&nbsp;&nbsp;string<br/>_                     | -      | `false` |
| originPrice       | -    | _&nbsp;&nbsp;string<br/>_                     | -      | `false` |
| thumbMode         | -    | _&nbsp;&nbsp;keyof&nbsp;ImageProps.Mode<br/>_ | -      | `false` |
| currency          | -    | _&nbsp;&nbsp;string<br/>_                     | -      | `false` |
| renderFooter      | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderBottom      | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderNum         | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderOriginPrice | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderPrice       | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderPriceTop    | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderTags        | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderDesc        | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderTitle       | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderTag         | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |
| renderThumb       | -    | _&nbsp;&nbsp;ReactNode<br/>_                  | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                           | 默认值                         |
| ------------------------------ | ------------------------------ |
| --card-padding                 | ` @padding-xs @padding-md;`    |
| --card-font-size               | ` @font-size-sm;`              |
| --card-text-color              | ` @text-color;`                |
| --card-background-color        | ` @background-color-light;`    |
| --card-thumb-size              | ` 176px;`                      |
| --card-title-line-height       | ` 32px;`                       |
| --card-desc-color              | ` @gray-7;`                    |
| --card-desc-line-height        | ` 40px;`                       |
| --card-price-color             | ` @red;`                       |
| --card-origin-price-color      | ` @gray-7;`                    |
| --card-origin-price-font-size  | ` @font-size-xs;`              |
| --card-price-font-size         | ` @font-size-sm;`              |
| --card-price-integer-font-size | ` @font-size-lg;`              |
| --card-price-font-family       | ` @price-integer-font-family;` |
