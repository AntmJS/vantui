# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

### 引入

在 Taro 文件中引入组件

```js
import { Loading } from "vantui"; 
```

## 代码演示

### 加载类型

```jsx
<View>
  <Loading />
  <Loading type="spinner" />
</View>
 
```

### 自定义颜色

```jsx
<View>
  <Loading color="#1989fa" />
  <Loading
    type="spinner"
    color="#1989fa"
  />
</View>
 
```

### 加载文案

```jsx
<View>
  <Loading size="24px">
    加载中...
  </Loading>
</View>
 
```

### 垂直排列

```jsx
<View>
  <Loading
    size="24px"
    vertical={ true }
  >
    加载中...
  </Loading>
</View>
 
```
### TS信息
```ts 
import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
export interface LoadingProps extends StandardProps {
  color?: string
  vertical?: boolean
  type?: 'spinner' | 'circular'
  size?: string | number
  textSize?: string | number
  children?: React.ReactNode
}

declare const Loading: ComponentClass<LoadingProps>

export { Loading }
```