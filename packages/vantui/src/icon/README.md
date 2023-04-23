# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。

### 引入

在 Taro 文件中引入组件

```js
import { Icon } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

- `Icon`的`name`属性支持传入图标名称或图片链接。
- 设置`dot`属性后，会在图标右上角展示一个小红点。设置`info`属性后，会在图标右上角展示相应的徽标。
- 设置`color`属性来控制图标颜色。
- 设置`size`属性来控制图标大小。
- 如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。例如，可以在 `app.less` 文件中引入。

```jsx
function Demo() {
  return (
    <>
      <Row>
        <View className="demo-block__title">基本用法</View>
        <Col className="col" span="6">
          <Icon name="chat-o" size="32px" className="icon"></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon
            name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
            size="32px"
            className="icon"
          ></Icon>
        </Col>
      </Row>
      <Row>
        <View className="demo-block__title">提示信息</View>
        <Col className="col" span="6">
          <Icon name="chat-o" size="32px" className="icon" dot></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon name="chat-o" size="32px" className="icon" info="9"></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon name="chat-o" size="32px" className="icon" info="99+"></Icon>
        </Col>
      </Row>
      <Row>
        <View className="demo-block__title">图标颜色</View>
        <Col className="col" span="6">
          <Icon
            color="#1989fa"
            name="chat-o"
            size="32px"
            className="icon"
          ></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon
            color="#07c160"
            name="chat-o"
            size="32px"
            className="icon"
          ></Icon>
        </Col>
      </Row>
      <Row>
        <View className="demo-block__title">图标大小</View>
        <Col className="col" span="6">
          <Icon name="chat-o" size="40" className="icon"></Icon>
        </Col>
        <Col className="col" span="6">
          <Icon name="chat-o" size="3rem" className="icon"></Icon>
        </Col>
      </Row>

      <Row>
        <View className="demo-block__title">自定义图标</View>
        <Col className="col" span="6">
          <Icon name="demo1" classPrefix="page-icon" size="40px" />
        </Col>
        <Col className="col" span="6">
          <Icon name="demo2" classPrefix="page-icon" size="40px" />
        </Col>
        <Col className="col" span="6">
          <Icon name="demo3" classPrefix="page-icon" size="40px" />
        </Col>
      </Row>
    </>
  )
}
```

引入第三方或自定义的字体图标样式

```css
@font-face {
  font-family: 'iconfont';
  src: url('data: charset=utf-8;base64, .......') format('truetype');
}

.page-icon {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-icon-demo1::before {
  content: '\ea3c';
}

.page-icon-demo2::before {
  content: '\ea3d';
}

.page-icon-demo3::before {
  content: '\ea3e';
}
```

### 基础图标

```jsx
import icons from '@vant/icons'
function Demo() {
  return (
    <>
      {icons.basic.map((name, i) => (
        <Col
          key={i}
          span="6"
          style={{ paddingTop: '20px', paddingBottom: '20px' }}
        >
          <Icon name={name} size="32px" />
          <Text>{name}</Text>
        </Col>
      ))}
    </>
  )
}
```

### 线框图标

```jsx
import icons from '@vant/icons'
function Demo() {
  return (
    <>
      {icons.outline.map((name, i) => (
        <Col
          key={i}
          span="6"
          style={{ paddingTop: '20px', paddingBottom: '20px', height: '100px' }}
        >
          <Icon name={name} size="32px" />
          <Text style={{ textAlign: 'center' }}>{name}</Text>
        </Col>
      ))}
    </>
  )
}
```

### 实心图标

```jsx
import icons from '@vant/icons'
function Demo() {
  return (
    <>
      {icons.filled.map((name, i) => (
        <Col
          key={i}
          span="6"
          style={{ paddingTop: '20px', paddingBottom: '20px', height: '100px' }}
        >
          <Icon name={name} size="32px" />
          <Text style={{ textAlign: 'center' }}>{name}</Text>
        </Col>
      ))}
    </>
  )
}
```

### IconProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/icon.d.ts)

| 参数        | 说明                         | 类型                                                                                                                              | 默认值                         | 必填    |
| ----------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------- |
| dot         | 是否显示图标右上角小红点     | _&nbsp;&nbsp;boolean<br/>_                                                                                                        | -                              | `false` |
| info        | 图标右上角文字提示           | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                               | false                          | `false` |
| size        | 图标大小，如 20px，单位为 px | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                               | -                              | `false` |
| color       | 图标颜色                     | _&nbsp;&nbsp;string<br/>_                                                                                                         | -                              | `false` |
| style       | 自定义样式                   | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;CSSProperties<br/>_ | -                              | `false` |
| classPrefix | 类名前缀                     | _&nbsp;&nbsp;string<br/>_                                                                                                         | vant-icon 传空字符串可去除前缀 | `false` |
| name        | 图标名称或图片链接           | _&nbsp;&nbsp;string<br/>_                                                                                                         | -                              | `false` |
