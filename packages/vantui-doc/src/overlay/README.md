# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

在 Taro 文件中引入组件

```js
import { Overlay } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Button
    type="primary"
    onClick={ this.onClickShow }
  >
    显示遮罩层
  </Button>
  <Overlay
    show={ this.show }
    onClick={ this.onClickHide }
  />
</View>
 
```

```js
this.state = {
  show: false
};

function onClickShow() {
  this.setData({
    show: true
  });
}

function onClickHide() {
  this.setData({
    show: false
  });
} 
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```jsx
<View>
  <Button
    type="primary"
    onClick={ this.onClickShow }
  >
    嵌入内容
  </Button>
  <Overlay
    show={ this.show }
    onClick={ this.onClickHide }
  >
    <View class="wrapper">
      <View class="block" />
    </View>
  </Overlay>
</View>
 
```

```js
this.state = {
  show: false
};

function onClickShow() {
  this.setData({
    show: true
  });
}

function onClickHide() {
  this.setData({
    show: false
  });
}

function noop() {} 
```

```css
.wrapper {
  display: flex;
  alignItems: center;
  justifyContent: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  backgroundColor: #fff;
}
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| zIndex | zIndex 层级 | _string \| number_ | `1` |
| duration | 动画时长，单位秒 | _string \| number_ | `0.3` |
| className | 自定义类名 | _string_ | - |
| customStyle | 自定义样式 | _string_ | - |
| lockScroll `v1.7.3` | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | true |

### Events

| 事件名     | 说明       | 回调参数 |
| ---------- | ---------- | -------- |
| onClick | 点击时触发 | -        |
### TS信息
```ts 
import { StandardProps } from '@tarojs/components'
import { ComponentClass, ReactNode } from 'react'
export interface OverlayProps extends StandardProps {
  show?: boolean
  lockScroll?: boolean
  zIndex?: string | number
  duration?:
    | string
    | number
    | { enter: string | number; leave: string | number }
  children?: ReactNode
}
declare const Overlay: ComponentClass<OverlayProps>

export { Overlay }
```