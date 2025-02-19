# ImageCropper 图片裁剪

### 介绍

用来对图片进行剪切生成一张新的图片

### 安装

```js
import { ImageCropper } from '@antmjs/vantui'
```

### 基础用法

::: $demo1 :::

### 截图宽高的比例

- 默认宽高比例是 2/1，scale 可以设置
- `fixScale`可以固定拖拽改变大小后宽高的比例

::: $demo2 :::

### ImageCropperProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/image-cropper.d.ts)

| 参数       | 说明                   | 类型                                                                                                       | 默认值 | 必填    |
| ---------- | ---------------------- | ---------------------------------------------------------------------------------------------------------- | ------ | ------- |
| image      | -                      | _&nbsp;&nbsp;string<br/>_                                                                                  | -      | `true`  |
| onCropper  | 截图操作获取新图       | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;filePath:&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |
| scale      | 宽高比，默认 2/1       | _&nbsp;&nbsp;number<br/>_                                                                                  | 2/1    | `false` |
| allowScale | 是否允许缩放截图框     | _&nbsp;&nbsp;boolean<br/>_                                                                                 | true   | `false` |
| fixScale   | 是否强制固定宽高的比例 | _&nbsp;&nbsp;boolean<br/>_                                                                                 | false  | `false` |
