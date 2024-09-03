# Tabbar 标签栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Tabbar, TabbarItem } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 通过名称匹配

在标签指定`name`属性的情况下，`vModel`的值为当前标签的`name`。

::: $demo2 :::

### 显示徽标

::: $demo3 :::

### 自定义图标

::: $demo4 :::

### 自定义颜色

::: $demo5 :::

### 结合自定义 tabBar

请参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/customTabbar.html) 与 [代码片段](https://developers.weixin.qq.com/s/vaXgTsmQ7hnm)。

### TabbarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tabbar.d.ts)

| 参数                | 说明                                                                                                                      | 类型                                                                                                                                                                                                                                 | 默认值 | 必填    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| active              | 绑定当前选中标签的标识符                                                                                                  | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                  | -      | `false` |
| activeColor         | 激活状态的颜色                                                                                                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                            | -      | `false` |
| inactiveColor       | 默认状态的颜色                                                                                                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                            | -      | `false` |
| fixed               | 是否固定在底部                                                                                                            | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | true   | `false` |
| placeholder         | 固定在底部时，是否在标签位置生成一个等高的占位元素                                                                        | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | false  | `false` |
| border              | 是否显示外边框                                                                                                            | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | true   | `false` |
| zIndex              | 元素 z-index                                                                                                              | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                            | -      | `false` |
| safeAreaInsetBottom | 是否开启底部安全区适配                                                                                                    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | -      | `false` |
| children            | -                                                                                                                         | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                         | -      | `false` |
| onChange            | 切换标签时触发                                                                                                            | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| rectWrapper         | 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的 className(‘.xx’)或 id(#xx), 支持当前组件获取 rect 信息 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                            | -      | `false` |

### TabbarItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tabbar.d.ts)

| 参数             | 说明                                             | 类型                                                                                                                             | 默认值           | 必填    |
| ---------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| info             | -                                                | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                     | -                | `false` |
| name             | 标签名称，作为匹配的标识符                       | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                              | 当前标签的索引值 | `false` |
| icon             | 图标名称或图片链接，等同于 Icon 组件的 name 属性 | _&nbsp;&nbsp;string<br/>_                                                                                                        | -                | `false` |
| dot              | 是否显示图标右上角小红点                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                       | false            | `false` |
| iconPrefix       | 图标类名前缀                                     | _&nbsp;&nbsp;string<br/>_                                                                                                        | van-icon         | `false` |
| renderIconActive | 自定义选中的图标                                 | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                     | -                | `false` |
| renderIcon       | 自定义默认的图标                                 | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                     | -                | `false` |
| children         | -                                                | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                     | -                | `false` |
| onClick          | 切换标签时触发                                   | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -                | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                      | 默认值     |
| ------------------------- | ---------- |
| --tabbar-height           | ` 100px;`  |
| --tabbar-background-color | ` @white;` |
