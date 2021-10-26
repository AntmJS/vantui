# IndexBar 索引栏

### 介绍

用于列表的索引分类显示和快速定位。

### 引入

在 Taro 文件中引入组件

```js
import { IndexBar } from "vantui";
import { IndexAnchor } from "vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的`IndexAnchor`锚点位置。

```jsx
<View>
  <IndexBar>
    <View>
      <IndexAnchor index="A" />
      <Cell title="文本" />
      <Cell title="文本" />
      <Cell title="文本" />
    </View>
    <View>
      <IndexAnchor index="B" />
      <Cell title="文本" />
      <Cell title="文本" />
      <Cell title="文本" />
    </View>
    ...
  </IndexBar>
</View>
 
```

### 自定义索引列表

可以通过`indexList`属性自定义展示的索引字符列表。

```jsx
<View>
  <IndexBar indexList={ `${ this.indexList }` }>
    <View>
      <IndexAnchor index="1">
        标题1
      </IndexAnchor>
      <Cell title="文本" />
      <Cell title="文本" />
      <Cell title="文本" />
    </View>
    <View>
      <IndexAnchor index="2">
        标题2
      </IndexAnchor>
      <Cell title="文本" />
      <Cell title="文本" />
      <Cell title="文本" />
    </View>
    ...
  </IndexBar>
</View>
 
```

```js
this.state = {
  indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}; 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
export interface IndexBarProps extends StandardProps {
  sticky?: boolean
  zIndex?: number
  highlightColor?: string
  stickyOffsetTop?: number
  indexList?: string[] | number[]
  onSelect?: (event: { detail: string | number }) => void
  children?: ReactNode
}
declare const IndexBar: ComponentClass<IndexBarProps>
export { IndexBar }
```