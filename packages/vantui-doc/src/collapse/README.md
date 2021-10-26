# Collapse 折叠面板

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

### 引入

在 Taro 文件中引入组件

```js
import { Collapse } from "vantui";
import { CollapseItem } from "vantui"; 
```

## 代码演示

### 基础用法

通过`value`控制展开的面板列表，`activeNames`为数组格式。

```jsx
<View>
  <Collapse
    value={ this.activeNames }
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
  this.setData({
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
    value={ this.activeName }
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
  this.setData({
    activeName: event.detail
  });
} 
```

### 事件监听

`vanCollapse` 提供了 `change`, `open` 和 `close` 事件。`change` 事件在面板切换时触发，`open` 事件在面板展开时触发，`close` 事件在面板关闭时触发。

```jsx
<View>
  <Collapse
    value={ this.activeNames }
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
  this.setData({
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
    value={ this.activeNames }
    onChange={ this.onChange }
  >
    <CollapseItem name="1">
      <View slot="title">
        有赞微商城
        <Icon name="questionO" />
      </View>
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
  this.setData({
    activeNames: event.detail
  });
} 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface CollapseProps extends StandardProps {
  value?: Array<string | number>
  accordion?: boolean
  border?: boolean
  children?: Array<ReactNode>
  onChange?: (event: ITouchEvent) => any
  onOpen?: (event: ITouchEvent) => any
  onClose?: (event: ITouchEvent) => any
}

declare const Collapse: ComponentClass<CollapseProps>

export { Collapse }
```