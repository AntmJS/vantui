# Tab 标签页

### 介绍

选项卡组件，用于在不同的内容区域之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Tab, Tabs } from '@antmjs/vantui'
```

## 代码演示

### 粘性布局

```jsx
function Demo() {
  return (
    <View>
      <Tabs sticky={true}>
        <Tab title="标签 1">内容 1</Tab>
        <Tab title="标签 2">内容 2</Tab>
        <Tab title="标签 3">内容 3</Tab>
        <Tab title="标签 4">内容 4</Tab>
      </Tabs>
    </View>
  )
}
```

### 基础用法

通过`active`设定当前激活标签对应的索引值，默认情况下启用第一个标签。

```jsx
function Demo() {
  return (
    <Tabs
      active={1}
      onChange={(e) =>
        Toast.show({
          message: e.detail.name,
          selector: '#tabs-demo1',
        })
      }
    >
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
      <Toast id="tabs-demo1" />
    </Tabs>
  )
}
```

### 通过名称匹配

在标签指定`name`属性的情况下，`active`的值为当前标签的`name`（此时无法通过索引值来匹配标签）。

```jsx
function Demo() {
  return (
    <Tabs
      active={'a'}
      onChange={(e) =>
        Toast.show({
          message: e.detail.name,
          selector: '#tabs-demo2',
        })
      }
    >
      <Tab title="标签 a" name="a">
        内容 a
      </Tab>
      <Tab title="标签 b" name="b">
        内容 b
      </Tab>
      <Tab title="标签 c" name="c">
        内容 c
      </Tab>
      <Toast id="tabs-demo2" />
    </Tabs>
  )
}
```

### 横向滚动

多于 5 个标签时，Tab 可以横向滚动。

```jsx
function Demo() {
  return (
    <Tabs active={1}>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
      <Tab title="标签 5">内容 5</Tab>
      <Tab title="标签 6">内容 6</Tab>
    </Tabs>
  )
}
```

### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`vanTabs`上监听`disabled`事件。

```jsx
function Demo() {
  return (
    <Tabs
      onDisabled={(e) =>
        Toast.show({
          message: e.detail.title + '已被禁',
          selector: '#tabs-demo4',
        })
      }
    >
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2" disabled={true}>
        内容 2
      </Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Toast id="tabs-demo4" />
    </Tabs>
  )
}
```

```js

```

### 样式风格

`Tab`支持两种样式风格：`line`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格。

```jsx
function Demo() {
  return (
    <Tabs type="card">
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
    </Tabs>
  )
}
```

### 点击事件

可以在`vanTabs`上绑定`click`事件，在回调参数的`event.detail`中可以取得被点击标签的标题和标识符。

```jsx
function Demo() {
  const onClick = (e) => {
    Toast.show({
      message: e.detail.title,
      selector: '#tab-demo6',
    })
  }

  return (
    <View>
      <Tabs onClick={onClick}>
        <Tab title="标签 1">内容 1</Tab>
        <Tab title="标签 2">内容 2</Tab>
      </Tabs>
      <Toast id="tab-demo6" />
    </View>
  )
}
```

### 切换动画

可以通过`animated`来设置是否启用切换 tab 时的动画。

```jsx
function Demo() {
  return (
    <Tabs animated>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
  )
}
```

### 滑动切换

通过`swipeable`属性可以开启滑动切换标签页。

```jsx
function Demo() {
  return (
    <Tabs swipeable>
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
  )
}
```

### TabsProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tab.d.ts)

| 参数               | 说明 | 类型                                                                                                                                                                                                                                                                                                                                                                                                              | 默认值 | 必填    |
| ------------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| sticky             | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | -      | `false` |
| container          | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                                                                                                                                                                                                                            | -      | `false` |
| border             | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | -      | `false` |
| swipeable          | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | -      | `false` |
| titleActiveColor   | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| titleInactiveColor | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| color              | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| animated           | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | -      | `false` |
| lineWidth          | -    | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                               | -      | `false` |
| lineHeight         | -    | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                               | -      | `false` |
| active             | -    | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                               | -      | `false` |
| type               | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| ellipsis           | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | -      | `false` |
| duration           | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| zIndex             | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| swipeThreshold     | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| offsetTop          | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| lazyRender         | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | -      | `false` |
| children           | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                      | -      | `true`  |
| renderNavLeft      | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                      | -      | `false` |
| renderNavRight     | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                      | -      | `false` |
| onScroll           | -    | _&nbsp;&nbsp;(data:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scrollTop?:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;null<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isFixed?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onClick            | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;eventDetail<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                      | -      | `false` |
| onChange           | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;eventDetail<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                      | -      | `false` |
| onDisabled         | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;eventDetail<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                      | -      | `false` |

### TabProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tab.d.ts)

| 参数       | 说明 | 类型                                                | 默认值 | 必填    |
| ---------- | ---- | --------------------------------------------------- | ------ | ------- |
| dot        | -    | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| info       | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | -      | `false` |
| title      | -    | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |
| disabled   | -    | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| titleStyle | -    | _&nbsp;&nbsp;string<br/>_                           | -      | `false` |
| name       | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | -      | `false` |
| children   | -    | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                      | 默认值            |
| ------------------------- | ----------------- |
| --tab-text-color          | ` @gray-7;`       |
| --tab-active-text-color   | ` @text-color;`   |
| --tab-disabled-text-color | ` @gray-5;`       |
| --tab-font-size           | ` @font-size-md;` |
