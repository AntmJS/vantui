# WaterfallFlow 瀑布流

### 介绍

瀑布流组件

### 引入

在 Taro 文件中引入组件

```js
import { WaterfallFlow } from '@antmjs/vantui'
```

### 基本使用

- dataSource 类型： TRecord extends BaseRecord，必须包含 key 属性
- renderItem 渲染每一项，第一个参数为列表项的数据源，必须返回 ReactNode，第二个参数为强制更新元素尺寸的方法
- gutter 元素之间的间距，类型：number | [number, number]，当为 number 时，表示水平和垂直间距相同，当为[number, number]时，第一个值表示水平间距，第二个值表示垂直间距

### 基本案例

::: $demo1 :::

### 动态修改列数

columnNum 瀑布流列数，默认两列

::: $demo2 :::

### 延迟加载 & 主动触发 Resize

- renderItem(item, forceResize) -> forceResize 当元素需要主动触发宽度计算时，调用该方法可以触发更新元素尺寸及位置
- calculationDelay 延迟加载的时间，单位：ms

##### 适用场景

- 延迟加载的场景主要用于渲染项中包含图片等元素渲染时无法及时加载完成的元素时，设置一个延迟时间，尽可能的避免元素渲染在列表中后因图片加载而出现的尺寸跳动以及某一列过长的情况
- 主动触发 Resize 可以在在组件内部需要主动触发元素刷新元素尺寸时调用 renderItem 地第二个参数，会触发元素及瀑布流的受影响元素的重新排版

案例

::: $demo3 :::

### BaseRecord [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/waterfall-flow.d.ts)

| 参数 | 说明                                          | 类型                      |
| ---- | --------------------------------------------- | ------------------------- |
| key  | 列表项的唯一标识，同 React 中的 key，必须唯一 | _&nbsp;&nbsp;string<br/>_ |

### WaterfallFlowProps<TRecord [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/waterfall-flow.d.ts)

| 参数             | 说明                            | 类型                                                                                                                                                                                   | 默认值    | 必填    |
| ---------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| columnNum        | 瀑布流的列数                    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                              | 2         | `false` |
| dataSource       | 数据源                          | _&nbsp;&nbsp;TRecord[]<br/>_                                                                                                                                                           | undefined | `true`  |
| renderItem       | 渲染列表项的方法                | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;item:&nbsp;TRecord,<br/>&nbsp;&nbsp;&nbsp;&nbsp;forceResize:&nbsp;()&nbsp;=>&nbsp;void<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;React.ReactNode<br/>_ | -         | `true`  |
| gutter           | 元素间距                        | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;[number,&nbsp;number]<br/>_                                              | 0         | `false` |
| calculationDelay | 延迟计算元素尺寸的时间，单位 ms | _&nbsp;&nbsp;number<br/>_                                                                                                                                                              | 0         | `false` |
