# Loading 加载

### 介绍

加载图标，用于表示加载中的过渡状态。

### 引入

在 Taro 文件中引入组件

```js
import { Loading } from '@antmjs/vantui'
```

## 代码演示

### 加载类型

```jsx
function Demo() {
  return (
    <>
      <Loading />
      <Loading type="spinner" />
    </>
  )
}
```

### 自定义颜色

```jsx
function Demo() {
  return (
    <>
      <Loading color="#1989fa" />
      <Loading type="spinner" color="#1989fa" />
    </>
  )
}
```

### 加载文案

```jsx
function Demo() {
  return <Loading size="24px">加载中...</Loading>
}
```

### 垂直排列

```jsx
function Demo() {
  return (
    <Loading size="24px" vertical>
      加载中...
    </Loading>
  )
}
```

### LoadingProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/loading.d.ts)

| 参数     | 说明                        | 类型                                                                                                                              | 默认值   | 必填    |
| -------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| color    | 颜色                        | _&nbsp;&nbsp;string<br/>_                                                                                                         | #c8c9cc  | `false` |
| vertical | 是否垂直排列图标和文字内容  | _&nbsp;&nbsp;boolean<br/>_                                                                                                        | false    | `false` |
| type     | 类型，可选值为 spinner      | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"spinner"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"circular"<br/>_ | circular | `false` |
| size     | 加载图标大小，默认单位为 px | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                               | 30px     | `false` |
| textSize | 文字大小，默认单位为 px     | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_                                                                               | 14px     | `false` |
| children | 加载文案                    | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                | -        | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                 | 默认值            |
| ------------------------------------ | ----------------- |
| --loading-text-color                 | ` @gray-6;`       |
| --loading-text-font-size             | ` @font-size-md;` |
| --loading-text-line-height           | ` 40px;`          |
| --loading-spinner-color              | ` @gray-5;`       |
| --loading-spinner-size               | ` 60px;`          |
| --loading-spinner-animation-duration | ` 0.8s;`          |
