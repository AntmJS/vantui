# ImageViewer 图片查看

### 介绍

支持全屏预览图片，通过函数式调用

### 引入

在 Taro 文件中引入组件

```js
import { ImageViewer } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 指定下标

::: $demo2 :::

### ImageViewerProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/image-viewer.d.ts)

| 参数         | 说明                 | 类型                        | 默认值 | 必填    |
| ------------ | -------------------- | --------------------------- | ------ | ------- |
| list         | 展示的图片列表       | _&nbsp;&nbsp;string[]<br/>_ | -      | `false` |
| currentIndex | 初始化展示第几张图片 | _&nbsp;&nbsp;number<br/>_   | 0      | `false` |
