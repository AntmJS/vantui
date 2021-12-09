# NavBar 导航栏

### 介绍

为页面提供导航功能，常用于页面顶部。

### 引入

在 Taro 文件中引入组件

```js
import { NavBar } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <NavBar
    title="标题"
    leftText="返回"
    rightText="按钮"
    leftArrow={ true }
    onClickLeft={ onClickLeft }
    onClickRight={ this.onClickRight }
  />
</View>
 
```

```js
function onClickRight() {
  wx.showToast({
    title: '点击按钮',
    icon: 'none'
  });
} 
```

### 高级用法

```jsx
<View>
  <NavBar
    title="标题"
    leftText="返回"
    leftArrow={ true }
    renderRight={
      <Block>
        <Icon name="search" className="icon" size="36"></Icon>
      </Block>
    }
  >
  </NavBar>
</View>
 
```
### NavBarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/nav-bar.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| title | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| fixed | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| placeholder | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| leftText | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| rightText | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| style | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| leftArrow | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| border | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| zIndex | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| safeAreaInsetTop | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| renderTitle | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderLeft | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderRight | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| onClickLeft | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent)&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClickRight | - | _&nbsp;&nbsp;(e:&nbsp;ITouchEvent)&nbsp;=>&nbsp;void<br/>_ | - | `false` |

