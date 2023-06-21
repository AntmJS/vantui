# PullToRefresh 下拉刷新

### 介绍

在列表中通过手指下拉刷新加载新内容的交互操作。

### 引用

```js
import { PullToRefresh } from '@antmjs/vantui'
```

### 基本使用

::: $demo1 :::

解决和滚动操作冲突问题

```jsx
function Index() {
  const [scrollTop, setTop] = useState(0)
  const onscroll = (e) => setTop(e.detail.scrollTop)
  // ....
  return (
    <PullToRefresh disable={scrollTop > 0} onRefresh={onRefresh}>
      <ScrollView onScroll={onscroll}>
        <View>xxxx</View>
      </ScrollView>
    </PullToRefresh>
  )
}
```

### IPullToRefreshProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/pull-to-refresh.d.ts)

| 参数            | 说明                                             | 类型                                                  | 默认值      | 必填    |
| --------------- | ------------------------------------------------ | ----------------------------------------------------- | ----------- | ------- |
| children        | -                                                | _&nbsp;&nbsp;React.ReactNode<br/>_                    | -           | `false` |
| pullText        | 下拉文案                                         | _&nbsp;&nbsp;React.ReactNode<br/>_                    | `下拉刷新`  | `false` |
| releaseText     | 放开文案                                         | _&nbsp;&nbsp;React.ReactNode<br/>_                    | `松开刷新`  | `false` |
| loadingText     | 加载文案                                         | _&nbsp;&nbsp;React.ReactNode<br/>_                    | `加载中...` | `false` |
| renderLoading   | 自定义加载                                       | _&nbsp;&nbsp;React.ReactNode<br/>_                    | -           | `false` |
| successText     | 加载成功文案                                     | _&nbsp;&nbsp;React.ReactNode<br/>_                    | `刷新成功`  | `false` |
| onRefresh       | 触发刷新方法，返回 Promise 成功                  | _&nbsp;&nbsp;()&nbsp;=>&nbsp;Promise<undefined><br/>_ | -           | `true`  |
| touchMaxStart   | 可触发下拉的 y 轴间距，相对于 PullToRefresh 组件 | _&nbsp;&nbsp;number<br/>_                             | `300`       | `false` |
| headHeight      | 高度                                             | _&nbsp;&nbsp;number<br/>_                             | `40`        | `false` |
| disable         | 是否禁用                                         | _&nbsp;&nbsp;boolean<br/>_                            | `false`     | `false` |
| successDuration | 成功状态展示时长                                 | _&nbsp;&nbsp;number<br/>_                             | `1000`      | `false` |
| touchMinTime    | 触摸触发拖拽的最小停留时间                       | _&nbsp;&nbsp;number<br/>_                             | `400`       | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                 | 默认值            |
| ------------------------------------ | ----------------- |
| --pull-to-refresh-font-size          | ` @font-size-md;` |
| --pull-to-refresh-animation-duration | ` 0.4s;`          |
