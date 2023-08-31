# InfiniteScroll 无限滚动

### 介绍

InfiniteScroll 组件在可见区域时自动加载更多数据。

### 引入

在 Taro 文件中引入组件

```js
import { InfiniteScroll, VirtualList } from '@antmjs/vantui'
```

### 基本使用

- 可见区域为窗口，如果滚动区域不是窗体则通过`parentClassName`设置父元素类名

案例

::: $demo1 :::

### 虚拟列表

::: $demo2 :::

### 请求异常

::: $demo3 :::

### InfiniteScrollProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/infinite-scroll.d.ts)

| 参数            | 说明                                                             | 类型                                                                                                                                                                                                                     | 默认值         | 必填    |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------- |
| className       | 类名                                                             | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                | -              | `false` |
| loadMore        | 加载方法，初始化便触发，需要返回 promise 加上后续的状态          | _&nbsp;&nbsp;()&nbsp;=>&nbsp;Promise<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"loading"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"complete"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"error"<br/>&nbsp;&nbsp;><br/>_ | -              | `true`  |
| parentClassName | 所在父级的类名，不设置的话，相对于窗口计算 InfiniteScroll 的位置 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                | -              | `false` |
| completeText    | 加载完成文案                                                     | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                       | `没有更多了～` | `false` |
| loadingText     | 加载文案                                                         | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                       | `加载中...`    | `false` |
| reloadText      | 重新加载按钮                                                     | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                       | `重新加载`     | `false` |
| errorText       | 错误状态文案                                                     | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                       | `加载失败`     | `false` |
| renderComplete  | 自定义完成状态的渲染                                             | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                       | -              | `false` |
| renderLoading   | 自定义 loading 状态的渲染                                        | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                       | -              | `false` |
| renderError     | 自定义 error 状态的渲染                                          | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                       | -              | `false` |

### InfiniteScrollInstance [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/infinite-scroll.d.ts)

| 方法  | 说明         | 类型                                                                                                                  |
| ----- | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| reset | 重置加载状态 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;loadMore?:&nbsp;boolean<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Promise<null><br/>_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                            | 默认值                   |
| ------------------------------- | ------------------------ |
| --infinite-scroll-primary-color | ` var(--primary-color);` |
| --infinite-scroll-color         | ` @gray-6;`              |
| --infinite-scroll-font-size     | ` @font-size-md;`        |
