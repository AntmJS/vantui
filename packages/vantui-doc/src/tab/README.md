# Tab 标签页

### 介绍

选项卡组件，用于在不同的内容区域之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Tab } from "@antmjs/vantui";
import { Tabs } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

通过`active`设定当前激活标签对应的索引值，默认情况下启用第一个标签。

```jsx
<View>
  <Tabs
    active={ this.state.active }
    onChange={ this.onChange }
  >
    <Tab title="标签 1">
      内容 1
    </Tab>
    <Tab title="标签 2">
      内容 2
    </Tab>
    <Tab title="标签 3">
      内容 3
    </Tab>
    <Tab title="标签 4">
      内容 4
    </Tab>
  </Tabs>
</View>
 
```

```js
this.state = {
  active: 1
};

function onChange(event) {
  wx.showToast({
    title: `切换到标签 ${event.detail.name}`,
    icon: 'none'
  });
} 
```

### 通过名称匹配

在标签指定`name`属性的情况下，`active`的值为当前标签的`name`（此时无法通过索引值来匹配标签）。

```jsx
<View>
  <Tabs active="a">
    <Tab
      title="标签 1"
      name="a"
    >
      内容 1
    </Tab>
    <Tab
      title="标签 2"
      name="b"
    >
      内容 2
    </Tab>
    <Tab
      title="标签 3"
      name="c"
    >
      内容 3
    </Tab>
  </Tabs>
</View>
 
```

### 横向滚动

多于 5 个标签时，Tab 可以横向滚动。

```jsx
<View>
  <Tabs active={ this.state.active }>
    <Tab title="标签 1">
      内容 1
    </Tab>
    <Tab title="标签 2">
      内容 2
    </Tab>
    <Tab title="标签 3">
      内容 3
    </Tab>
    <Tab title="标签 4">
      内容 4
    </Tab>
    <Tab title="标签 5">
      内容 5
    </Tab>
    <Tab title="标签 6">
      内容 6
    </Tab>
  </Tabs>
</View>
 
```

### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`vanTabs`上监听`disabled`事件。

```jsx
<View>
  <Tabs onDisabled={ this.onClickDisabled }>
    <Tab title="标签 1">
      内容 1
    </Tab>
    <Tab
      title="标签 2"
      disabled={ true }
    >
      内容 2
    </Tab>
    <Tab title="标签 3">
      内容 3
    </Tab>
  </Tabs>
</View>
 
```

```js
 
```

### 样式风格

`Tab`支持两种样式风格：`line`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格。

```jsx
<View>
  <Tabs type="card">
    <Tab title="标签 1">
      内容 1
    </Tab>
    <Tab title="标签 2">
      内容 2
    </Tab>
    <Tab title="标签 3">
      内容 3
    </Tab>
  </Tabs>
</View>
 
```

### 点击事件

可以在`vanTabs`上绑定`click`事件，在回调参数的`event.detail`中可以取得被点击标签的标题和标识符。

```jsx
<View>
  <Tabs onClick={ this.onClick }>
    <Tab title="标签 1">
      内容 1
    </Tab>
    <Tab title="标签 2">
      内容 2
    </Tab>
  </Tabs>
</View>
 
```

```js
 
```

### 粘性布局

通过`sticky`属性可以开启粘性布局，粘性布局下，当 Tab 滚动到顶部时会自动吸顶。

```jsx
<View>
  <Tabs sticky={ true }>
    <Tab title="标签 1">
      内容 1
    </Tab>
    <Tab title="标签 2">
      内容 2
    </Tab>
    <Tab title="标签 3">
      内容 3
    </Tab>
    <Tab title="标签 4">
      内容 4
    </Tab>
  </Tabs>
</View>
 
```

### 切换动画

可以通过`animated`来设置是否启用切换 tab 时的动画。

```jsx
<View>
  <Tabs animated={ true }>
    <Tab title="标签 1">
      内容 1
    </Tab>
    <Tab title="标签 2">
      内容 2
    </Tab>
    <Tab title="标签 3">
      内容 3
    </Tab>
    <Tab title="标签 4">
      内容 4
    </Tab>
  </Tabs>
</View>
 
```

### 滑动切换

通过`swipeable`属性可以开启滑动切换标签页。

```jsx
<View>
  <Tabs swipeable={ true }>
    <Tab title="标签 1">
      内容 1
    </Tab>
    <Tab title="标签 2">
      内容 2
    </Tab>
    <Tab title="标签 3">
      内容 3
    </Tab>
    <Tab title="标签 4">
      内容 4
    </Tab>
  </Tabs>
</View>
 
```

### 嵌套 popup

如果将 vanTabs 嵌套在 vanPopup 等会隐藏内容的组件或节点内，当 vanTabs 显示时下划线将不会正常显示。

此时可以通过使用 `wx:if` 手动控制 vanTabs 的渲染来规避这种场景。

```jsx
<View>
  <Popup show={ this.state.show }>
    { this.state.show.map((item, index) => (
        <Tabs>
          <Tab title="标签 1">
            内容 1
          </Tab>
          <Tab title="标签 2">
            内容 2
          </Tab>
          <Tab title="标签 3">
            内容 3
          </Tab>
          <Tab title="标签 4">
            内容 4
          </Tab>
        </Tabs>
      
      )) }
  </Popup>
</View>
 
```
### TabProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tab.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| dot | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| info | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| title | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| disabled | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| titleStyle | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| name | - | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `true` |

