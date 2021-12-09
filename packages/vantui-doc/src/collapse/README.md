# Collapse 折叠面板

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

### 引入

在 Taro 文件中引入组件

```js
import { Collapse } from "@antmjs/vantui";
import { CollapseItem } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

通过`value`控制展开的面板列表，`activeNames`为数组格式。

```jsx
<View>
  <Collapse
    value={ this.state.activeNames }
    onChange={ this.onChange }
  >
    <CollapseItem
      title="有赞微商城"
      name="1"
    >
      提供多样店铺模板，快速搭建网上商城
    </CollapseItem>
    <CollapseItem
      title="有赞零售"
      name="2"
    >
      网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
    </CollapseItem>
    <CollapseItem
      title="有赞美业"
      name="3"
      disabled={ true }
    >
      线上拓客，随时预约，贴心顺手的开单收银
    </CollapseItem>
  </Collapse>
</View>
 
```

```js
this.state = {
  activeNames: ['1']
};

function onChange(event) {
  this.setState({
    activeNames: event.detail
  });
} 
```

### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式。

```jsx
<View>
  <Collapse
    accordion={ true }
    value={ this.state.activeName }
    onChange={ this.onChange }
  >
    <CollapseItem
      title="有赞微商城"
      name="1"
    >
      提供多样店铺模板，快速搭建网上商城
    </CollapseItem>
    <CollapseItem
      title="有赞零售"
      name="2"
    >
      网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
    </CollapseItem>
    <CollapseItem
      title="有赞美业"
      name="3"
    >
      线上拓客，随时预约，贴心顺手的开单收银
    </CollapseItem>
  </Collapse>
</View>
 
```

```js
this.state = {
  activeName: '1'
};

function onChange(event) {
  this.setState({
    activeName: event.detail
  });
} 
```

### 事件监听

`vanCollapse` 提供了 `change`, `open` 和 `close` 事件。`change` 事件在面板切换时触发，`open` 事件在面板展开时触发，`close` 事件在面板关闭时触发。

```jsx
<View>
  <Collapse
    value={ this.state.activeNames }
    onChange={ this.onChange }
    onOpen={ this.onOpen }
    onClose={ this.onClose }
  >
    <CollapseItem
      title="有赞微商城"
      name="1"
    >
      提供多样店铺模板，快速搭建网上商城
    </CollapseItem>
    <CollapseItem
      title="有赞零售"
      name="2"
    >
      网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
    </CollapseItem>
    <CollapseItem
      title="有赞美业"
      name="3"
    >
      线上拓客，随时预约，贴心顺手的开单收银
    </CollapseItem>
  </Collapse>
</View>
 
```

```js
this.state = {
  activeNames: ['1']
};

function onChange(event) {
  this.setState({
    activeNames: event.detail
  });
}

function onOpen(event) {
  Toast(`展开: ${event.detail}`);
}

function onClose(event) {
  Toast(`关闭: ${event.detail}`);
} 
```

### 自定义标题内容

```jsx
<View>
  <Collapse
    value={ this.state.activeNames }
    onChange={ this.onChange }
  >
    <CollapseItem 
      name="1" 
      renderTitle={(
        <View>
          有赞微商城
          <Icon name="questionO" />
        </View>
      )}
      >
      提供多样店铺模板，快速搭建网上商城
    </CollapseItem>
    <CollapseItem
      title="有赞零售"
      name="2"
      icon="shopO"
    >
      网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
    </CollapseItem>
  </Collapse>
</View>
 
```

```js
this.state = {
  activeNames: ['1']
};

function onChange(event) {
  this.setState({
    activeNames: event.detail
  });
} 
```
### CollapseProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/collapse.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| value | - | _&nbsp;&nbsp;Array<string&nbsp;&brvbar;&nbsp;number><br/>_ | - | `false` |
| accordion | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| border | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;Array<ReactNode><br/>_ | - | `false` |
| onChange | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| onOpen | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| onClose | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |

