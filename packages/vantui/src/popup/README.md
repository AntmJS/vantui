# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

在 Taro 文件中引入组件

```js
import { Popup } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

通过`show`属性控制弹出层是否展示。

::: $demo1 :::

### 弹出位置

通过`position`属性设置弹出位置，默认居中弹出，可以设置为`top`、`bottom`、`left`、`right`。

::: $demo2 :::

### 关闭图标

设置`closeable`属性后，会在弹出层的右上角显示关闭图标，并且可以通过`closeIcon`属性自定义图标，使用`closeIconPosition`属性可以自定义图标位置。

::: $demo3 :::

### 圆角弹窗

设置`round`属性后，弹窗会根据弹出位置添加不同的圆角样式。

::: $demo4 :::

### 禁止滚动穿透

使用组件时，会发现内容部分滚动到底时，继续划动会导致底层页面的滚动，这就是滚动穿透。

目前，组件可以通过 `lockScroll` 属性处理部分滚动穿透问题。 **但由于小程序自身原因，弹窗内容区域仍会出现滚动穿透。** 不过，我们为开发者提供了一个推荐方案以完整解决滚动穿透：

#### [pageMeta](https://developers.weixin.qq.com/miniprogram/dev/component/pageMeta.html)

当小程序基础库最低版本在 2.9.0 以上时，即可使用 [pageMeta](https://developers.weixin.qq.com/miniprogram/dev/component/pageMeta.html) 组件动态修改页面样式

```jsx
<View>
  {/*  pageMeta 只能是页面内的第一个节点  */}
  <pageMeta pageStyle={state.show ? 'overflow: hidden;' : ''} />
  <Popup show={state.show} />
</View>
```

### PopupProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/popup.d.ts)

| 参数                | 说明                               | 类型                                                                                                                                                                                                                                                 | 默认值 | 必填    |
| ------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| round               | 是否显示圆角                       | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                           | -      | `false` |
| closeable           | 是否显示关闭图标                   | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                           | -      | `false` |
| overlayStyle        | 自定义遮罩层样式                   | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;CSSProperties<br/>_                                                                                                                    | -      | `false` |
| transition          | 执行                               | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                            | -      | `false` |
| zIndex              | 弹出层的层级                       | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                            | -      | `false` |
| overlay             | 是否显示遮罩层                     | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                           | -      | `false` |
| closeIcon           | 关闭图标名称或图片链接             | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                            | -      | `false` |
| closeIconPosition   | 关闭图标名称或图片链接的位置       | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"top-left"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"top-right"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"bottom-left"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"bottom-right"<br/>_ | -      | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                           | true   | `false` |
| position            | 弹出位置                           | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"top"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"bottom"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"right"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"left"<br/>_                       | center | `false` |
| safeAreaInsetBottom | 是否为 iPhoneX 留出底部安全距离    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                           | true   | `false` |
| safeAreaInsetTop    | 是否留出顶部安全距离（状态栏高度） | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                           | false  | `false` |
| children            | -                                  | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                         | -      | `false` |
| onClickOverlay      | 点击蒙层触发的方法                 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                              | -      | `false` |
| onClose             | 蒙层关闭触发的方法                 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                              | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                        | 默认值         |
| --------------------------- | -------------- |
| --popup-background-color    | ` @page-back;` |
| --popup-round-border-radius | ` 32px;`       |
| --popup-close-icon-size     | ` 36px;`       |
| --popup-close-icon-color    | ` @gray-6;`    |
| --popup-close-icon-margin   | ` 16px;`       |
