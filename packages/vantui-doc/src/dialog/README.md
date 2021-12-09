# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

### 引入

在 Taro 文件中引入组件

```js
import { Dialog } from "@antmjs/vantui"; 
```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮。

```jsx
<View>
  <Dialog id="vanDialog" />
</View>
 
```

```javascript
import { Dialog } from 'vantui';

Dialog.alert({
  title: '标题',
  message: '弹窗内容',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容',
}).then(() => {
  // on close
});
```

### 消息确认

用于确认消息，包含取消和确认按钮。

```jsx
<View>
  <Dialog id="vanDialog" />
</View>
 
```

```javascript
import { Dialog } from 'vantui';

Dialog.confirm({
  title: '标题',
  message: '弹窗内容',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 圆角按钮风格

将 theme 选项设置为 `roundButton` 可以展示圆角按钮风格的弹窗。

```jsx
<View>
  <Dialog id="vanDialog" />
</View>
 
```

```javascript
import { Dialog } from 'vantui';

Dialog.alert({
  title: '标题',
  message: '弹窗内容',
  theme: 'roundButton',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '弹窗内容',
  theme: 'roundButton',
}).then(() => {
  // on close
});
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```jsx
<View>
  <Dialog id="vanDialog" />
</View>
 
```

```javascript
import { Dialog } from 'vantui';

const beforeClose = (action) => new Promise((resolve) => {
  setTimeout(() => {
    if (action === 'confirm') {
      resolve(true);
    } else {
      // 拦截取消操作
      resolve(false);
    }
  }, 1000);
});

Dialog.confirm({
  title: '标题',
  message: '弹窗内容'
  beforeClose
});
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```jsx
<View>
  <Dialog
    title="标题"
    show={ this.state.show }
    showCancelButton={ true }
    confirmButtonOpenType="getUserInfo"
    onClose={ this.onClose }
    onGetuserinfo={ getUserInfo }
  >
    <Image src="https://img.yzcdn.cn/1.jpg" />
  </Dialog>
</View>
 
```

```js
this.state = {
  show: true
};

function getUserInfo(event) {
  console.log(event.detail);
}

function onClose() {
  this.setState({
    show: false
  });
} 
```
### DialogProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/dialog.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| show | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| title | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| width | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| zIndex | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| theme | - | _&nbsp;&nbsp;"round-button"<br/>_ | - | `false` |
| cancelButtonColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| confirmButtonColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| onConfirm | - | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dialog?:&nbsp;{&nbsp;dialog:&nbsp;any&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onCancel | - | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dialog?:&nbsp;{&nbsp;dialog:&nbsp;any&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClose | - | _&nbsp;&nbsp;(event:&nbsp;{&nbsp;detail:&nbsp;string&nbsp;})&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| message | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| overlay | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| selector | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| ariaLabel | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| className | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| style | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| transition | - | _&nbsp;&nbsp;"fade"&nbsp;&brvbar;&nbsp;"none"<br/>_ | - | `false` |
| asyncClose | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| beforeClose | - | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;action:&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<void&nbsp;&brvbar;&nbsp;boolean>&nbsp;&brvbar;&nbsp;void&nbsp;&brvbar;&nbsp;boolean<br/>_ | - | `false` |
| messageAlign | - | _&nbsp;&nbsp;"left"&nbsp;&brvbar;&nbsp;"right"<br/>_ | - | `false` |
| confirmButtonText | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| cancelButtonText | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| showConfirmButton | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| showCancelButton | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| closeOnClickOverlay | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| confirmButtonOpenType | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| renderTitle | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

