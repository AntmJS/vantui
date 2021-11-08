# Cell 单元格

### 介绍

单元格为列表中的单个展示项。

### 引入

在 Taro 文件中引入组件

```js
import { Cell } from "vantui";
import { CellGroup } from "vantui"; 
```

## 代码演示

### 基础用法

`Cell`可以单独使用，也可以与`CellGroup`搭配使用。`CellGroup`可以为`Cell`提供上下外边框。

```jsx
<View>
  <CellGroup>
    <Cell
      title="单元格"
      value="内容"
    />
    <Cell
      title="单元格"
      value="内容"
      label="描述信息"
      border={ false }
    />
  </CellGroup>
</View>
 
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格（从 1.7.2 版本开始支持）。

```jsx
<View>
  <CellGroup inset={ true }>
    <Cell
      title="单元格"
      value="内容"
    />
    <Cell
      title="单元格"
      value="内容"
      label="描述信息"
    />
  </CellGroup>
</View>
 
```

### 单元格大小

通过`size`属性可以控制单元格的大小。

```jsx
<View>
  <Cell
    title="单元格"
    value="内容"
    size="large"
  />
  <Cell
    title="单元格"
    value="内容"
    size="large"
    label="描述信息"
  />
</View>
 
```

### 展示图标

通过`icon`属性在标题左侧展示图标。

```jsx
<View>
  <Cell
    title="单元格"
    icon="locationO"
  />
</View>
 
```

### 展示箭头

设置`isLink`属性后会在单元格右侧显示箭头，并且可以通过`arrowDirection`属性控制箭头方向。

```jsx
<View>
  <Cell
    title="单元格"
    isLink={ true }
  />
  <Cell
    title="单元格"
    isLink={ true }
    value="内容"
  />
  <Cell
    title="单元格"
    isLink={ true }
    value="内容"
    arrowDirection="down"
  />
</View>
 
```

### 页面跳转

可以通过`url`属性进行页面跳转，通过`linkType`属性控制跳转类型。

```jsx
<View>
  <Cell
    isLink={ true }
    title="单元格"
    linkType="navigateTo"
    url="/pages/dashboard/index"
  />
</View>
 
```

### 分组标题

通过`CellGroup`的`title`属性可以指定分组标题。

```jsx
<View>
  <CellGroup title="分组1">
    <Cell
      title="单元格"
      value="内容"
    />
  </CellGroup>
  <CellGroup title="分组2">
    <Cell
      title="单元格"
      value="内容"
    />
  </CellGroup>
</View>
 
```

### 自定义渲染内容

如以上用法不能满足你的需求，可以使用`renderTitle`和`renderRightIcon`来渲染内容

```jsx
<View>
  <Cell
    value="内容"
    icon="shop-o"
    isLink
    renderTitle={
      <>
        <View>
          <View className="title">单元格</View>
          <Tag type="danger">标签</Tag>
        </View>
      </>
    }
  ></Cell>
  <Cell
    title="单元格"
    border={false}
    renderRightIcon={
      <>
        <Icon name="search"></Icon>
      </>
    }
  ></Cell>
</View>
 
```

### 垂直居中

通过`center`属性可以让`Cell`的左右内容都垂直居中。

```jsx
<View>
  <Cell
    center={ true }
    title="单元格"
    value="内容"
    label="描述信息"
  />
</View>
 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CellProps extends StandardProps {
  url?: string
  linkType?: 'navigateTo' | 'reLaunch' | 'redirectTo'
  title?: string | number
  value?: string | number
  icon?: string
  size?: 'large'
  label?: string
  center?: boolean
  isLink?: boolean
  required?: boolean
  clickable?: boolean
  titleWidth?: string
  style?: string
  arrowDirection?: 'left' | 'up' | 'down'
  border?: boolean
  titleStyle?: string
  renderTitle?: ReactNode
  renderIcon?: ReactNode
  renderLabel?: ReactNode
  renderRightIcon?: ReactNode
  renderExtra?: ReactNode
  children?: ReactNode | JSX.Element | JSX.Element[]
}

declare const Cell: ComponentClass<CellProps>

export { Cell }
```