# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

### 引入

在 Taro 文件中引入组件

```js
import { NoticeBar } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <NoticeBar
    leftIcon="volumeO"
    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  />
</View>
 
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

```jsx
<View>
  {/*  文字较短时，通过设置 scrollable 属性开启滚动播放  */}
  <NoticeBar
    scrollable={ true }
    text="技术是开发它的人的共同灵魂。"
  /> {/*  文字较长时，通过禁用 scrollable 属性关闭滚动播放  */}
  <NoticeBar
    scrollable={ `${ false }` }
    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  />
</View>
 
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```jsx
<View>
  <NoticeBar
    wrapable={ true }
    scrollable={ `${ false }` }
    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  />
</View>
 
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```jsx
<View>
  {/*  closeable 模式，在右侧显示关闭按钮  */}
  <NoticeBar
    mode="closeable"
    text="技术是开发它的人的共同灵魂。"
  /> {/*  link 模式，在右侧显示链接箭头  */}
  <NoticeBar
    mode="link"
    text="技术是开发它的人的共同灵魂。"
  />
</View>
 
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```jsx
<View>
  <NoticeBar
    color="#1989fa"
    background="#ecf9ff"
    leftIcon="infoO"
    text="技术是开发它的人的共同灵魂。"
  />
</View>
 
```

### 自定义滚动速率

使用`speed`属性控制滚动速率。

```jsx
<View>
  <NoticeBar
    text={ `${ text }` }
    speed={ `${speedValue}` }
    leftIcon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
  />
</View>
 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface NoticeBarProps extends StandardProps {
  text?: string
  mode?: 'closeable' | 'link'
  url?: string
  openType?: any
  delay?: number
  speed?: number
  scrollable?: boolean
  leftIcon?: string
  color?: string
  backgroundColor?: string
  background?: string
  wrapable?: boolean
  children?: ReactNode
  renderLeftIcon?: ReactNode
  renderRightIcon?: ReactNode
  onClick?: (event: ITouchEvent) => any
  onClose?: (event: ITouchEvent) => any
}

declare const NoticeBar: ComponentClass<NoticeBarProps>

export { NoticeBar }
```