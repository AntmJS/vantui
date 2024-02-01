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

::: $demo1 :::

### 基础用法

通过`active`设定当前激活标签对应的索引值，默认情况下启用第一个标签。

::: $demo2 :::

### 通过名称匹配

在标签指定`name`属性的情况下，`active`的值为当前标签的`name`（此时无法通过索引值来匹配标签）。

::: $demo3 :::

### 横向滚动

多于 5 个标签时，Tab 可以横向滚动。

::: $demo4 :::

### 禁用标签

设置`disabled`属性即可禁用标签。如果需要监听禁用标签的点击事件，可以在`vanTabs`上监听`disabled`事件。

::: $demo5 :::

### 样式风格

`Tab`支持两种样式风格：`line`和`card`，默认为`line`样式，可以通过`type`属性修改样式风格。

::: $demo6 :::

### 点击事件

可以在`vanTabs`上绑定`click`事件，在回调参数的`event.detail`中可以取得被点击标签的标题和标识符。

::: $demo7 :::

### 切换动画

可以通过`animated`来设置是否启用切换 tab 时的动画。

::: $demo8 :::

### 滑动切换

通过`swipeable`属性可以开启滑动切换标签页。

::: $demo9 :::

### TabsProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tab.d.ts)

| 参数               | 说明                                                                   | 类型                                                                                                                                                                                                                                                                                                                                                                                                              | 默认值 | 必填    |
| ------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| sticky             | 固定模式                                                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | false  | `false` |
| container          | 固定模式的容器                                                         | _&nbsp;&nbsp;()&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                                                                                                                                                                                                                            | 根元素 | `false` |
| border             | 是否展示外边框，仅在 line 风格下生效                                   | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | false  | `false` |
| swipeable          | 是否开启手势滑动切换                                                   | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | false  | `false` |
| titleActiveColor   | 标题选中态颜色                                                         | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| titleInactiveColor | 标题默认态颜色                                                         | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| color              | 标签主题色                                                             | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| animated           | 是否有切换动画                                                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | -      | `false` |
| active             | 当前选中标签的标识符                                                   | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                               | -      | `false` |
| type               | 展示类型                                                               | _&nbsp;&nbsp;"card"&nbsp;&brvbar;&nbsp;"line"<br/>_                                                                                                                                                                                                                                                                                                                                                               | -      | `false` |
| ellipsis           | 内容过长，是否展示省略号                                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | true   | `false` |
| duration           | 滑动内容的动画交互时间，type=line 的动画时间需要通过 css/less 变量配置 | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| zIndex             | 固定模式下的层级                                                       | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| swipeThreshold     | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动         | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| offsetTop          | 粘性定位布局下与顶部的最小距离，单位 px                                | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                         | -      | `false` |
| lazyRender         | 是否开启标签页内容延迟渲染                                             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                        | true   | `false` |
| children           | -                                                                      | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                      | -      | `true`  |
| renderNavLeft      | 左侧内容渲染                                                           | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                      | -      | `false` |
| renderNavRight     | 右侧内容渲染                                                           | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                      | -      | `false` |
| onScroll           | -                                                                      | _&nbsp;&nbsp;(data:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scrollTop?:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;null<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isFixed?:&nbsp;boolean<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onClick            | -                                                                      | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;TabEventDetail<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                   | -      | `false` |
| onChange           | -                                                                      | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;TabEventDetail<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                   | -      | `false` |
| onDisabled         | -                                                                      | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;TabEventDetail<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                   | -      | `false` |

### TabEventDetail [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tab.d.ts)

| 参数   | 说明 | 类型                                                                                                                                                                                 |
| ------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| detail | -    | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;name?:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;title?:&nbsp;string<br/>&nbsp;&nbsp;}<br/>_ |

### TabProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tab.d.ts)

| 参数       | 说明                       | 类型                                                | 默认值 | 必填    |
| ---------- | -------------------------- | --------------------------------------------------- | ------ | ------- |
| dot        | 是否显示小红点             | _&nbsp;&nbsp;boolean<br/>_                          | false  | `false` |
| info       | 图标右上角提示信息         | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | -      | `false` |
| title      | 标题                       | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |
| disabled   | -                          | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| titleStyle | -                          | _&nbsp;&nbsp;string<br/>_                           | -      | `false` |
| name       | 标签名称，作为匹配的标识符 | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | -      | `false` |
| children   | -                          | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                      | 默认值            |
| ------------------------- | ----------------- |
| --tab-text-color          | ` @gray-7;`       |
| --tab-active-text-color   | ` @text-color;`   |
| --tab-disabled-text-color | ` @gray-5;`       |
| --tab-font-size           | ` @font-size-md;` |
