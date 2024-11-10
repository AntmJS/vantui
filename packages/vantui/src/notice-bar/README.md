# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

### 引入

在 Taro 文件中引入组件

```js
import { NoticeBar } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

::: $demo2 :::

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

::: $demo3 :::

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

::: $demo4 :::

### 垂直用法

::: $demo5 :::

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

::: $demo6 :::

### 自定义滚动速率

使用`speed`属性控制滚动速率。

::: $demo7 :::

### NoticeBarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/notice-bar.d.ts)

| 参数            | 说明                                                                                                                      | 类型                                                                                                                                                                                                                                                                                                                                                    | 默认值   | 必填    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| text            | 通知文本内容                                                                                                              | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                            | ""       | `false` |
| mode            | 通知栏模式，可选值为 closeable link                                                                                       | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"closeable"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"link"<br/>_                                                                                                                                                                                                                         | ""       | `false` |
| url             | 当 mode 为 link 类型时候的 url                                                                                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                               | -        | `false` |
| openType        | 当 mode 为 link 类型时候的跳转方式                                                                                        | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"navigate"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"redirect"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"switchTab"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"reLaunch"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"navigateBack"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"exit"<br/>_ | navigate | `false` |
| delay           | 动画延迟时间 (s)                                                                                                          | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                               | 1        | `false` |
| speed           | 滚动速率 (px/s)                                                                                                           | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                               | 60       | `false` |
| scrollable      | 是否在长度溢出时滚动播放                                                                                                  | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                              | false    | `false` |
| leftIcon        | 左侧图标名称或图片链接，可选值见 Icon 组件                                                                                | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                               | -        | `false` |
| color           | 文本颜色                                                                                                                  | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                               | #ed6a0c  | `false` |
| backgroundColor | 滚动条背景颜色                                                                                                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                               | #fffbe8  | `false` |
| background      | 滚动条背景                                                                                                                | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                               | -        | `false` |
| wrapable        | 是否开启文本换行，只在禁用滚动时生效                                                                                      | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                              | false    | `false` |
| children        | -                                                                                                                         | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                            | -        | `false` |
| renderLeftIcon  | 自定义左侧图标                                                                                                            | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                            | -        | `false` |
| renderRightIcon | 自定义右侧图标                                                                                                            | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                            | -        | `false` |
| onClick         | 点击通知栏时触发                                                                                                          | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                                                                                             | -        | `false` |
| onClose         | 关闭通知栏时触发                                                                                                          | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                                                                                             | -        | `false` |
| rectWrapper     | 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的 className(‘.xx’)或 id(#xx), 支持当前组件获取 rect 信息 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                               | -        | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                          | 默认值                      |
| ----------------------------- | --------------------------- |
| --notice-bar-height           | ` 80px;`                    |
| --notice-bar-padding          | ` 0 @padding-md;`           |
| --notice-bar-wrapable-padding | ` @padding-xs @padding-md;` |
| --notice-bar-font-size        | ` @font-size-md;`           |
| --notice-bar-text-color       | ` @orange-dark;`            |
| --notice-bar-line-height      | ` 48px;`                    |
| --notice-bar-background-color | ` @orange-light;`           |
| --notice-bar-icon-size        | ` 32px;`                    |
| --notice-bar-icon-min-width   | ` 44px;`                    |
