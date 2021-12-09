# Sidebar 侧边导航

### 介绍

垂直展示的导航栏，用于在不同的内容区域之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Sidebar } from "@antmjs/vantui";
import { SidebarItem } from "@antmjs/vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

通过在`vanSidebar`上设置`activeKey`属性来控制选中项。

```jsx
<View>
  <Sidebar activeKey={ this.state.activeKey }>
    <SidebarItem title="标签名" />
    <SidebarItem title="标签名" />
    <SidebarItem title="标签名" />
  </Sidebar>
</View>
 
```

```js
this.state = {
  activeKey: 0
}; 
```

### 徽标提示

设置`dot`属性后，会在右上角展示一个小红点。设置`badge`属性后，会在右上角展示相应的徽标。

```jsx
<View>
  <Sidebar activeKey={ this.state.activeKey }>
    <SidebarItem
      title="标签名"
      dot={ true }
    />
    <SidebarItem
      title="标签名"
      badge="5"
    />
    <SidebarItem
      title="标签名"
      badge="99+"
    />
  </Sidebar>
</View>
 
```

### 禁用选项

通过`disabled`属性禁用选项。

```jsx
<View>
  <Sidebar activeKey={ this.state.activeKey }>
    <SidebarItem title="标签名" />
    <SidebarItem
      title="标签名"
      disabled={ true }
    />
    <SidebarItem title="标签名" />
  </Sidebar>
</View>
 
```

### 监听切换事件

设置`change`方法来监听切换导航项时的事件。

```jsx
<View>
  <Sidebar
    activeKey={ this.state.activeKey }
    onChange={ this.onChange }
  >
    <SidebarItem title="标签名 1" />
    <SidebarItem title="标签名 2" />
    <SidebarItem title="标签名 3" />
  </Sidebar>
  <Notify id="vanNotify" />
</View>
 
```

```js
import { notify } from 'vantui';
this.state = {
  activeKey: 0
};

function onChange(event) {
  notify({
    type: 'primary',
    message: event.detail
  });
} 
```
### SidebarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/sidebar.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| onChange | - | _&nbsp;&nbsp;(a:&nbsp;onChangeEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| activeKey | - | _&nbsp;&nbsp;number<br/>_ | - | `true` |
| children | - | _&nbsp;&nbsp;React.ReactNode<br/>_ | - | `true` |

