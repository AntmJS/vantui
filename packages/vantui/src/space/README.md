# Space 间距

元素排列中保持相同的宽度。

### 介绍

适用于多个元素按照水平或垂直方向保持相同的间距。

### 基础用法

wrap 换行属性默认开启

::: $demo1 :::

### 垂直方向

::: $demo2 :::

### 设置间距

::: $demo3 :::

### 主轴对齐方式

::: $demo4 :::

### 交叉轴对齐方式

::: $demo5 :::

### SpaceProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/space.d.ts)

| 参数          | 说明                         | 类型                                                                                                                                                                                                                                                                                                                                                                                        | 默认值       | 必填    |
| ------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
| direction     | 间距方向                     | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"horizontal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"vertical"<br/>_                                                                                                                                                                                                                                                        | 'horizontal' | `false` |
| align         | 交叉轴对其方式               | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"start"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"end"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"center"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"baseline"<br/>_                                                                                                                                                          | -            | `false` |
| justify       | 水平轴对其方式               | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"start"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"end"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"center"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"between"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"around"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"evenly"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"stretch"<br/>_ | -            | `false` |
| wrap          | 是否换行                     | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                  | false        | `false` |
| block         | 是否渲染为块级元素           | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                  | false        | `false` |
| gap           | 间距设置，同时设置水平和垂直 | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                   | -            | `false` |
| gapVertical   | 垂直间距设置                 | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                   | -            | `false` |
| gapHorizontal | 水平间距设置                 | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                   | -            | `false` |
| children      | -                            | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                | -            | `false` |
| style         | -                            | _&nbsp;&nbsp;React.CSSProperties<br/>_                                                                                                                                                                                                                                                                                                                                                      | -            | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                   | 默认值  |
| ---------------------- | ------- |
| --space-gap            | ` 8px;` |
| --space-gap-vertical   | ` 8px;` |
| --space-gap-horizontal | ` 8px;` |
