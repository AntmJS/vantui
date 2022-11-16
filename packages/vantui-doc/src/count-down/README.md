# CountDown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 引入

在 Taro 文件中引入组件

```js
import { CountDown } from '@antmjs/vantui'
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)。

## 代码演示

### 基本用法

`time`属性表示倒计时总时长，单位为毫秒。

```jsx
function Demo() {
  const [value, setValue] = react.useState(30 * 60 * 60 * 1000)

  return <CountDown time={value} />
}
```

### 自定义格式

通过`format`属性设置倒计时文本的内容。

```jsx
function Demo() {
  const [value, setValue] = react.useState(30 * 60 * 60 * 1000)

  return <CountDown time={value} format="DD 天 HH 时 mm 分 ss 秒" />
}
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置`millisecond`属性可以开启毫秒级渲染。

```jsx
function Demo() {
  const [value, setValue] = react.useState(30 * 60 * 60 * 1000)

  return <CountDown millisecond time={value} format="HH:mm:ss:SSS" />
}
```

### 自定义样式

通过`onChange`事件获取`timeData`对象并自行渲染，格式见下方表格。

```jsx
function Demo() {
  const [value, setValue] = react.useState(30 * 60 * 60 * 1000)
  const [timeData, setTimeData] = react.useState({})

  return (
    <CountDown time={value} onChange={(e) => setTimeData({ ...e.detail })}>
      <Text style={{ color: 'blue' }}>{timeData.hours}</Text>时
      <Text style={{ color: 'green' }}>{timeData.minutes}</Text>分
      <Text style={{ color: 'red' }}>{timeData.seconds}</Text>秒
    </CountDown>
  )
}
```

### 手动控制

通过 `ref` 选择器获取到组件实例后，可以调用`start`、`pause`、`reset`方法。

```jsx
function Demo() {
  const it = react.useRef()

  return (
    <View>
      <Toast id="controlCountDown-mess" />
      <CountDown
        onChange={(e) => console.info(e)}
        ref={(el) => (it.current = el)}
        class="controlCountDown"
        millisecond
        time={4000}
        autoStart={false}
        format="ss:SSS"
        onFinish={() => Toast.show('end')}
      />
      <Grid clickable columnNum="3">
        <GridItem
          text="开始"
          icon="play-circle-o"
          onClick={() => it.current.start()}
        />
        <GridItem
          text="暂停"
          icon="pause-circle-o"
          onClick={() => it.current.pause()}
        />
        <GridItem
          text="重置"
          icon="replay"
          onClick={() => {
            console.info(it)
            it.current.reset()
          }}
        />
      </Grid>
    </View>
  )
}
```

### ICountDownRef [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/count-down.d.ts)

| 参数  | 说明 | 类型                                    |
| ----- | ---- | --------------------------------------- |
| start | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| pause | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| reset | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |

### ITimeData [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/count-down.d.ts)

| 参数         | 说明 | 类型                      |
| ------------ | ---- | ------------------------- |
| days         | -    | _&nbsp;&nbsp;number<br/>_ |
| hours        | -    | _&nbsp;&nbsp;number<br/>_ |
| minutes      | -    | _&nbsp;&nbsp;number<br/>_ |
| seconds      | -    | _&nbsp;&nbsp;number<br/>_ |
| milliseconds | -    | _&nbsp;&nbsp;number<br/>_ |

### CountDownProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/count-down.d.ts)

| 参数        | 说明 | 类型                                                                                                                                                                     | 默认值 | 必填    |
| ----------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| millisecond | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                               | -      | `false` |
| time        | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                | -      | `false` |
| format      | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                | -      | `false` |
| autoStart   | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                               | -      | `false` |
| children    | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                             | -      | `false` |
| onChange    | -    | _&nbsp;&nbsp;(timeData:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;ITimeData<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_                                             | -      | `false` |
| onFinish    | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                  | -      | `false` |
| ref         | -    | _&nbsp;&nbsp;React.MutableRefObject<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ICountDownRef<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;undefined<br/>&nbsp;&nbsp;><br/>_ | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                     | 默认值            |
| ------------------------ | ----------------- |
| --count-down-text-color  | ` @text-color;`   |
| --count-down-font-size   | ` @font-size-md;` |
| --count-down-line-height | ` 40px;`          |
