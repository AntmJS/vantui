# Circle 环形进度条

### 介绍

圆环形的进度条组件，支持进度渐变动画。

### 引入

在 Taro 文件中引入组件

```js
import { Circle } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

`value`属性表示进度条的目标进度。

::: $demo1 :::

### 样式定制

- 通过`strokeWidth`属性来控制进度条宽度。
- 通过`color`属性来控制进度条颜色，`layerColor`属性来控制轨道颜色。
- `color`属性支持传入对象格式来定义渐变色。
- 通过`size`属性设置圆环直径。

案例

::: $demo2 :::

### 逆时针方向

将`clockwise`设置为`false`，进度会从逆时针方向开始。

::: $demo3 :::

### CircleProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/circle.d.ts)

| 参数        | 说明 | 类型                                                                                                                                                                                                                                                                                         | 默认值 | 必填    |
| ----------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| text        | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                 | -      | `false` |
| lineCap     | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                    | -      | `false` |
| value       | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                    | -      | `false` |
| speed       | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                    | -      | `false` |
| size        | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                    | -      | `false` |
| fill        | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                    | -      | `false` |
| layerColor  | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                    | -      | `false` |
| color       | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>_ | -      | `false` |
| strokeWidth | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                    | -      | `false` |
| clockwise   | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                   | -      | `false` |
| beginAngle  | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                    | -      | `false` |
| children    | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                 | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                | 默认值          |
| ------------------- | --------------- |
| --circle-text-color | ` @text-color;` |
| --circle-font-color | ` 28px;`        |
