# Notify 消息提示

### 介绍

在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

### 引入

在 Taro 文件中引入组件

```js
import { Notify } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```js
import { Notify } from 'vantui';

Notify.show('通知内容');
```

```jsx
<View>
  {/*  在页面内添加对应的节点  */}
  <Notify id="vanNotify" />
</View>
 
```

### 通知类型

支持`primary`、`success`、`warning`、`danger`四种通知类型，默认为`danger`。

```js
// 主要通知
Notify.show({ type: 'primary', message: '通知内容' });

// 成功通知
Notify.show({ type: 'success', message: '通知内容' });

// 危险通知
Notify.show({ type: 'danger', message: '通知内容' });

// 警告通知
Notify.show({ type: 'warning', message: '通知内容' });
```

### 自定义通知

自定义消息通知的颜色和展示时长。

```js
Notify.show({
  message: '自定义颜色',
  color: '#ad0000',
  background: '#ffe1e1',
});

Notify.show({
  message: '自定义时长',
  duration: 1000,
});
```

### 自定义选择器

```js
Notify.show({
  message: '自定义节点选择器',
  duration: 1000,
  selector: '#customSelector',
});
```

```jsx
<View>
  {/*  在页面内添加自定义节点  */}
  <Notify id="customSelector" />
</View>
 
```
### NotifyProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/notify.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| selector | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| message | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| background | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| type | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| color | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| duration | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| zIndex | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| safeAreaInsetTop | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| top | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| id | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| onClick | - | _&nbsp;&nbsp;(data:&nbsp;any)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onOpened | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClose | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |

