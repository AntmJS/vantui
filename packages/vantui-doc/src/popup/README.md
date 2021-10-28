# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

在 Taro 文件中引入组件

```js
import { Popup } from "vantui"; 
```

## 代码演示

### 基础用法

通过`show`属性控制弹出层是否展示。

```jsx
<View>
  <Cell
    title="展示弹出层"
    isLink={ true }
    onClick={ showPopup }
  />
  <Popup
    show={ `${ this.show }` }
    onClose={ this.onClose }
  >
    内容
  </Popup>
</View>
 
```

```js
this.state = {
  show: false
};

function showPopup() {
  this.setState({
    show: true
  });
}

function onClose() {
  this.setState({
    show: false
  });
} 
```

### 弹出位置

通过`position`属性设置弹出位置，默认居中弹出，可以设置为`top`、`bottom`、`left`、`right`。

```jsx
<View>
  <Popup
    show={ `${ this.show }` }
    position="top"
    customStyle="height: 20%;"
    onClose={ this.onClose }
  />
</View>
 
```

### 关闭图标

设置`closeable`属性后，会在弹出层的右上角显示关闭图标，并且可以通过`closeIcon`属性自定义图标，使用`closeIconPosition`属性可以自定义图标位置。

```jsx
<View>
  <Popup
    show={ `${ this.show }` }
    closeable={ true }
    position="bottom"
    customStyle="height: 20%"
    onClose={ this.onClose }
  /> {/*  自定义图标  */}
  <Popup
    show={ `${ this.show }` }
    closeable={ true }
    closeIcon="close"
    position="bottom"
    customStyle="height: 20%"
    onClose={ this.onClose }
  /> {/*  图标位置  */}
  <Popup
    show={ `${ this.show }` }
    closeable={ true }
    closeIconPosition="topLeft"
    position="bottom"
    customStyle="height: 20%"
    onClose={ this.onClose }
  />
</View>
 
```

### 圆角弹窗

设置`round`属性后，弹窗会根据弹出位置添加不同的圆角样式。

```jsx
<View>
  <Popup
    show={ `${ this.show }` }
    round={ true }
    position="bottom"
    customStyle="height: 20%"
    onClose={ this.onClose }
  />
</View>
 
```

### 禁止滚动穿透

使用组件时，会发现内容部分滚动到底时，继续划动会导致底层页面的滚动，这就是滚动穿透。

目前，组件可以通过 `lockScroll` 属性处理部分滚动穿透问题。 **但由于小程序自身原因，弹窗内容区域仍会出现滚动穿透。** 不过，我们为开发者提供了一个推荐方案以完整解决滚动穿透：

#### [pageMeta](https://developers.weixin.qq.com/miniprogram/dev/component/pageMeta.html)

当小程序基础库最低版本在 2.9.0 以上时，即可使用 [pageMeta](https://developers.weixin.qq.com/miniprogram/dev/component/pageMeta.html) 组件动态修改页面样式

```jsx
<View>
  {/*  pageMeta 只能是页面内的第一个节点  */}
  <pageMeta pageStyle={ `${ show ? 'overflow: hidden;' : '' }` } />
  <Popup show={ `${ this.show }` } />
</View>
 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
import { TransitionProps } from './mixins/transition'
import { OverlayProps } from './overlay'

export interface PopupProps
  extends TransitionProps,
    StandardProps,
    OverlayProps {
  round?: boolean
  closeable?: boolean
  overlayStyle?: string
  transition?: string
  zIndex?: number
  overlay?: boolean
  closeIcon?: string
  closeIconPosition?: string
  closeOnClickOverlay?: boolean
  position?: 'top' | 'bottom' | 'right' | 'left'
  safeAreaInsetBottom?: boolean
  safeAreaInsetTop?: boolean
  children?: ReactNode
  onClickOverlay?: () => void
  onClose?: () => void
}

declare const Popup: ComponentClass<PopupProps>

export { Popup }
```