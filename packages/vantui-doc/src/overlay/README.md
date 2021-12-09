# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

在 Taro 文件中引入组件

```js
import { Overlay } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Button
    type="primary"
    onClick={ this.onClickShow }
  >
    显示遮罩层
  </Button>
  <Overlay
    show={ this.state.show }
    onClick={ this.onClickHide }
  />
</View>
 
```

```js
this.state = {
  show: false
};

function onClickShow() {
  this.setState({
    show: true
  });
}

function onClickHide() {
  this.setState({
    show: false
  });
} 
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```jsx
<View>
  <Button
    type="primary"
    onClick={ this.onClickShow }
  >
    嵌入内容
  </Button>
  <Overlay
    show={ this.state.show }
    onClick={ this.onClickHide }
  >
    <View class="wrapper">
      <View class="block" />
    </View>
  </Overlay>
</View>
 
```

```js
this.state = {
  show: false
};

function onClickShow() {
  this.setState({
    show: true
  });
}

function onClickHide() {
  this.setState({
    show: false
  });
}

function noop() {} 
```

```css
.wrapper {
  display: flex;
  alignItems: center;
  justifyContent: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  backgroundColor: #fff;
}
```
### OverlayProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/overlay.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| show | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| lockScroll | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| zIndex | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| duration | - | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enter:&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;leave:&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

