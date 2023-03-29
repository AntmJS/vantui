# Notify 消息提示

### 介绍

在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

### 引入

在 Taro 文件中引入组件

```js
import { Notify } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```js
import { Notify } from 'vantui'
```

```jsx
function Demo() {
  const show = () => Notify.show('通知内容')

  return (
    <View>
      {/*  在页面内添加对应的节点  */}
      <Button onClick={show} type="danger">
        基础用法
      </Button>
      <Notify id="vanNotify" />
    </View>
  )
}
```

### 通知类型

支持`primary`、`success`、`warning`、`danger`四种通知类型，默认为`danger`。

```jsx
function Demo() {
  const primaryShow = () => {
    Notify.show({
      message: '-----通知内容-----',
      type: 'primary',
    })
  }

  const successShow = () => {
    Notify.show({
      message: '-----通知内容-----',
      type: 'success',
    })
  }

  const dangerShow = () => {
    Notify.show({
      message: '-----通知内容-----',
      type: 'danger',
    })
  }

  const warningShow = () => {
    Notify.show({
      message: '-----通知内容-----',
      type: 'warning',
    })
  }

  return (
    <View>
      <Button onClick={primaryShow} type="info">
        主要通知
      </Button>
      <Button onClick={successShow} type="primary">
        成功通知
      </Button>
      <Button onClick={dangerShow} type="danger">
        危险通知
      </Button>
      <Button onClick={warningShow} type="warning">
        警告用法
      </Button>
      <Notify id="vanNotify" />
    </View>
  )
}
```

### 自定义通知

自定义消息通知的颜色和展示时长。

```jsx
function Demo() {
  const show = () => {
    Notify.show({
      message: '自定义颜色',
      color: '#ad0000',
      background: '#ffe1e1',
      duration: 10000,
    })
  }

  return (
    <View>
      <Button onClick={show} type="primary">
        自定义颜色和时长
      </Button>
      <Notify id="vanNotify" />
    </View>
  )
}
```

### 自定义选择器

```jsx
function Demo() {
  const show = () => {
    Notify.show({
      message: '自定义节点选择器',
      duration: 1000,
      selector: '#customSelector',
    })
  }

  return (
    <View>
      <Button onClick={show} type="primary">
        自定义选择器
      </Button>
      <Notify id="customSelector" />
    </View>
  )
}
```

### NotifyProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/notify.d.ts)

| 参数             | 说明 | 类型                                                                                                | 默认值 | 必填    |
| ---------------- | ---- | --------------------------------------------------------------------------------------------------- | ------ | ------- |
| selector         | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| message          | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                        | -      | `false` |
| background       | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| type             | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| color            | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| duration         | -    | _&nbsp;&nbsp;number<br/>_                                                                           | -      | `false` |
| zIndex           | -    | _&nbsp;&nbsp;number<br/>_                                                                           | -      | `false` |
| safeAreaInsetTop | -    | _&nbsp;&nbsp;boolean<br/>_                                                                          | -      | `false` |
| top              | -    | _&nbsp;&nbsp;number<br/>_                                                                           | -      | `false` |
| id               | -    | _&nbsp;&nbsp;string<br/>_                                                                           | -      | `false` |
| onClick          | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;data:&nbsp;any<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onOpened         | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                             | -      | `false` |
| onClose          | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                             | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                              | 默认值        |
| --------------------------------- | ------------- |
| --notify-padding                  | ` 12px 30px;` |
| --notify-font-size                | ` 28px;`      |
| --notify-line-height              | ` 40px;`      |
| --notify-primary-background-color | ` @blue;`     |
| --notify-success-background-color | ` @green;`    |
| --notify-danger-background-color  | ` @red;`      |
| --notify-warning-background-color | ` @orange;`   |
