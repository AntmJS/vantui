# TreeSelect 分类选择

### 介绍

用于从一组相关联的数据集合中进行选择。

### 引入

在 Taro 文件中引入组件

```js
import { TreeSelect } from "@antmjs/vantui"; 
```

## 代码演示

### 单选模式

可以在任意位置上使用 vanTreeSelect 标签。传入对应的数据即可。此组件支持单选或多选，具体行为完全基于事件 clickItem 的实现逻辑如何为属性 activeId 赋值，当 activeId 为数组时即为多选状态。

```jsx
<View>
  <TreeSelect
    items={ this.state.items }
    mainActiveIndex={ this.state.mainActiveIndex }
    activeId={ this.state.activeId }
    onClickNav={ this.onClickNav }
    onClickItem={ this.onClickItem }
  />
</View>
 
```

```js
this.state = {
  mainActiveIndex: 0,
  activeId: null
};

function onClickNav({
  detail = {}
}) {
  this.setState({
    mainActiveIndex: detail.index || 0
  });
}

function onClickItem({
  detail = {}
}) {
  const activeId = this.data.activeId === detail.id ? null : detail.id;
  this.setState({
    activeId
  });
} 
```

### 多选模式

```jsx
<View>
  <TreeSelect
    items={ this.state.items }
    mainActiveIndex={ this.state.mainActiveIndex }
    activeId={ this.state.activeId }
    max={ this.state.max }
    onClickNav={ this.onClickNav }
    onClickItem={ this.onClickItem }
  />
</View>
 
```

```js
this.state = {
  mainActiveIndex: 0,
  activeId: [],
  max: 2
};

function onClickNav({
  detail = {}
}) {
  this.setState({
    mainActiveIndex: detail.index || 0
  });
}

function onClickItem({
  detail = {}
}) {
  const {
    activeId
  } = this.data;
  const index = activeId.indexOf(detail.id);

  if (index > -1) {
    activeId.splice(index, 1);
  } else {
    activeId.push(detail.id);
  }

  this.setState({
    activeId
  });
} 
```

### 自定义内容

```jsx
<View>
  <TreeSelect
    items={ this.state.items }
    height="55vw"
    mainActiveIndex={ this.state.mainActiveIndex }
    activeId={ this.state.activeId }
    onClickNav={ this.onClickNav }
    onClickItem={ this.onClickItem }
  >
    <Image
      src="https://img.yzcdn.cn/vant/apple-1.jpg"
    />
  </TreeSelect>
</View>
 
```
### TreeSelectProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tree-select.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| items | - | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;text:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;badge?:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;dot?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;disabled?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;children?:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;}[]<br/>&nbsp;&nbsp;}[]<br/>_ | - | `false` |
| activeId | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number&nbsp;&brvbar;&nbsp;number[]&nbsp;&brvbar;&nbsp;string[]<br/>_ | - | `false` |
| mainActiveIndex | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| value | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| height | - | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | - | `false` |
| max | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| selectedIcon | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| onClickItem | - | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;TouchEvent&nbsp;&&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClickNav | - | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{&nbsp;index:&nbsp;number&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| renderContent | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |

