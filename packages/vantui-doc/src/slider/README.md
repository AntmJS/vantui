# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 引入

在 Taro 文件中引入组件

```js
import { Slider } from "vantui"; 
```

## 代码演示

### 基本用法

```jsx
<View>
  <Slider
    value="50"
    onChange={ onChange }
  />
</View>
 
```

```js
 
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```jsx
<View>
  <Slider
    value={ `${ 10, 50 }` }
    range={ true }
    change="onChange"
  />
</View>
 
```

```js
 
```

### 指定选择范围

```jsx
<View>
  <Slider
    min="-50"
    max="50"
  />
</View>
 
```

### 禁用

```jsx
<View>
  <Slider
    value="50"
    disabled={ true }
  />
</View>
 
```

### 指定步长

```jsx
<View>
  <Slider
    value="50"
    step="10"
  />
</View>
 
```

### 自定义样式

```jsx
<View>
  <Slider
    value="50"
    barHeight="4px"
    activeColor="#ee0a24"
  />
</View>
 
```

### 自定义按钮

```jsx
<View>
  <Slider
    value={ `${ this.currentValue }` }
    onDrag={ this.onDrag }
    renderButton={ (
      <View
        class="customButton"
      >
        { currentValue }/100
      </View>
    )}
  />
</View>
 
```

```js
this.state = {
  currentValue: 50
};

function onDrag(event) {
  this.setData({
    currentValue: event.detail.value
  });
} 
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

```jsx
<View>
  <View style="height: 150px;">
    <Slider
      value="50"
      vertical={ true }
      onChange={ onChange }
    />
    <Slider
      value={ `${ [10, 50] }` }
      range={ true }
      vertical={ true }
      style="marginLeft: 100px;"
      onChange={ onChange }
    />
  </View>
</View>
 
```

```js
 
```
### TS信息
```ts 
import React, { ComponentClass } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

type SliderEvent = {
  detail: {
    value: number
  }
}
export interface SliderProps extends StandardProps {
  range?: boolean
  disabled?: boolean
  activeColor?: string
  inactiveColor?: string
  max?: number
  min?: number
  step?: number
  value?: number
  barHeight?: number | string
  vertical?: boolean
  onDrag?: (e: ITouchEvent & SliderEvent) => void
  onChange?: (e: ITouchEvent & SliderEvent) => void
  onDragStart?: () => void
  onDragEnd?: () => void
  renderLeftButton?: (value: number) => React.ReactNode
  renderRightButton?: (value: number) => React.ReactNode
  renderButton?: (value: number) => React.ReactNode
}

declare const Slider: ComponentClass<SliderProps>

export { Slider }
```