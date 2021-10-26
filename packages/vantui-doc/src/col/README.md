# Layout 布局

### 介绍

Layout 提供了`vanRow`和`vanCol`两个组件来进行行列布局。

### 引入

在 Taro 文件中引入组件

```js
import { Row } from "vantui";
import { Col } from "vantui"; 
```

## 代码演示

### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比。此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同。

```jsx
<View>
  <Row>
    <Col span="8">
      span: 8
    </Col>
    <Col span="8">
      span: 8
    </Col>
    <Col span="8">
      span: 8
    </Col>
  </Row>
  <Row>
    <Col span="4">
      span: 4
    </Col>
    <Col
      span="10"
      offset="4"
    >
      offset: 4, span: 10
    </Col>
  </Row>
  <Row>
    <Col
      offset="12"
      span="12"
    >
      offset: 12, span: 12
    </Col>
  </Row>
</View>
 
```

### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0。

```jsx
<View>
  <Row gutter="20">
    <Col span="8">
      span: 8
    </Col>
    <Col span="8">
      span: 8
    </Col>
    <Col span="8">
      span: 8
    </Col>
  </Row>
</View>
 
```
### TS信息
```ts 
import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface ColProps extends StandardProps {
  span: number | string
  offset?: number | string
  gutter?: number | string
  children: React.ReactNode
}

declare const Col: ComponentClass<ColProps>

export { Col }
```