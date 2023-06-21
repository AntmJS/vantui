# WaterMark 水印

### 介绍

页面上添加特定的文字或图案, 作为版权标识或者其他特定信息标识

### 引入

在 Taro 文件中引入组件

```js
import { WaterMark } from '@antmjs/vantui'
```

## 基本使用

::: $demo1 :::

### WaterMarkProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/water-mark.d.ts)

| 参数        | 说明                                                 | 类型                                                                                                                                                                                                                                | 默认值            | 必填    |
| ----------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------- |
| gapX        | 水印之间的水平间距                                   | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                           | `24`              | `false` |
| gapY        | 水印之间的垂直间距                                   | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                           | `48`              | `false` |
| zIndex      | 追加的水印元素的 z-index                             | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                           | `2000`            | `false` |
| width       | 水印的宽度                                           | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                           | `120`             | `false` |
| height      | 水印的高度                                           | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                           | `64`              | `false` |
| rotate      | 水印绘制时，旋转的角度，单位 °                       | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                           | `2000`            | `false` |
| image       | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                           | -                 | `false` |
| imageWidth  | 图片宽度                                             | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                           | `120`             | `false` |
| imageHeight | 图片高度                                             | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                           | `64`              | `false` |
| content     | 水印文字内容                                         | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                           | -                 | `false` |
| fontColor   | 字体颜色                                             | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                           | `rgba(0,0,0,.15)` | `false` |
| fontStyle   | 字体 style                                           | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"none"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"normal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"italic"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"oblique"<br/>_ | `normal`          | `false` |
| fontFamily  | 字体                                                 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                           | `sans-serif`      | `false` |
| fontWeight  | 字体粗细                                             | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"normal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"light"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"weight"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>_   | `normal`          | `false` |
| fontSize    | 字体大小                                             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                 | `14`              | `false` |
| fullPage    | 是否沾满屏幕                                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                          | true              | `false` |
