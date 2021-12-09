# Sticky 粘性布局

### 介绍

Sticky 组件与 CSS 中`position: sticky`属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

### 引入

在 Taro 文件中引入组件

```js
import { Sticky } from "@antmjs/vantui"; 
```

> Vant Weapp 1.0 版本开始支持此组件，升级方式参见[快速上手](#/quickstart)

## 代码演示

### 基础用法

将内容包裹在`Sticky`组件内即可。

```jsx
<View>
  <Sticky>
    <Button type="primary">
      基础用法
    </Button>
  </Sticky>
</View>
 
```

### 吸顶距离

通过`offsetTop`属性可以设置组件在吸顶时与顶部的距离。

```jsx
<View>
  <Sticky offsetTop={ 50 }>
    <Button type="info">
      吸顶距离
    </Button>
  </Sticky>
</View>
 
```

### 指定容器

通过`container`属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置。

```jsx
<View>
  <View
    id="container"
    style="height: 150px;"
  >
    <Sticky container={ this.state.container }>
      <Button type="warning">
        指定容器
      </Button>
    </Sticky>
  </View>
</View>
 
```

```js
this.state = {
  container: null
};

function onReady() {
  this.setState({
    container: () => wx.createSelectorQuery().select('#container')
  });
} 
```

### 嵌套在 scrollView 内使用

通过 `scrollTop` 与 `offsetTop` 属性可以实现在 scrollView 内嵌套使用。

```jsx
<View>
  <scrollView
    onScroll={ this.state.onScroll }
    scrollY={ true }
    id="scroller"
    style="height: 200px;"
  >
    <View style="height: 400px; paddingTop: 50px;">
      <Sticky
        scrollTop={ this.state.scrollTop }
        offsetTop={ this.state.offsetTop }
      >
        <Button type="warning">
          嵌套在 scrollView 内
        </Button>
      </Sticky>
    </View>
  </scrollView>
</View>
 
```

```js
this.state = {
  scrollTop: 0,
  offsetTop: 0
};

function onScroll(event) {
  wx.createSelectorQuery().select('#scroller').boundingClientRect(res => {
    this.setState({
      scrollTop: event.detail.scrollTop,
      offsetTop: res.top
    });
  }).exec();
} 
```
### StickyProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/sticky.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| zIndex | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| offsetTop | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| disabled | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| container | - | _&nbsp;&nbsp;()&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| scrollTop | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| onScroll | - | _&nbsp;&nbsp;(data:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scrollTop?:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isFixed?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;any<br/>_ | - | `false` |

