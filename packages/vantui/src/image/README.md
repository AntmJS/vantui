# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 引入

在 Taro 文件中引入组件

```js
import { Image } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 填充模式

通过`fit`属性可以设置图片填充模式，可选值见下方表格。

::: $demo2 :::

### 圆形图片

通过`round`属性可以设置图片变圆，注意当图片宽高不相等且`fit`为`contain`或`scaleDown`时，将无法填充一个完整的圆形。

::: $demo3 :::

### 图片懒加载

图片懒加载，在即将进入一定范围（上下三屏）时才开始加载。

::: $demo4 :::

### 加载中提示

`Image`组件提供了默认的加载中提示，支持通过`loading`插槽自定义内容。

::: $demo5 :::

### 加载失败提示

`Image`组件提供了默认的加载失败提示，支持通过`renderError`来自定义内容。

::: $demo6 :::

### ImageProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/image.d.ts)

| 参数                | 说明                                 | 类型                                                                                                                                                                                                                                                                                                                                        | 默认值 | 必填    |
| ------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| src                 | 图片链接                             | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                   | -      | `true`  |
| round               | 是否圆角                             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| width               | 宽度，单位为 px                      | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                         | -      | `false` |
| height              | 高度，单位为 px                      | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                         | -      | `false` |
| radius              | 圆角大小                             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                         | 0      | `false` |
| lazyLoad            | 是否懒加载                           | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| showMenuByLongpress | 是否开启长按图片显示识别小程序码菜单 | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| fit                 | 图片填充模式                         | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"contain"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"cover"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"fill"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"widthFix"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"heightFix"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"none"<br/>_ | fill   | `false` |
| showError           | 是否展示图片加载失败提示             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | false  | `false` |
| showLoading         | 是否使用 loading 状态                | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                  | true   | `false` |
| renderLoading       | 渲染 loading 展示元素                | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                | -      | `false` |
| renderError         | 渲染错误描述展示元素                 | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                 | 默认值                |
| ------------------------------------ | --------------------- |
| --image-placeholder-text-color       | ` @gray-6;`           |
| --image-placeholder-font-size        | ` @font-size-md;`     |
| --image-placeholder-background-color | ` @background-color;` |
| --image-loading-icon-size            | ` 64px;`              |
| --image-loading-icon-color           | ` @gray-4;`           |
| --image-error-icon-size              | ` 64px;`              |
| --image-error-icon-color             | ` @gray-4;`           |
