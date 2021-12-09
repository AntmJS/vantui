# CountDown 倒计时

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 引入

在 Taro 文件中引入组件

```js
import { CountDown } from "@antmjs/vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)。

## 代码演示

### 基本用法

`time`属性表示倒计时总时长，单位为毫秒。

```jsx
<View>
  <CountDown time={ this.state.time } />
</View>
 
```

```js
this.state = {
  time: 30 * 60 * 60 * 1000
}; 
```

### 自定义格式

通过`format`属性设置倒计时文本的内容。

```jsx
<View>
  <CountDown
    time={ this.state.time }
    format="DD 天 HH 时 mm 分 ss 秒"
  />
</View>
 
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置`millisecond`属性可以开启毫秒级渲染。

```jsx
<View>
  <CountDown
    millisecond={ true }
    time={ this.state.time }
    format="HH:mm:ss:SSS"
  />
</View>
 
```

### 自定义样式

通过`onChange`事件获取`timeData`对象并自行渲染，格式见下方表格。

```jsx
<View>
  <CountDown
    time={ this.state.time }
    onChange={ this.onChange }
  >
    <Text class="item">
      { timeData.hours }
    </Text>
    <Text class="item">
      { timeData.minutes }
    </Text>
    <Text class="item">
      { timeData.seconds }
    </Text>
  </CountDown>
</View>
 
```

```js
this.state = {
  time: 30 * 60 * 60 * 1000,
  timeData: {}
};

function onChange(e) {
  this.setState({
    timeData: e.detail
  });
} 
```

```css
.item {
  display: inlineBlock;
  width: 22px;
  marginRight: 5px;
  color: #fff;
  fontSize: 12px;
  textAlign: center;
  backgroundColor: #1989fa;
  borderRadius: 2px;
}
```

### 手动控制

通过 `selectComponent` 选择器获取到组件实例后，可以调用`start`、`pause`、`reset`方法。

```jsx
<View>
  <CountDown
    class="controlCountDown"
    millisecond={ true }
    time={ 3000 }
    autoStart={ false }
    format="ss:SSS"
    onFinish={ finished }
  />
  <Grid
    clickable={ true }
    columnNum="3"
  >
    <GridItem
      text="开始"
      icon="playCircleO"
      bindclick="start"
    />
    <GridItem
      text="暂停"
      icon="pauseCircleO"
      bindclick="pause"
    />
    <GridItem
      text="重置"
      icon="replay"
      bindclick="reset"
    />
  </Grid>
</View>
 
```

```js
function pause() {
  const countDown = this.selectComponent('.controlCountDown');
  countDown.pause();
}

function reset() {
  const countDown = this.selectComponent('.controlCountDown');
  countDown.reset();
}

function finished() {
  Toast('倒计时结束');
} 
```
### ICountDownRef [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/count-down.d.ts)   

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| start | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| pause | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| reset | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |

### ITimeData [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/count-down.d.ts)   

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| days | - | _&nbsp;&nbsp;number<br/>_ |
| hours | - | _&nbsp;&nbsp;number<br/>_ |
| minutes | - | _&nbsp;&nbsp;number<br/>_ |
| seconds | - | _&nbsp;&nbsp;number<br/>_ |
| milliseconds | - | _&nbsp;&nbsp;number<br/>_ |

### CountDownProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/count-down.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| millisecond | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| time | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| format | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| autoStart | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| onChange | - | _&nbsp;&nbsp;(timeData:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;ITimeData<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onFinish | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| ref | - | _&nbsp;&nbsp;React.MutableRefObject<<br/>&nbsp;&nbsp;&nbsp;&nbsp;ICountDownRef&nbsp;&brvbar;&nbsp;undefined<br/>&nbsp;&nbsp;><br/>_ | - | `false` |

