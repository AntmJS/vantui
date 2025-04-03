# IndexBar 索引栏

### 介绍

用于列表的索引分类显示和快速定位。

### 引入

在 Taro 文件中引入组件

```js
import { IndexBar, IndexAnchor } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的`IndexAnchor`锚点位置。
不要将 IndexBar 放置在含有 css 动画元素里面，会导致 IndexAnchor 定位失效

::: $demo1 :::

### 自定义索引列表

可以通过`indexList`属性自定义展示的索引字符列表。

```jsx
<View>
  <IndexBar indexList={[1,2,...]}>
    <IndexAnchor index="1">标题1</IndexAnchor>
    <Cell title="文本" />
    <Cell title="文本" />
    <Cell title="文本" />
    <IndexAnchor index="2">标题2</IndexAnchor>
    <Cell title="文本" />
    <Cell title="文本" />
    <Cell title="文本" />
    ...
  </IndexBar>
</View>
```

### IndexBarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/index-bar.d.ts)

| 参数            | 说明                                                                                                                      | 类型                                                                                                                                                                                                                                 | 默认值  | 必填    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------- |
| sticky          | 是否开启锚点自动吸顶                                                                                                      | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | true    | `false` |
| zIndex          | z-index 层级                                                                                                              | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                            | 1       | `false` |
| highlightColor  | 索引字符高亮颜色                                                                                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                            | #07c160 | `false` |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离                                                                                                | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                            | 0       | `false` |
| indexList       | 索引字符列表                                                                                                              | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number[]<br/>_                                                                                                       | A-Z     | `false` |
| onSelect        | 选中字符时触发                                                                                                            | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -       | `false` |
| children        | -                                                                                                                         | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                         | -       | `false` |
| rectWrapper     | 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的 className(‘.xx’)或 id(#xx), 支持当前组件获取 rect 信息 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                            | -       | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                             | 默认值            |
| -------------------------------- | ----------------- |
| --index-bar-index-font-size      | ` @font-size-xs;` |
| --index-bar-index-line-height    | ` 28px;`          |
| --index-bar-index-popup-width    | ` 70vw;`          |
| --index-bar-index-sidebar-zindex | ` 9999;`          |
