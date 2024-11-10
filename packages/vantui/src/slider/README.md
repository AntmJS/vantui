# Slider 滑块

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 引入

在 Taro 文件中引入组件

```js
import { Slider } from '@antmjs/vantui'
```

## 代码演示

### 基本用法

::: $demo1 :::

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

::: $demo2 :::

### 指定选择范围

::: $demo3 :::

### 禁用

::: $demo4 :::

### 指定步长

::: $demo5 :::

### 自定义样式

::: $demo6 :::

### 自定义按钮

::: $demo7 :::

h5 注意需要需加`visibility: visible`

```css
.customButton {
  width: 112px;
  color: #ffffff;
  font-size: 20px;
  line-height: 36px;
  text-align: center;
  border-radius: 200px;
  background-color: #ee0a24;
  visibility: visible;
}
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 100% 父元素高度。

::: $demo8 :::

### SliderProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/slider.d.ts)

| 参数          | 说明                                                                                                                      | 类型                                                                                                                                                                | 默认值  | 必填    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| range         | -                                                                                                                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                          | -       | `false` |
| disabled      | 是否禁用滑块                                                                                                              | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                          | false   | `false` |
| activeColor   | 进度条激活态颜色                                                                                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                           | #07c160 | `false` |
| inactiveColor | 进度条默认颜色                                                                                                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                           | -       | `false` |
| max           | 最大值                                                                                                                    | _&nbsp;&nbsp;number<br/>_                                                                                                                                           | 100     | `false` |
| min           | 最小值                                                                                                                    | _&nbsp;&nbsp;number<br/>_                                                                                                                                           | 0       | `false` |
| step          | 步长                                                                                                                      | _&nbsp;&nbsp;number<br/>_                                                                                                                                           | 1       | `false` |
| value         | 当前进度百分比                                                                                                            | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;number[]<br/>_                                                                                                               | 0       | `false` |
| barHeight     | 进度条高度，默认单位为 px                                                                                                 | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                 | -       | `false` |
| vertical      | 是否垂直展示                                                                                                              | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                          | false   | `false` |
| onDrag        | 拖动时触发                                                                                                                | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent&nbsp;&<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SliderEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -       | `false` |
| onChange      | 进度变化且结束拖动后触发                                                                                                  | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent&nbsp;&<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SliderEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -       | `false` |
| onDragStart   | 开始拖动时触发                                                                                                            | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                             | -       | `false` |
| onDragEnd     | 结束拖动时触发                                                                                                            | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                             | -       | `false` |
| renderButton  | 自定义滑动按钮                                                                                                            | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                  | -       | `false` |
| rectWrapper   | 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的 className(‘.xx’)或 id(#xx), 支持当前组件获取 rect 信息 | _&nbsp;&nbsp;string<br/>_                                                                                                                                           | -       | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                               | 默认值                           |
| ---------------------------------- | -------------------------------- |
| --slider-active-background-color   | ` var(--primary-color);`         |
| --slider-inactive-background-color | ` @gray-3;`                      |
| --slider-disabled-opacity          | ` @disabled-opacity;`            |
| --slider-bar-height                | ` 4px;`                          |
| --slider-button-width              | ` 48px;`                         |
| --slider-button-height             | ` 48px;`                         |
| --slider-button-border-radius      | ` 50%;`                          |
| --slider-button-background-color   | ` @white;`                       |
| --slider-button-box-shadow         | ` 0 2px 4px rgba(0, 0, 0, 0.5);` |
