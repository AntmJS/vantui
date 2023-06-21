# Layout 布局

### 介绍

Layout 提供了`vanRow`和`vanCol`两个组件来进行行列布局。

### 引入

在 Taro 文件中引入组件

```js
import { Row, Col } from '@antmjs/vantui'
```

## 代码演示

### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比。此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同。

::: $demo1 :::

### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0。

::: $demo2 :::

### ColProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/col.d.ts)

| 参数     | 说明                                         | 类型                                                | 默认值 | 必填    |
| -------- | -------------------------------------------- | --------------------------------------------------- | ------ | ------- |
| span     | 列元素宽度                                   | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | -      | `true`  |
| offset   | 列元素偏移距离                               | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | -      | `false` |
| gutter   | 列元素之间的间距（单位为 px）, 从 Row 上获取 | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | -      | `false` |
| children | -                                            | _&nbsp;&nbsp;React.ReactNode<br/>_                  | -      | `true`  |

### Row Props [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/col.d.ts)

| 参数     | 说明                                                                        | 类型                                                                                                                                                                                                                                                       | 默认值 | 必填    |
| -------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| gutter   | 列元素之间的间距（如查输入数字：单位为 px，如果输入字符串，可使用单位 rpx） | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;[number,&nbsp;number]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;[string,&nbsp;string]<br/>_ | -      | `false` |
| children | -                                                                           | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                                                         | -      | `true`  |
