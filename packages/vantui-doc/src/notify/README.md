# Notify 消息提示

### 介绍

在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

### 引入

在 Taro 文件中引入组件

```js
import { Notify } from "vantui"; 
```

## 代码演示

### 基础用法

```js
import { Notify } from 'vantui';

Notify.show('通知内容');
```

```jsx
<View>
  {/*  在页面内添加对应的节点  */}
  <Notify id="vanNotify" />
</View>
 
```

### 通知类型

支持`primary`、`success`、`warning`、`danger`四种通知类型，默认为`danger`。

```js
// 主要通知
Notify.show({ type: 'primary', message: '通知内容' });

// 成功通知
Notify.show({ type: 'success', message: '通知内容' });

// 危险通知
Notify.show({ type: 'danger', message: '通知内容' });

// 警告通知
Notify.show({ type: 'warning', message: '通知内容' });
```

### 自定义通知

自定义消息通知的颜色和展示时长。

```js
Notify.show({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1',
});

Notify.show({
  message: '自定义时长',
  duration: 1000,
});
```

### 自定义选择器

```js
Notify.show({
  message: '自定义节点选择器',
  duration: 1000,
  selector: '#customSelector',
});
```

```jsx
<View>
  {/*  在页面内添加自定义节点  */}
  <Notify id="customSelector" />
</View>
 
```
### TS信息
```ts 
import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
import notify from '../src/notify/notify'

export interface NotifyProps extends StandardProps {
  selector?: string
  message?: string
  background?: string
  type?: string
  color?: string
  duration?: number
  zIndex?: number
  safeAreaInsetTop?: boolean
  top?: number
  id?: string
  onClick?: (data: any) => void
  onOpened?: () => void
  onClose?: () => void
}

interface notifyProps {
  show: (options: NotifyProps | string) => any
  clear: (options?: NotifyProps) => any
}

declare const Notify: ComponentClass<NotifyProps> & notifyProps

export { Notify, notify }
```