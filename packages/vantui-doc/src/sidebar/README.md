# Sidebar 侧边导航

### 介绍

垂直展示的导航栏，用于在不同的内容区域之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Sidebar, SidebarItem } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

通过在`vanSidebar`上设置`activeKey`属性来控制选中项。

```jsx
function Demo() {
  return (
    <Sidebar activeKey={0}>
      <SidebarItem title="标签名" />
      <SidebarItem title="标签名" />
      <SidebarItem title="标签名" />
    </Sidebar>
  )
}
```

### 徽标提示

设置`dot`属性后，会在右上角展示一个小红点。设置`badge`属性后，会在右上角展示相应的徽标。

```jsx
function Demo() {
  return (
    <Sidebar activeKey={1}>
      <SidebarItem title="标签名" dot />
      <SidebarItem title="标签名" badge="5" />
      <SidebarItem title="标签名" badge="99+" />
    </Sidebar>
  )
}
```

### 禁用选项

通过`disabled`属性禁用选项。

```jsx
function Demo() {
  return (
    <Sidebar activeKey={2}>
      <SidebarItem title="标签名" dot={true} />
      <SidebarItem title="标签名" disabled />
      <SidebarItem title="标签名" badge="66+" />
    </Sidebar>
  )
}
```

### 监听切换事件

设置`change`方法来监听切换导航项时的事件。

```jsx
function Demo() {
  return (
    <>
      <Sidebar
        activeKey={0}
        onChange={(e) =>
          Notify.show({
            type: 'primary',
            message: e.detail,
          })
        }
      >
        <SidebarItem title="标签名1" />
        <SidebarItem title="标签名2" />
        <SidebarItem title="标签名3" />
      </Sidebar>
      <Notify />
    </>
  )
}
```

### SidebarItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/sidebar.d.ts)

| 参数        | 说明 | 类型                                                                                                       | 默认值 | 必填    |
| ----------- | ---- | ---------------------------------------------------------------------------------------------------------- | ------ | ------- |
| dot         | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                 | -      | `false` |
| badge       | -    | _&nbsp;&nbsp;ReactNode&nbsp;&brvbar;&nbsp;null<br/>_                                                       | -      | `false` |
| info        | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                               | -      | `false` |
| title       | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                               | -      | `false` |
| disabled    | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                 | -      | `false` |
| onClick     | -    | _&nbsp;&nbsp;(a:&nbsp;any)&nbsp;=>&nbsp;void<br/>_                                                         | -      | `false` |
| onChange    | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;a:&nbsp;OnChangeEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| renderTitle | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;a:&nbsp;any<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;ReactNode<br/>_      | -      | `false` |

### SidebarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/sidebar.d.ts)

| 参数      | 说明 | 类型                                                                                                      | 默认值 | 必填    |
| --------- | ---- | --------------------------------------------------------------------------------------------------------- | ------ | ------- |
| onChange  | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;a:&nbsp;OnChangeEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | -      | `false` |
| activeKey | -    | _&nbsp;&nbsp;number<br/>_                                                                                 | -      | `true`  |
| children  | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                              | -      | `true`  |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称            | 默认值    |
| --------------- | --------- |
| --sidebar-width | ` 160px;` |
