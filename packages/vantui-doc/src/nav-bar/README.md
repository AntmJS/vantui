# NavBar 导航栏

### 介绍

为页面提供导航功能，常用于页面顶部。

### 引入

在 Taro 文件中引入组件

```js
import { NavBar } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <NavBar
    title="标题"
    leftText="返回"
    rightText="按钮"
    leftArrow={ true }
    onClickLeft={ onClickLeft }
    onClickRight={ this.onClickRight }
  />
</View>
 
```

```js
function onClickRight() {
  wx.showToast({
    title: '点击按钮',
    icon: 'none'
  });
} 
```

### 高级用法

```jsx
<View>
  <NavBar
    title="标题"
    leftText="返回"
    leftArrow={ true }
    renderRight={
      <Block>
        <Icon name="search" className="icon" size="36"></Icon>
      </Block>
    }
  >
  </NavBar>
</View>
 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface NavBarProps extends StandardProps {
  title?: string
  fixed?: boolean
  placeholder?: boolean
  leftText?: string
  rightText?: string
  style?: string
  leftArrow?: boolean
  border?: boolean
  zIndex?: number
  safeAreaInsetTop?: boolean
  renderTitle?: ReactNode
  renderLeft?: ReactNode
  renderRight?: ReactNode
  onClickLeft?: (e: ITouchEvent) => void
  onClickRight?: (e: ITouchEvent) => void
}

declare const NavBar: ComponentClass<NavBarProps>

export interface MiniNavBarProps extends StandardProps {
  homeUrl: string
  buttonColor?: 'white' | 'black'
  title?: string
  fixed?: boolean
  placeholder?: boolean
  style?: string
  border?: boolean
  zIndex?: number
  renderTitle?: ReactNode
}

declare const MiniNavBar: ComponentClass<MiniNavBarProps>

export { NavBar, MiniNavBar }
```