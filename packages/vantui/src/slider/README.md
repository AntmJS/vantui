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

| 参数          | 说明 | 类型                                                                                                                                                                | 默认值 | 必填    |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| range         | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                          | -      | `false` |
| disabled      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                          | -      | `false` |
| activeColor   | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                           | -      | `false` |
| inactiveColor | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                           | -      | `false` |
| max           | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                           | -      | `false` |
| min           | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                           | -      | `false` |
| step          | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                           | -      | `false` |
| value         | -    | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;number[]<br/>_                                                                                                               | -      | `false` |
| barHeight     | -    | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                 | -      | `false` |
| vertical      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                          | -      | `false` |
| onDrag        | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent&nbsp;&<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SliderEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onChange      | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;e:&nbsp;ITouchEvent&nbsp;&<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SliderEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| onDragStart   | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                             | -      | `false` |
| onDragEnd     | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                             | -      | `false` |
| renderButton  | -    | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                  | -      | `false` |

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
