# Tag 标签

### 介绍

用于标记关键词和概括主要内容。

### 引入

在 Taro 文件中引入组件

```js
import { Tag } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色，默认为灰色。

```jsx
<View>
  <Tag type="primary">
    标签
  </Tag>
  <Tag type="success">
    标签
  </Tag>
  <Tag type="danger">
    标签
  </Tag>
  <Tag type="warning">
    标签
  </Tag>
</View>
 
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```jsx
<View>
  <Tag
    plain={ true }
    type="primary"
  >
    标签
  </Tag>
  <Tag
    plain={ true }
    type="success"
  >
    标签
  </Tag>
  <Tag
    plain={ true }
    type="danger"
  >
    标签
  </Tag>
  <Tag
    plain={ true }
    type="warning"
  >
    标签
  </Tag>
</View>
 
```

### 圆角样式

通过 `round` 设置为圆角样式。

```jsx
<View>
  <Tag
    round={ true }
    type="primary"
  >
    标签
  </Tag>
  <Tag
    round={ true }
    type="success"
  >
    标签
  </Tag>
  <Tag
    round={ true }
    type="danger"
  >
    标签
  </Tag>
  <Tag
    round={ true }
    type="warning"
  >
    标签
  </Tag>
</View>
 
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```jsx
<View>
  <Tag
    mark={ true }
    type="primary"
  >
    标签
  </Tag>
  <Tag
    mark={ true }
    type="success"
  >
    标签
  </Tag>
  <Tag
    mark={ true }
    type="danger"
  >
    标签
  </Tag>
  <Tag
    mark={ true }
    type="warning"
  >
    标签
  </Tag>
</View>
 
```

### 自定义颜色

```jsx
<View>
  <Tag color="#f2826a">
    标签
  </Tag>
  <Tag color="#7232dd">
    标签
  </Tag>
  <Tag
    color="#7232dd"
    plain={ true }
  >
    标签
  </Tag>
  <Tag
    color="#ffe1e1"
    textColor="#ad0000"
  >
    标签
  </Tag>
</View>
 
```

### 标签大小

```jsx
<View>
  <Tag type="danger">
    标签
  </Tag>
  <Tag
    type="danger"
    size="medium"
  >
    标签
  </Tag>
  <Tag
    type="danger"
    size="large"
  >
    标签
  </Tag>
</View>
 
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `close` 事件，在 `close` 事件中可以执行隐藏标签的逻辑。

```jsx
<View>
  { show.primary.map((item, index) => (
      <Tag
        closeable={ true }
        size="medium"
        type="primary"
        id="primary"
        onClose={ this.onClose }
      >
        标签
      </Tag>
    
    )) }
  { show.success.map((item, index) => (
      <Tag
        closeable={ true }
        size="medium"
        type="success"
        id="success"
        onClose={ this.onClose }
      >
        标签
      </Tag>
    
    )) }
</View>
 
```

```js
this.state = {
  show: {
    primary: true,
    success: true
  }
};

function onClose(event) {
  this.setState({
    [`show.${event.target.id}`]: false
  });
} 
```
### TagProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tag.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| size | - | _&nbsp;&nbsp;"large"&nbsp;&brvbar;&nbsp;"medium"<br/>_ | - | `false` |
| mark | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| color | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| plain | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| round | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| textColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| type | - | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"default"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"primary"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"success"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"danger"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"warning"<br/>_ | - | `false` |
| closeable | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| onClose | - | _&nbsp;&nbsp;(e:&nbsp;any)&nbsp;=>&nbsp;void<br/>_ | - | `false` |

