# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

在 Taro 文件中引入组件

```js
import { Rate } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Rate
    value={ this.state.value }
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  value: 3
};

function onChange(event) {
  this.setState({
    value: event.detail
  });
} 
```

### 自定义图标

```jsx
<View>
  <Rate
    value={ this.state.value }
    icon="like"
    voidIcon="likeO"
    onChange={ this.onChange }
  />
</View>
 
```

### 自定义样式

```jsx
<View>
  <Rate
    value={ this.state.value }
    size={ 25 }
    color="#ffd21e"
    voidIcon="star"
    voidColor="#eee"
    onChange={ this.onChange }
  />
</View>
 
```

### 半星

```jsx
<View>
  <Rate
    value={ this.state.value }
    allowHalf={ true }
    voidIcon="star"
    voidColor="#eee"
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  value: 2.5
};

function onChange(event) {
  this.setState({
    value: event.detail
  });
} 
```

### 自定义数量

```jsx
<View>
  <Rate
    value={ this.state.value }
    count={ 6 }
    onChange={ this.onChange }
  />
</View>
 
```

### 禁用状态

```jsx
<View>
  <Rate
    disabled={ true }
    value={ this.state.value }
    onChange={ this.onChange }
  />
</View>
 
```

### 只读状态

```jsx
<View>
  <Rate
    readonly={ true }
    value={ this.state.value }
    onChange={ this.onChange }
  />
</View>
 
```

### 监听 change 事件

评分变化时，会触发 `change` 事件。

```jsx
<View>
  <Rate
    value={ this.state.value }
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  value: 2
};

function onChange(event) {
  Toast('当前值：' + event.detail);
} 
```
### RateProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/rate.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| value | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| defaultValue | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| readonly | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| disabled | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| allowHalf | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| size | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| icon | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| voidIcon | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| color | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| voidColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| disabledColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| count | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| gutter | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| touchable | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| onChange | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |

