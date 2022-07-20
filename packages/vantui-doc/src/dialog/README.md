# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

> 注意：1.8.0 以下的版本取消按钮会触发 catch。1.8.0 及以后的版本取消按钮会触发 then 需要通过返回的 value 为 confirm 或者 cancel 来判断是否点了确认还是取消

### 引入

在 Taro 文件中引入组件

```js
import { Dialog } from '@antmjs/vantui'
```

## 代码演示

### 提示弹窗

- alart 用于提示一些消息，只包含一个确认按钮。
- confirm 用于确认消息，包含取消和确认按钮。

```jsx
function Demo() {
  const [value, setValue] = react.useState('')
  const alert = react.useCallback((title) => {
    Dialog.alert({
      title: title || '',
      message: '弹窗内容',
      selector: 'vanDialog0',
    }).then((value) => {
      console.log('dialog result', value)
    })
  })

  const confirm = react.useCallback(() => {
    Dialog.confirm({
      title: '标题',
      message: (
        <Input
          placeholder="请输入内容"
          value={value}
          onChange={(e) => setValue(e.detail.value)}
        />
      ),
      selector: 'vanDialog0',
    }).then((value) => {
      console.log('dialog result', value)
    })
  }, [value])

  return (
    <View>
      <Dialog id="vanDialog0" />
      <Cell title="提示弹窗" onClick={() => alert('提示一下')} />
      <Cell title="提示弹窗（无标题）" onClick={() => alert()} />
      <Cell title="确认弹窗" onClick={confirm} />
    </View>
  )
}
```

### 圆角按钮风格

将 theme 选项设置为 `roundButton` 可以展示圆角按钮风格的弹窗。

```jsx
function Demo() {
  const alert = react.useCallback((title) => {
    Dialog.alert({
      title: title || '',
      message: '弹窗内容',
      theme: 'roundButton',
      selector: '#vanDialog1',
    }).then((value) => {
      console.log('dialog result', value)
    })
  })

  return (
    <View>
      <Dialog id="vanDialog1" />
      <Cell title="提示弹窗" onClick={() => alert('提示一下')} />
      <Cell title="提示弹窗（无标题）" onClick={() => alert()} />
    </View>
  )
}
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```jsx
function Demo() {
  const alert = react.useCallback((title) => {
    const beforeClose = (action) =>
      new Promise((resolve) => {
        setTimeout(() => {
          if (action === 'confirm') {
            resolve(true)
          } else {
            // 拦截取消操作
            resolve(false)
          }
        }, 1000)
      })
    Dialog.alert({
      title: title || '',
      message: '弹窗内容',
      theme: 'roundButton',
      selector: 'vanDialog2',
      beforeClose,
    }).then((value) => {
      console.log('dialog result', value)
    })
  })

  return (
    <View>
      <Dialog id="vanDialog2" />
      <Cell title="异步关闭" onClick={() => alert('点击等待1s关闭')} />
    </View>
  )
}
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```jsx
function Demo() {
  const [show, setShow] = react.useState(false)
  const [value, setValue] = react.useState('')

  return (
    <View>
      <Dialog
        id="vanDialog3"
        title="标题"
        showCancelButton
        confirmButtonOpenType="getUserInfo"
        show={show}
        onClose={() => setShow(false)}
      >
        <Input placeholder="请输入内容" onChange={(e) => setValue(e.detail)} />
        <Image
          className="demo-image"
          height="240px"
          src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
        ></Image>
      </Dialog>
      <Cell title="组件调用" onClick={() => setShow(true)} />
    </View>
  )
}
```

### DialogProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dialog.d.ts)

| 参数                  | 说明 | 类型                                                                                                                                                                                                                                                                                             | 默认值 | 必填    |
| --------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| show                  | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                       | -      | `false` |
| title                 | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                     | -      | `false` |
| width                 | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                                                                              | -      | `false` |
| zIndex                | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                        | -      | `false` |
| theme                 | -    | _&nbsp;&nbsp;"round-button"<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| cancelButtonColor     | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                        | -      | `false` |
| confirmButtonColor    | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                        | -      | `false` |
| onConfirm             | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dialog?:&nbsp;{&nbsp;dialog:&nbsp;any&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onCancel              | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dialog?:&nbsp;{&nbsp;dialog:&nbsp;any&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onClose               | -    | _&nbsp;&nbsp;(event:&nbsp;{&nbsp;detail:&nbsp;string&nbsp;})&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                             | -      | `false` |
| message               | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                     | -      | `false` |
| overlay               | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                       | -      | `false` |
| selector              | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                        | -      | `false` |
| ariaLabel             | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                        | -      | `false` |
| className             | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                        | -      | `false` |
| style                 | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                        | -      | `false` |
| transition            | -    | _&nbsp;&nbsp;"fade"&nbsp;&brvbar;&nbsp;"none"<br/>_                                                                                                                                                                                                                                              | -      | `false` |
| asyncClose            | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                       | -      | `false` |
| beforeClose           | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;action:&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<void&nbsp;&brvbar;&nbsp;boolean>&nbsp;&brvbar;&nbsp;void&nbsp;&brvbar;&nbsp;boolean<br/>_                                                                                                  | -      | `false` |
| messageAlign          | -    | _&nbsp;&nbsp;"left"&nbsp;&brvbar;&nbsp;"right"<br/>_                                                                                                                                                                                                                                             | -      | `false` |
| confirmButtonText     | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                     | -      | `false` |
| cancelButtonText      | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                     | -      | `false` |
| showConfirmButton     | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                       | -      | `false` |
| showCancelButton      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                       | -      | `false` |
| closeOnClickOverlay   | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                       | -      | `false` |
| confirmButtonOpenType | -    | _&nbsp;&nbsp;TaroButtonProps.openType<br/>_                                                                                                                                                                                                                                                      | -      | `false` |
| renderTitle           | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                     | -      | `false` |
