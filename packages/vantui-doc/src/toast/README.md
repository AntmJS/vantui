# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 引入

在 Taro 文件中引入组件

```js
import { Toast } from "vantui"; 
```

## 代码演示

### 文字提示

```javascript
import Toast from 'path/to/@vant/weapp/dist/toast/toast';

Toast('我是提示文案，建议不超过十五字~');
```

```jsx
<View>
  <Toast id="vanToast" />
</View>
 
```

### 加载提示

使用 `Toast.loading` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击，通过 `loadingType` 属性可以自定义加载图标类型。

```javascript
Toast.loading({
  message: '加载中...',
  forbidClick: true,
});

// 自定义加载图标
Toast.loading({
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner',
});
```

### 成功/失败提示

```javascript
Toast.success('成功文案');
Toast.fail('失败文案');
```

### 动态更新提示

```javascript
const toast = Toast.loading({
  duration: 0, // 持续展示 toast
  forbidClick: true,
  message: '倒计时 3 秒',
  selector: '#customSelector',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.setData({
      message: `倒计时 ${second} 秒`,
    });
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);
```

```jsx
<View>
  <Toast id="customSelector" />
</View>
 
```

### OnClose 回调函数

```javascript
Toast({
  type: 'success',
  message: '提交成功',
  onClose: () => {
    console.log('执行OnClose函数');
  },
});
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
import toast from '../src/components/toast/toast'

export interface ToastProps extends StandardProps {
  zIndex?: number
  duration?: number
  mask?: boolean
  forbidClick?: boolean
  type?: string
  position?: 'top' | 'middle' | 'bottom'
  message?: string
  loadingType?: 'circular' | 'spinner' | undefined
  selector?: string
  children?: ReactNode
  onClose?: () => any
}

interface toastProps {
  show: (options: ToastProps | string) => any
  loading: (options: ToastProps | string) => any
  success: (options: ToastProps | string) => any
  fail: (options: ToastProps | string) => any
  clear: (options?: ToastProps) => void
  setDefaultOptions: (options: ToastProps) => void
  resetDefaultOptions: (options: any) => void
}

declare const Toast: ComponentClass<ToastProps> & toastProps

export { Toast, toast }
```