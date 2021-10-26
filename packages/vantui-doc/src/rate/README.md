# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

在 Taro 文件中引入组件

```js
import { Rate } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Rate
    value={ this.value }
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  value: 3
};

function onChange(event) {
  this.setData({
    value: event.detail
  });
} 
```

### 自定义图标

```jsx
<View>
  <Rate
    value={ this.value }
    icon="like"
    voidIcon="likeO"
    onChange={ this.onChange }
  />
</View>
 
```

### 自定义样式

```jsx
<View>
  <Rate
    value={ this.value }
    size={ 25 }
    color="#ffd21e"
    voidIcon="star"
    voidColor="#eee"
    onChange={ this.onChange }
  />
</View>
 
```

### 半星

```jsx
<View>
  <Rate
    value={ this.value }
    allowHalf={ true }
    voidIcon="star"
    voidColor="#eee"
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  value: 2.5
};

function onChange(event) {
  this.setData({
    value: event.detail
  });
} 
```

### 自定义数量

```jsx
<View>
  <Rate
    value={ this.value }
    count={ 6 }
    onChange={ this.onChange }
  />
</View>
 
```

### 禁用状态

```jsx
<View>
  <Rate
    disabled={ true }
    value={ this.value }
    onChange={ this.onChange }
  />
</View>
 
```

### 只读状态

```jsx
<View>
  <Rate
    readonly={ true }
    value={ this.value }
    onChange={ this.onChange }
  />
</View>
 
```

### 监听 change 事件

评分变化时，会触发 `change` 事件。

```jsx
<View>
  <Rate
    value={ this.value }
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  value: 2
};

function onChange(event) {
  Toast('当前值：' + event.detail);
} 
```
### TS信息
```ts 
import { ComponentClass } from 'react'
import { StandardProps, ITouchEvent } from '@tarojs/components'

export interface RateProps extends StandardProps {
  value?: number
  defaultValue?: number
  readonly?: boolean
  disabled?: boolean
  allowHalf?: boolean
  size?: string | number
  icon?: string
  voidIcon?: string
  color?: string
  voidColor?: string
  disabledColor?: string
  count?: number
  gutter?: string | number
  touchable?: boolean
  onChange?: (e: ITouchEvent) => any
}

declare const Rate: ComponentClass<RateProps>

export { Rate }
```