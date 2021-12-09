# Transition 动画

### 介绍

使元素从一种样式逐渐变化为另一种样式的效果。

### 引入

在 Taro 文件中引入组件

```js
import { Transition } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

将元素包裹在 transition 组件内，在元素展示/隐藏时，会有相应的过渡动画。

```jsx
<View>
  <Transition
    show={ this.state.show }
    className="block"
  >
    内容
  </Transition>
</View>
 
```

### 动画类型

transition 组件内置了多种动画，可以通过`name`字段指定动画类型。

```jsx
<View>
  <Transition name="fadeUp" />
</View>
 
```

### 高级用法

可以通过外部样式类自定义过渡效果，还可以定制进入和移出的持续时间。

```jsx
<View>
  <Transition
    show={ this.state.show }
    name=""
    duration={ { enter: 300, leave: 1000 } }
    enterClass="vanEnterClass"
    enterActiveClass="vanEnterActiveClass"
    leaveActiveClass="vanLeaveActiveClass"
    leaveToClass="vanLeaveToClass"
  />
</View>
 
```

```css
.vanEnterActiveClass,
.vanLeaveActiveClass {
  transitionProperty: backgroundColor, transform;
}

.vanEnterClass,
.vanLeaveToClass {
  backgroundColor: red;
  transform: rotate(-360deg) translate3d(-100%, -100%, 0);
}
```
### TransitionPropsCom [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/transition.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

