# Skeleton 骨架屏

### 介绍

用于在内容加载过程中展示一组占位图形。

### 引入

在 Taro 文件中引入组件

```js
import { Skeleton } from "vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

通过`title`属性显示标题占位图，通过`row`属性配置占位段落行数。

```jsx
<View>
  <Skeleton
    title={ true }
    row="3"
  />
</View>
 
```

### 显示头像

通过`avatar`属性显示头像占位图。

```jsx
<View>
  <Skeleton
    title={ true }
    avatar={ true }
    row="3"
  />
</View>
 
```

### 展示子组件

将`loading`属性设置成`false`表示内容加载完成，此时会隐藏占位图，并显示`Skeleton`的子组件。

```jsx
<View>
  <Skeleton
    title={ true }
    avatar={ true }
    row="3"
    loading={ `${ this.loading }` }
  >
    <View>
      实际内容
    </View>
  </Skeleton>
</View>
 
```

```js
this.state = {
  loading: true
};

function onReady() {
  this.setData({
    loading: false
  });
} 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface SkeletonProps extends StandardProps {
  row?: number
  title?: boolean
  avatar?: boolean
  loading?: boolean
  animate?: boolean
  avatarSize?: string | number
  avatarShape?: 'square' | 'round'
  titleWidth?: string | number
  rowWidth?: string | string[]
  children?: ReactNode
}

declare const Skeleton: ComponentClass<SkeletonProps>

export { Skeleton }
```