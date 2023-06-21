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

| 参数                | 说明 | 类型                                                                                                                                                                                                                                 | 默认值 | 必填    |
| ------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| active              | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                  | -      | `false` |
| activeColor         | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                            | -      | `false` |
| inactiveColor       | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                            | -      | `false` |
| fixed               | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | -      | `false` |
| placeholder         | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | -      | `false` |
| border              | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | -      | `false` |
| zIndex              | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                            | -      | `false` |
| safeAreaInsetBottom | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                           | -      | `false` |
| children            | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                         | -      | `false` |
| onChange            | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | -      | `false` |

### TabbarItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tabbar.d.ts)

| 参数             | 说明 | 类型                                                                                                                             | 默认值 | 必填    |
| ---------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| info             | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                     | -      | `false` |
| name             | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                              | -      | `false` |
| icon             | -    | _&nbsp;&nbsp;string<br/>_                                                                                                        | -      | `false` |
| dot              | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                       | -      | `false` |
| iconPrefix       | -    | _&nbsp;&nbsp;string<br/>_                                                                                                        | -      | `false` |
| renderIconActive | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                     | -      | `false` |
| renderIcon       | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                     | -      | `false` |
| children         | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                     | -      | `false` |
| onClick          | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                      | 默认值     |
| ------------------------- | ---------- |
| --tabbar-height           | ` 100px;`  |
| --tabbar-background-color | ` @white;` |
