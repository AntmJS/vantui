# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

在 Taro 文件中引入组件

```js
import {
  Button,
  MiniLoginButton,
  MiniPhoneButton,
  MiniUserButton,
} from '@antmjs/vantui'
```

## 代码演示

### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`。

```jsx
function Demo() {
  return (
    <View>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </View>
  )
}
```

### 朴素按钮

通过`plain`属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```jsx
function Demo() {
  return (
    <View>
      <Button plain type="primary">
        朴素按钮
      </Button>
      <Button plain type="info">
        朴素按钮
      </Button>
    </View>
  )
}
```

### 细边框

设置`hairline`属性可以开启 0.5px 边框，基于伪类实现。

```jsx
function Demo() {
  return (
    <View>
      <Button plain hairline type="primary">
        细边框按钮
      </Button>
      <Button plain hairline type="info">
        细边框按钮
      </Button>
    </View>
  )
}
```

### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮的`onClick`事件不会触发。

```jsx
function Demo() {
  return (
    <View>
      <Button disabled type="primary">
        禁用状态
      </Button>
      <Button disabled type="info">
        禁用状态
      </Button>
    </View>
  )
}
```

### 加载状态

```jsx
function Demo() {
  return (
    <View>
      <Button loading type="primary" />
      <Button loading type="primary" loadingType="spinner" />
      <Button loading type="info" loadingText="加载中..." />
    </View>
  )
}
```

### 按钮形状

```jsx
function Demo() {
  return (
    <View>
      <Button square type="primary">
        方形按钮
      </Button>
      <Button round type="info">
        圆形按钮
      </Button>
    </View>
  )
}
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```jsx
function Demo() {
  return (
    <View>
      <Button icon="starO" type="primary" />
      <Button icon="starO" type="primary">
        按钮
      </Button>
      <Button
        icon="https://antm-js.gitee.io/resource/antmjs-vantui.jpg"
        type="info"
      >
        按钮
      </Button>
    </View>
  )
}
```

### 按钮尺寸

支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`。

```jsx
function Demo() {
  return (
    <View>
      <Button type="primary" size="large">
        大号按钮
      </Button>
      <Button type="primary" size="normal">
        普通按钮
      </Button>
      <Button type="primary" size="small">
        小型按钮
      </Button>
      <Button type="primary" size="mini">
        迷你按钮
      </Button>
    </View>
  )
}
```

### 块级元素

通过`block`属性可以将按钮的元素类型设置为块级元素。

```jsx
function Demo() {
  return (
    <View>
      <Button type="primary" block>
        块级元素
      </Button>
    </View>
  )
}
```

### 自定义颜色

通过`color`属性可以自定义按钮的颜色。

```jsx
function Demo() {
  return (
    <View>
      <Button color="#7232dd">单色按钮</Button>
      <Button color="#7232dd" plain>
        单色按钮
      </Button>
      <Button color="linear-gradient(to right, #4bb0ff, #6149f6)">
        渐变色按钮
      </Button>
    </View>
  )
}
```

### ButtonProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/button.d.ts)

| 参数        | 说明                 | 类型                                                                                                                                                                                                                                                                                     | 默认值 | 必填    |
| ----------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| icon        | 传入 Icon 的 name 值 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| classPrefix | -                    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| type        | -                    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"default"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"primary"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"info"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"warning"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"danger"<br/>_ | -      | `false` |
| size        | -                    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"small"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"normal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"large"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"mini"<br/>_                                                         | -      | `false` |
| block       | -                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| round       | -                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| square      | -                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| loading     | -                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| hairline    | -                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| disabled    | -                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                               | -      | `false` |
| loadingText | -                    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                             | -      | `false` |
| loadingSize | -                    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| loadingType | -                    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"spinner"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"circular"<br/>_                                                                                                                                                        | -      | `false` |
| color       | -                    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                | -      | `false` |
| children    | -                    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                             | -      | `false` |
