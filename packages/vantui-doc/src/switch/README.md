# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Switch } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Switch
    checked={ this.state.checked }
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  checked: true
};

function onChange({
  detail
}) {
  // 需要手动对 checked 状态进行更新
  this.setState({
    checked: detail
  });
} 
```

### 禁用状态

```jsx
<View>
  <Switch
    checked={ this.state.checked }
    disabled={ true }
  />
</View>
 
```

### 加载状态

```jsx
<View>
  <Switch
    checked={ this.state.checked }
    loading={ true }
  />
</View>
 
```

### 自定义大小

```jsx
<View>
  <Switch
    checked={ this.state.checked }
    size="24px"
  />
</View>
 
```

### 自定义颜色

```jsx
<View>
  <Switch
    checked={ this.state.checked }
    activeColor="#07c160"
    inactiveColor="#ee0a24"
  />
</View>
 
```

### 异步控制

```jsx
<View>
  <Switch
    checked={ this.state.checked }
    onChange={ this.onChange }
  />
</View>
 
```

```js
this.state = {
  checked: true
};

function onChange({
  detail
}) {
  wx.showModal({
    title: '提示',
    content: '是否切换开关？',
    success: res => {
      if (res.confirm) {
        this.setState({
          checked2: detail
        });
      }
    }
  });
} 
```
### SwitchProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/switch.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| checked | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| loading | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| disabled | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| activeColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| inactiveColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| size | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| activeValue | - | _&nbsp;&nbsp;any<br/>_ | - | `false` |
| inactiveValue | - | _&nbsp;&nbsp;any<br/>_ | - | `false` |
| onChange | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |

