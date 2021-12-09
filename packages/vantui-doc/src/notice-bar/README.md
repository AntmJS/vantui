# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

### 引入

在 Taro 文件中引入组件

```js
import { NoticeBar } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <NoticeBar
    leftIcon="volumeO"
    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  />
</View>
 
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

```jsx
<View>
  {/*  文字较短时，通过设置 scrollable 属性开启滚动播放  */}
  <NoticeBar
    scrollable={ true }
    text="技术是开发它的人的共同灵魂。"
  /> 
  {/*  文字较长时，通过禁用 scrollable 属性关闭滚动播放  */}
  <NoticeBar
    scrollable={ false }
    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  />
</View>
 
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```jsx
<View>
  <NoticeBar
    wrapable={ true }
    scrollable={ false }
    text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
  />
</View>
 
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```jsx
<View>
  {/*  closeable 模式，在右侧显示关闭按钮  */}
  <NoticeBar
    mode="closeable"
    text="技术是开发它的人的共同灵魂。"
  /> 
  {/*  link 模式，在右侧显示链接箭头  */}
  <NoticeBar
    mode="link"
    text="技术是开发它的人的共同灵魂。"
  />
</View>
 
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```jsx
<View>
  <NoticeBar
    color="#1989fa"
    background="#ecf9ff"
    leftIcon="infoO"
    text="技术是开发它的人的共同灵魂。"
  />
</View>
 
```

### 自定义滚动速率

使用`speed`属性控制滚动速率。

```jsx
<View>
  <NoticeBar
    text={ text }
    speed={speedValue}
    leftIcon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
  />
</View>
 
```
### NoticeBarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/notice-bar.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| text | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| mode | - | _&nbsp;&nbsp;"closeable"&nbsp;&brvbar;&nbsp;"link"<br/>_ | - | `false` |
| url | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| openType | - | _&nbsp;&nbsp;any<br/>_ | - | `false` |
| delay | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| speed | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| scrollable | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| leftIcon | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| color | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| backgroundColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| background | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| wrapable | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderLeftIcon | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| renderRightIcon | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| onClick | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |
| onClose | - | _&nbsp;&nbsp;(event:&nbsp;ITouchEvent)&nbsp;=>&nbsp;any<br/>_ | - | `false` |

