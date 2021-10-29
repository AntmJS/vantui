# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 引入

在 Taro 文件中引入组件

```js
import { Divider } from "vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)。

## 代码演示

### 基础用法

```jsx
<View>
  <Divider />
</View>
 
```

### 使用 hairline

```jsx
<View>
  <Divider hairline={ true } />
</View>
 
```

### 虚线

```jsx
<View>
  <Divider dashed={ true } />
</View>
 
```

### 文本位置

```jsx
<View>
  <Divider contentPosition="center">
    文本
  </Divider>
  <Divider contentPosition="left">
    文本
  </Divider>
  <Divider contentPosition="right">
    文本
  </Divider>
</View>
 
```

### 自定义属性

```jsx
<View>
  <Divider
    contentPosition="center"
    textColor="#1989fa"
  >
    文本颜色
  </Divider>
  <Divider
    contentPosition="center"
    borderColor="#1989fa"
  >
    border 颜色
  </Divider>
  <Divider
    contentPosition="center"
    fontSize="18"
  >
    字体大小
  </Divider>
</View>
 
```

### 自定义样式

```jsx
<View>
  <Divider
    contentPosition="center"
    style="color: #1989fa; borderColor: #1989fa; fontSize: 18px;"
  >
    文本
  </Divider>
</View>
 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface DividerProps extends StandardProps {
  dashed?: boolean
  hairline?: boolean
  contentPosition?: 'left' | 'center' | 'right'
  fontSize?: string
  borderColor?: string
  textColor?: string
  children?: ReactNode
}

declare const Divider: ComponentClass<DividerProps>

export { Divider }
```