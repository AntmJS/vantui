# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

在 Taro 文件中引入组件

```js
import { Stepper } from "vantui"; 
```

## 代码演示

### 基础用法

通过`value`设置输入值，可以通过`change`事件监听到输入值的变化。

```jsx
<View>
  <Stepper
    value={ `${ 1 }` }
    onChange={ this.onChange }
  />
</View>
 
```

```js
 
```

### 步长设置

通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为`1`。

```jsx
<View>
  <Stepper
    value={ `${ 1 }` }
    step="2"
  />
</View>
 
```

### 限制输入范围

通过`min`和`max`属性限制输入值的范围。

```jsx
<View>
  <Stepper
    value={ `${ 5 }` }
    min="5"
    max="8"
  />
</View>
 
```

### 限制输入整数

设置`integer`属性后，输入框将限制只能输入整数。

```jsx
<View>
  <Stepper
    value={ `${ 1 }` }
    integer={ true }
  />
</View>
 
```

### 禁用状态

通过设置`disabled`属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```jsx
<View>
  <Stepper
    value={ `${ 1 }` }
    disabled={ true }
  />
</View>
 
```

### 关闭长按

通过设置`longPress`属性决定步进器是否开启长按手势。

```jsx
<View>
  <Stepper
    value={ `${ 1 }` }
    longPress={ `${ false }` }
  />
</View>
 
```

### 固定小数位数

通过设置`decimalLength`属性可以保留固定的小数位数。

```jsx
<View>
  <Stepper
    value={ `${ 1 }` }
    step="0.2"
    decimalLength={ `${ 1 }` }
  />
</View>
 
```

### 异步变更

如果需要异步地修改输入框的值，可以设置`asyncChange`属性，并在`change`事件中手动修改`value`。

```jsx
<View>
  <Stepper
    value={ `${ this.value }` }
    asyncChange={ true }
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  value: 1
};

function onChange(value) {
  Toast.loading({
    forbidClick: true
  });
  setTimeout(() => {
    Toast.clear();
    this.setState({
      value
    });
  }, 500);
} 
```

### 自定义大小

通过`inputWidth`属性设置输入框宽度，通过`buttonSize`属性设置按钮大小和输入框高度。

```jsx
<View>
  <Stepper
    value={ `${ 1 }` }
    inputWidth="40px"
    buttonSize="32px"
  />
</View>
 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps, CommonEventFunction } from '@tarojs/components'
import { InputProps } from '@tarojs/components/types/Input'

export interface StepperProps extends StandardProps {
  name?: string
  value?: string | number
  integer?: boolean
  disabled?: boolean
  inputWidth?: string | number
  buttonSize?: string | number
  asyncChange?: boolean
  disableInput?: boolean
  decimalLength?: number
  min?: string | number
  max?: string | number
  step?: string | number
  showPlus?: boolean
  showMinus?: boolean
  disablePlus?: boolean
  disableMinus?: boolean
  longPress?: boolean
  theme?: 'round'
  onFocus?: CommonEventFunction<InputProps.inputForceEventDetail>
  onChange?: (event: { detail: number | string }) => void
  onBlur?: CommonEventFunction<InputProps.inputForceEventDetail>
  onOverlimit?: () => void
  onPlus?: () => void
  onMinus?: () => void
  renderMinus?: ReactNode
  renderPlus?: ReactNode
}
// Partial
declare const Stepper: ComponentClass<StepperProps>

export { Stepper }
```