# Uploader 文件上传

### 介绍

用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。

### 引入

在 Taro 文件中引入组件

```js
import { Uploader } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

文件上传完毕后会触发`afterRead`回调函数，获取到对应的文件的临时地址，然后再使用`wx.uploadFile`将图片上传到远程服务器上。

::: $demo1 :::

### 上传状态

通过`status`属性可以标识上传状态，`uploading`表示上传中，`failed`表示上传失败，`done`表示上传完成。

::: $demo2 :::

### 限制上传数量

通过`maxCount`属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。

::: $demo3 :::

### 自定义上传样式

通过插槽可以自定义上传区域的样式。

::: $demo4 :::

### 上传前校验

将`useBeforeRead`属性设置为`true`，然后绑定 `beforeRead` 事件可以在上传前进行校验，调用 `callback` 方法传入 `true` 表示校验通过，传入 `false` 表示校验失败。

::: $demo5 :::

### UploaderProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/uploader.d.ts)

| 参数             | 说明 | 类型                                                                                                                                                                                                                                                                            | 默认值 | 必填    |
| ---------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| disabled         | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                      | -      | `false` |
| multiple         | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                      | -      | `false` |
| uploadText       | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                    | -      | `false` |
| useBeforeRead    | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                      | -      | `false` |
| afterRead        | -    | _&nbsp;&nbsp;any<br/>_                                                                                                                                                                                                                                                          | -      | `false` |
| beforeRead       | -    | _&nbsp;&nbsp;any<br/>_                                                                                                                                                                                                                                                          | -      | `false` |
| previewSize      | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                                                             | -      | `false` |
| name             | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                                                                                                                                                                             | -      | `false` |
| accept           | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"all"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"media"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"image"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"file"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"video"<br/>_ | -      | `false` |
| fileList         | -    | _&nbsp;&nbsp;Array<any><br/>_                                                                                                                                                                                                                                                   | -      | `false` |
| maxSize          | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                       | -      | `false` |
| maxCount         | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                       | -      | `false` |
| deletable        | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                      | -      | `false` |
| showUpload       | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                      | -      | `false` |
| previewImage     | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                      | -      | `false` |
| previewFullImage | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                      | -      | `false` |
| imageFit         | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;keyof&nbsp;ImageProps.Mode<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;undefined<br/>_                                                                                                                               | -      | `false` |
| uploadIcon       | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                       | -      | `false` |
| sizeType         | -    | _&nbsp;&nbsp;Array<string><br/>_                                                                                                                                                                                                                                                | -      | `false` |
| capture          | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<string><br/>_                                                                                                                                               | -      | `false` |
| compressed       | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                      | -      | `false` |
| maxDuration      | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                       | -      | `false` |
| camera           | -    | _&nbsp;&nbsp;"back"&nbsp;&brvbar;&nbsp;"front"<br/>_                                                                                                                                                                                                                            | -      | `false` |
| children         | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                    | -      | `false` |
| onError          | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;error:&nbsp;any<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                             | -      | `false` |
| onDelete         | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                     | -      | `false` |
| onBeforeRead     | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                     | -      | `false` |
| onAfterRead      | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                     | -      | `false` |
| onOversize       | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                     | -      | `false` |
| onClickPreview   | -    | _&nbsp;&nbsp;(data:&nbsp;any)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                                                                            | -      | `false` |
| onClickUpload    | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                     | -      | `false` |
