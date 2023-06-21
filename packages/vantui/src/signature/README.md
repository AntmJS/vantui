# Signature 签名

### 介绍

基于 Canvas 的签名组件

### 引用

```jsx
import { Signature } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 修改颜色和签字粗细

::: $demo2 :::

### ISignatureProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/signature.d.ts)

| 参数        | 说明           | 类型                                              | 默认值   | 必填    |
| ----------- | -------------- | ------------------------------------------------- | -------- | ------- |
| canvasId    | 画布元素 id    | _&nbsp;&nbsp;string<br/>_                         | spcanvas | `false` |
| type        | 获取图片的类型 | _&nbsp;&nbsp;"jpg"&nbsp;&brvbar;&nbsp;"png"<br/>_ | `png`    | `false` |
| lineWidth   | 线条的宽度     | _&nbsp;&nbsp;number<br/>_                         | `3`      | `false` |
| strokeStyle | 绘图颜色       | _&nbsp;&nbsp;string<br/>_                         | `#000`   | `false` |
| className   | 样式名         | _&nbsp;&nbsp;string<br/>_                         | -        | `false` |

### 组件实例 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/signature.d.ts)

| 方法     | 说明                                                                                                                            | 类型                                                                                                                                                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| getImage | 获取绘制生成的图片相关数据，tempFilePath 在 h5 为 base64，小程序为临时图片，由于 canvasToTempFilePath 在部分小程序 IDE 无法调试 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;Promise<{<br/>&nbsp;&nbsp;&nbsp;&nbsp;base64:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;tempFilePath:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;canvas:&nbsp;HTMLCanvasElement<br/>&nbsp;&nbsp;}><br/>_ |
| clear    | 清除画布方法                                                                                                                    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                          |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                      | 默认值      |
| ------------------------- | ----------- |
| --signature-border-color  | ` #dadada;` |
| --signature-border-width  | ` 1px;`     |
| --signature-height        | ` 300px;`   |
| --signature-margin-bottom | ` 20px;`    |
