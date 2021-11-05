# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

### 引入

在 Taro 文件中引入组件

```js
import { Dialog } from "vantui"; 
```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮。

```jsx
<View>
  <Dialog id="vanDialog" />
</View>
 
```

```javascript
import { dialog } from 'vantui';

dialog.alert({
  title: '标题',
  message: '弹窗内容',
}).then(() => {
  // on close
});

dialog.alert({
  message: '弹窗内容',
}).then(() => {
  // on close
});
```

### 消息确认

用于确认消息，包含取消和确认按钮。

```jsx
<View>
  <Dialog id="vanDialog" />
</View>
 
```

```javascript
import { dialog } from 'vantui';

dialog.confirm({
  title: '标题',
  message: '弹窗内容',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 圆角按钮风格

将 theme 选项设置为 `roundButton` 可以展示圆角按钮风格的弹窗。

```jsx
<View>
  <Dialog id="vanDialog" />
</View>
 
```

```javascript
import { dialog } from 'vantui';

dialog.alert({
  title: '标题',
  message: '弹窗内容',
  theme: 'roundButton',
}).then(() => {
  // on close
});

dialog.alert({
  message: '弹窗内容',
  theme: 'roundButton',
}).then(() => {
  // on close
});
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```jsx
<View>
  <Dialog id="vanDialog" />
</View>
 
```

```javascript
import { dialog } from 'vantui';

const beforeClose = (action) => new Promise((resolve) => {
  setTimeout(() => {
    if (action === 'confirm') {
      resolve(true);
    } else {
      // 拦截取消操作
      resolve(false);
    }
  }, 1000);
});

dialog.confirm({
  title: '标题',
  message: '弹窗内容'
  beforeClose
});
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```jsx
<View>
  <Dialog
    title="标题"
    show={ this.state.show }
    showCancelButton={ true }
    confirmButtonOpenType="getUserInfo"
    onClose={ this.onClose }
    onGetuserinfo={ getUserInfo }
  >
    <Image src="https://img.yzcdn.cn/1.jpg" />
  </Dialog>
</View>
 
```

```js
this.state = {
  show: true
};

function getUserInfo(event) {
  console.log(event.detail);
}

function onClose() {
  this.setState({
    show: false
  });
} 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

import { ButtonProps } from './button'
import { PopupProps } from './popup'
export interface DialogProps
  extends StandardProps,
    Omit<PopupProps, 'onClose'>,
    Omit<ButtonProps, 'children'> {
  show?: boolean
  title?: string
  width?: string | number
  zIndex?: number
  theme?: 'round-button'
  cancelButtonColor?: string
  confirmButtonColor?: string
  onConfirm?: (event: {
    detail: { action: string; dialog?: { dialog: any } }
  }) => void
  onCancel?: (event: {
    detail: { action: string; dialog?: { dialog: any } }
  }) => void
  onClose?: (event: { detail: string }) => void
  message?: string
  overlay?: boolean
  selector?: string
  ariaLabel?: string
  className?: string
  style?: string
  transition?: 'fade' | 'none'
  /**
   * @deprecated use beforeClose instead
   */
  asyncClose?: boolean
  beforeClose?: (action: string) => Promise<void | boolean> | void | boolean
  messageAlign?: 'left' | 'right'
  confirmButtonText?: string
  cancelButtonText?: string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  closeOnClickOverlay?: boolean
  confirmButtonOpenType?: string
  renderTitle?: ReactNode
}

interface dialog {
  alert(options: DialogProps): Promise<void>
  confirm(options: DialogProps): Promise<void>
  setDefaultOptions(options: DialogProps): void
  resetDefaultOptions(): void
  close(): void
  stopLoading(): void
}

// & DialogCom
declare const Dialog: ComponentClass<DialogProps> & dialog

export { Dialog, dialog }
```