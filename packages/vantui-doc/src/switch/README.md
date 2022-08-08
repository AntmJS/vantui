# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Switch } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```jsx
function Demo() {
  const [value, setValue] = react.useState(false)
  return <Switch checked={value} onChange={(e) => setValue(e.detail)} />
}
```

### 禁用状态

```jsx
function Demo() {
  return <Switch disbled />
}
```

### 加载状态

```jsx
function Demo() {
  return <Switch loading checked={true} />
}
```

### 自定义大小

```jsx
function Demo() {
  const [value, setValue] = react.useState(false)
  return (
    <Switch size="32px" checked={value} onChange={(e) => setValue(e.detail)} />
  )
}
```

### 自定义颜色

```jsx
function Demo() {
  const [value, setValue] = react.useState(false)
  return (
    <Switch
      activeColor="#07c160"
      inactiveColor="#ee0a24"
      checked={value}
      onChange={(e) => setValue(e.detail)}
    />
  )
}
```

### 异步控制

```jsx
function Demo() {
  const [value, setValue] = react.useState(false)

  const action = (e) => {
    Dialog.confirm({
      selector: '#switch-demo',
      title: '提示',
      message: '是否切换开关？',
    })
      .then(() => {
        setValue(e.detail)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <>
      <Dialog id="switch-demo" />
      <Switch checked={value} onChange={action} />
    </>
  )
}
```

### SwitchProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/switch.d.ts)

| 参数          | 说明 | 类型                                                                                                        | 默认值 | 必填    |
| ------------- | ---- | ----------------------------------------------------------------------------------------------------------- | ------ | ------- |
| checked       | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                  | -      | `false` |
| loading       | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                  | -      | `false` |
| disabled      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                  | -      | `false` |
| activeColor   | -    | _&nbsp;&nbsp;string<br/>_                                                                                   | -      | `false` |
| inactiveColor | -    | _&nbsp;&nbsp;string<br/>_                                                                                   | -      | `false` |
| size          | -    | _&nbsp;&nbsp;string<br/>_                                                                                   | -      | `false` |
| activeValue   | -    | _&nbsp;&nbsp;any<br/>_                                                                                      | -      | `false` |
| inactiveValue | -    | _&nbsp;&nbsp;any<br/>_                                                                                      | -      | `false` |
| onChange      | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | -      | `false` |
