# IndexBar 索引栏

### 介绍

用于列表的索引分类显示和快速定位。

### 引入

在 Taro 文件中引入组件

```js
import { IndexBar } from "@antmjs/vantui";
import { IndexAnchor } from "@antmjs/vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的`IndexAnchor`锚点位置。

```jsx
<View>
  <IndexBar>
    <IndexAnchor index="A" />
    <Cell title="文本" />
    <Cell title="文本" />
    <Cell title="文本" />
    <IndexAnchor index="B" />
    <Cell title="文本" />
    <Cell title="文本" />
    <Cell title="文本" />
    ...
  </IndexBar>
</View>
 
```

### 自定义索引列表

可以通过`indexList`属性自定义展示的索引字符列表。

```jsx
<View>
  <IndexBar indexList={ this.state.indexList }>
    <IndexAnchor index="1">
      标题1
    </IndexAnchor>
    <Cell title="文本" />
    <Cell title="文本" />
    <Cell title="文本" />
    <IndexAnchor index="2">
      标题2
    </IndexAnchor>
    <Cell title="文本" />
    <Cell title="文本" />
    <Cell title="文本" />
    ...
  </IndexBar>
</View>
 
```

```js
this.state = {
  indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}; 
```
### IndexBarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/index-bar.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| sticky | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| zIndex | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| highlightColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| stickyOffsetTop | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| indexList | - | _&nbsp;&nbsp;string[]&nbsp;&brvbar;&nbsp;number[]<br/>_ | - | `false` |
| onSelect | - | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

