# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

在 Taro 文件中引入组件

```js
import { Stepper } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

通过`value`设置输入值，可以通过`change`事件监听到输入值的变化。

```jsx
function Demo() {
  return <Stepper value={1} />
}
```

```js

```

### 步长设置

通过`step`属性设置每次点击增加或减少按钮时变化的值，默认为`1`。

```jsx
function Demo() {
  return <Stepper value={1} step="2" />
}
```

### 限制输入范围

通过`min`和`max`属性限制输入值的范围。

```jsx
function Demo() {
  return <Stepper value={5} min="5" max="8" />
}
```

### 限制输入整数

设置`integer`属性后，输入框将限制只能输入整数。

```jsx
function Demo() {
  return <Stepper value={1} integer />
}
```

### 禁用状态

通过设置`disabled`属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```jsx
function Demo() {
  return <Stepper value={1} disabled />
}
```

### 关闭长按

通过设置`longPress`属性决定步进器是否开启长按手势。

```jsx
function Demo() {
  return <Stepper value={1} longPress={false} />
}
```

### 固定小数位数

通过设置`decimalLength`属性可以保留固定的小数位数。

```jsx
function Demo() {
  return <Stepper value={1} step="0.2" decimalLength={1} />
}
```

### 异步变更

如果需要异步地修改输入框的值，可以设置`asyncChange`属性，并在`change`事件中手动修改`value`。

```jsx
function Demo() {
  const [value, setValue] = react.useState()
  function onChange(value) {
    Toast.loading({
      forbidClick: true,
    })
    setTimeout(() => {
      Toast.clear()
      setValue(value.detail)
    }, 1000)
  }

  return (
    <>
      <Stepper value={value} asyncChange onChange={onChange} />
      <Toast />
    </>
  )
}
```

### 自定义大小

通过`inputWidth`属性设置输入框宽度，通过`buttonSize`属性设置按钮大小和输入框高度。

```jsx
function Demo() {
  return <Stepper value={1} inputWidth="40px" buttonSize="32px" />
}
```

### StepperProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/stepper.d.ts)

| 参数          | 说明 | 类型                                                                                                                                             | 默认值 | 必填    |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| name          | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                     | -      | `false` |
| value         | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                              | -      | `false` |
| integer       | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| disabled      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| inputWidth    | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                              | -      | `false` |
| buttonSize    | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                              | -      | `false` |
| asyncChange   | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| disableInput  | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| decimalLength | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                        | -      | `false` |
| min           | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                              | -      | `false` |
| max           | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                              | -      | `false` |
| step          | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                              | -      | `false` |
| showPlus      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| showMinus     | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| disablePlus   | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| disableMinus  | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| longPress     | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| theme         | -    | _&nbsp;&nbsp;"round"<br/>_                                                                                                                       | -      | `false` |
| alwaysEmbed   | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                       | -      | `false` |
| onFocus       | -    | _&nbsp;&nbsp;CommonEventFunction<InputProps.inputForceEventDetail><br/>_                                                                         | -      | `false` |
| onChange      | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onBlur        | -    | _&nbsp;&nbsp;CommonEventFunction<InputProps.inputForceEventDetail><br/>_                                                                         | -      | `false` |
| onOverlimit   | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                          | -      | `false` |
| onPlus        | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                          | -      | `false` |
| onMinus       | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                          | -      | `false` |
| renderMinus   | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                     | -      | `false` |
| renderPlus    | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                     | -      | `false` |
