# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 引入

在 Taro 文件中引入组件

```js
import { Slider } from "vantui"; 
```

## 代码演示

### 基本用法

```jsx
<View>
  <Slider
    value="50"
    onChange={ this.onChange }
  />
</View>
 
```

```js
 
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

```jsx
<View>
  <Slider
    value={ 10, 50 }
    range={ true }
    change={this.onChange}
  />
</View>
 
```

```js
 
```

### 指定选择范围

```jsx
<View>
  <Slider
    min="-50"
    max="50"
  />
</View>
 
```

### 禁用

```jsx
<View>
  <Slider
    value="50"
    disabled={ true }
  />
</View>
 
```

### 指定步长

```jsx
<View>
  <Slider
    value="50"
    step="10"
  />
</View>
 
```

### 自定义样式

```jsx
<View>
  <Slider
    value="50"
    barHeight="4px"
    activeColor="#ee0a24"
  />
</View>
 
```

### 自定义按钮

```jsx
<View>
  <Slider
    value={ this.state.currentValue }
    onDrag={ this.onDrag }
    renderButton={ (
      <View
        class="customButton"
      >
        { this.state.currentValue }/100
      </View>
    )}
  />
</View>
 
```

```js
this.state = {
  currentValue: 50
};

function onDrag(event) {
  this.setState({
    currentValue: event.detail.value
  });
} 
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

```jsx
<View>
  <View style="height: 150px;">
    <Slider
      value="50"
      vertical={ true }
      onChange={ this.onChange }
    />
    <Slider
      value={ [10, 50] }
      range={ true }
      vertical={ true }
      style="marginLeft: 100px;"
      onChange={ this.onChange }
    />
  </View>
</View>
 
```

```js
 
```
### SliderProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/slider.d.ts)   
| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| range | - | _&nbsp;&nbsp;boolean<br/>_ | - | `否` |
| disabled | - | _&nbsp;&nbsp;boolean<br/>_ | - | `否` |
| activeColor | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| inactiveColor | - | _&nbsp;&nbsp;string<br/>_ | - | `否` |
| max | - | _&nbsp;&nbsp;number<br/>_ | - | `否` |
| min | - | _&nbsp;&nbsp;number<br/>_ | - | `否` |
| step | - | _&nbsp;&nbsp;number<br/>_ | - | `否` |
| value | - | _&nbsp;&nbsp;number<br/>_ | - | `否` |
| barHeight | - | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | - | `否` |
| vertical | - | _&nbsp;&nbsp;boolean<br/>_ | - | `否` |
| onDrag | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent&nbsp;&&nbsp;SliderEvent)&nbsp;=>&nbsp;void<br/>_ | - | `否` |
| onChange | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent&nbsp;&&nbsp;SliderEvent)&nbsp;=>&nbsp;void<br/>_ | - | `否` |
| onDragStart | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `否` |
| onDragEnd | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `否` |
| renderLeftButton | - | _&nbsp;&nbsp;(value:&nbsp;number)&nbsp;=>&nbsp;React.ReactNode<br/>_ | - | `否` |
| renderRightButton | - | _&nbsp;&nbsp;(value:&nbsp;number)&nbsp;=>&nbsp;React.ReactNode<br/>_ | - | `否` |
| renderButton | - | _&nbsp;&nbsp;(value:&nbsp;number)&nbsp;=>&nbsp;React.ReactNode<br/>_ | - | `否` |

