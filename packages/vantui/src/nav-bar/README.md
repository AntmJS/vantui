# NavBar 导航栏

### 介绍

为页面提供导航功能，常用于页面顶部。

### 引入

在 Taro 文件中引入组件

```js
import { NavBar, MiniNavBar } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```jsx
function Demo() {
  return (
    <View>
      <NavBar
        title="标题"
        leftText="返回"
        rightText="按钮"
        leftArrow
        onClickLeft={() => Toast.show({ message: '点击按钮 返回' })}
        onClickRight={() => Toast.show({ message: '点击按钮 right' })}
      />
      <Toast />
    </View>
  )
}
```

### 高级用法

```jsx
function Demo() {
  return (
    <View>
      <NavBar
        title="标题"
        leftText="返回"
        leftArrow
        safeAreaInsetTop={false}
        renderRight={<Icon name="search" className="icon" size="36"></Icon>}
      />
    </View>
  )
}
```

### NavBarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/nav-bar.d.ts)

| 参数             | 说明 | 类型                                                                                                     | 默认值 | 必填    |
| ---------------- | ---- | -------------------------------------------------------------------------------------------------------- | ------ | ------- |
| title            | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| fixed            | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| placeholder      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| leftText         | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| rightText        | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| style            | -    | _&nbsp;&nbsp;string<br/>_                                                                                | -      | `false` |
| leftArrow        | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| border           | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| zIndex           | -    | _&nbsp;&nbsp;number<br/>_                                                                                | -      | `false` |
| safeAreaInsetTop | -    | _&nbsp;&nbsp;boolean<br/>_                                                                               | -      | `false` |
| renderTitle      | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| renderLeft       | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| renderRight      | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                             | -      | `false` |
| onClickLeft      | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onClickRight     | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                       | 默认值                       |
| -------------------------- | ---------------------------- |
| --nav-bar-height           | ` 92px; // 对MiniNavbar无效` |
| --nav-bar-background-color | ` @white;`                   |
| --nav-bar-arrow-size       | ` 32px; // 对MiniNavbar无效` |
| --nav-bar-icon-color       | ` var(--primary-color);`     |
| --nav-bar-text-color       | ` var(--primary-color);`     |
| --nav-bar-title-font-size  | ` @font-size-lg;`            |
| --nav-bar-title-text-color | ` @text-color;`              |
