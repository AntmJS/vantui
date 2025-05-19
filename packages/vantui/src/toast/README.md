# Toast 轻提示

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。
(一个 toast 弹出的时候会先关闭其它 Toast, 后续支持多 Toast)

> `v3.4.4`版本后可以不再写`JSX`, 直接命令式调用

### 引入

在 Taro 文件中引入组件

```js
import { Toast } from '@antmjs/vantui'
```

## 代码演示

### 文字提示

`v3.4.4`版本前，须要在 JSX 里面申明后，才能用命令式调用, `v3.5.4`版本废弃 ⚠️`forbidClick`,默认开启阻断点击

::: $demo1 :::

### 加载提示

使用 `Toast.loading` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击，通过 `loadingType` 属性可以自定义加载图标类型。

::: $demo2 :::

### 成功/失败提示

::: $demo3 :::

### 动态更新提示

::: $demo4 :::

### OnClose 回调函数

```javascript
Toast.show({
  type: 'success',
  message: '提交成功',
  onClose: () => {
    console.log('执行OnClose函数')
  },
})
```

### ToastProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/toast.d.ts)

| 参数        | 说明                                    | 类型                                                                                                                                                                                                                                                                                | 默认值    | 必填    |
| ----------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| zIndex      | 弹出层的层级                            | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                           | 1000      | `false` |
| duration    | 展示时长(ms)，值为 0 时，toast 不会消失 | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                           | 2000      | `false` |
| mask        | 是否有蒙层                              | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                          | false     | `false` |
| forbidClick | 是否禁止背景点击                        | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                          | false     | `false` |
| type        | 提示类型                                | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"loading"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"success"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"fail"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"html"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"text"<br/>_ | text      | `false` |
| position    | 展示位置                                | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"top"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"middle"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"bottom"<br/>_                                                                                                      | middle    | `false` |
| message     | 内容                                    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                        | -         | `false` |
| loadingType | 加载图标类型                            | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"circular"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"spinner"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;undefined<br/>_                                                                                               | spinner   | `false` |
| selector    | 自定义选择器,对应元素 id                | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                           | van-toast | `false` |
| id          | 设置 id,配合 selector 使用              | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                           | -         | `false` |
| children    | -                                       | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                        | -         | `false` |
| onClose     | 关闭时的回调函数                        | _&nbsp;&nbsp;()&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                                                                                              | -         | `false` |

### Toast 下命令式调用方法 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/toast.d.ts)

调用方式传入 ToastProps 或者 ToastProps.message 执行
| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| show | 展示提示 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ToastProps<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | - | `true` |
| loading | 展示加载提示 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ToastProps<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | - | `true` |
| success | 展示成功提示 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ToastProps<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | - | `true` |
| fail | 展示失败提示 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ToastProps<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | - | `true` |
| clear | 关闭提示 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options?:&nbsp;ToastProps<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | - | `true` |
| setDefaultOptions | 修改默认配置，对所有 Toast 生效。传入 type 可以修改指定类型的默认配置 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;options:&nbsp;ToastProps<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | - | `true` |
| resetDefaultOptions | 重置默认配置，对所有 Toast 生效。 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `true` |
| createOnlyToast | 获取唯一的 toast 组件，不需要手动设置 id 和 selector | _&nbsp;&nbsp;()&nbsp;=>&nbsp;FunctionComponent<ToastProps>&nbsp;&<br/>&nbsp;&nbsp;&nbsp;&nbsp;toastProps<br/>_ | - | `true` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                       | 默认值                      |
| -------------------------- | --------------------------- |
| --toast-max-width          | ` 70%;`                     |
| --toast-font-size          | ` 28px;`                    |
| --toast-text-color         | ` @white;`                  |
| --toast-line-height        | ` 40px;`                    |
| --toast-border-radius      | ` @border-radius-lg;`       |
| --toast-background-color   | ` fade(@black, 70%);`       |
| --toast-icon-size          | ` 72px;`                    |
| --toast-text-min-width     | ` 192px;`                   |
| --toast-text-padding       | ` @padding-xs @padding-sm;` |
| --toast-default-padding    | ` @padding-md;`             |
| --toast-default-width      | ` 176px;`                   |
| --toast-default-min-height | ` 176px;`                   |
