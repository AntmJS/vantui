# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Switch } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Switch
    checked={ this.checked }
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  checked: true
};

function onChange({
  detail
}) {
  // 需要手动对 checked 状态进行更新
  this.setData({
    checked: detail
  });
} 
```

### 禁用状态

```jsx
<View>
  <Switch
    checked={ this.checked }
    disabled={ true }
  />
</View>
 
```

### 加载状态

```jsx
<View>
  <Switch
    checked={ this.checked }
    loading={ true }
  />
</View>
 
```

### 自定义大小

```jsx
<View>
  <Switch
    checked={ this.checked }
    size="24px"
  />
</View>
 
```

### 自定义颜色

```jsx
<View>
  <Switch
    checked={ this.checked }
    activeColor="#07c160"
    inactiveColor="#ee0a24"
  />
</View>
 
```

### 异步控制

```jsx
<View>
  <Switch
    checked={ this.checked }
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  checked: true
};

function onChange({
  detail
}) {
  wx.showModal({
    title: '提示',
    content: '是否切换开关？',
    success: res => {
      if (res.confirm) {
        this.setData({
          checked2: detail
        });
      }
    }
  });
} 
```
### TS信息
```ts 
import { ComponentClass } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface SwitchProps extends StandardProps {
  checked?: boolean
  loading?: boolean
  disabled?: boolean
  activeColor?: string
  inactiveColor?: string
  size?: string
  activeValue?: any
  inactiveValue?: any
  onChange?: (event: ITouchEvent) => any
}

declare const Switch: ComponentClass<SwitchProps>

export { Switch }
```