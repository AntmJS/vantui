# Swiper 轮播

### 介绍

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

### 安装

```js
import { Swiper, SwiperItem } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

`autoPlay` 自动轮播的时长
`initPage` 初始索引值
`paginationVisible` 是否显示分页指示器
`paginationColor` 指示器颜色自定义
`onChange` 当卡片发生变化

组件和图片项的高度也可以通过`class`写入

::: $demo1 :::

图片数据

```js common
const images = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
]
```

### 动态加载

支持动态增加/删除图片

::: $demo2 :::

### 自定义宽度

`width` 自定义轮播宽度

::: $demo3 :::

### 自定义分页指示器

`pageContent` 表示自定义指示器

::: $demo4 :::

### 垂直方向

`direction` 自定义轮播方向

::: $demo5 :::

### 水平居中展示

`isCenter` 代表可居中，同时必须传 `width`

::: $demo6 :::

### SwiperProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/swiper.d.ts)

| 参数              | 说明                                       | 类型                                                                                                                                 | 默认值   | 必填    |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
| width             | 轮播卡片的宽度                             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | 窗口宽度 | `false` |
| height            | 轮播卡片的高度                             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | -        | `true`  |
| duration          | 动画时长（单位是 ms）                      | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | 500      | `false` |
| initPage          | 初始化索引值                               | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | -        | `false` |
| autoPlay          | 自动轮播时长，0 表示不会自动轮播           | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                  | -        | `true`  |
| direction         | 轮播方向,可选值 horizontal,vertical        | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"horizontal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"vertical"<br/>_ | -        | `false` |
| paginationColor   | 分页指示器选中的颜色                       | _&nbsp;&nbsp;string<br/>_                                                                                                            | #fff     | `false` |
| paginationVisible | 分页指示器是否展示                         | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | true     | `false` |
| loop              | 是否循环轮播                               | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | true     | `false` |
| touchable         | 是否可以手动滑动                           | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | true     | `false` |
| isPreventDefault  | 滑动过程中是否禁用默认事件                 | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | -        | `false` |
| isStopPropagation | 滑动过程中是否禁止冒泡                     | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | -        | `false` |
| isCenter          | 是否居中展示，必须传对应的 width 和 height | _&nbsp;&nbsp;boolean<br/>_                                                                                                           | false    | `false` |
| className         | -                                          | _&nbsp;&nbsp;string<br/>_                                                                                                            | -        | `false` |
| style             | -                                          | _&nbsp;&nbsp;React.CSSProperties<br/>_                                                                                               | -        | `false` |
| pageContent       | 自定义指示器                               | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                   | -        | `false` |
| onChange          | 卡片切换后的回调                           | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;currPage:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                           | -        | `false` |

### SwiperInstance [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/swiper.d.ts)

| 方法 | 说明         | 类型                                                                                                    |
| ---- | ------------ | ------------------------------------------------------------------------------------------------------- |
| to   | 切换到指定页 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| next | 切换到下一页 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                 |
| prev | 切换到上一页 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                 |

### SwiperItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/swiper.d.ts)

| 参数      | 说明 | 类型                               | 默认值 | 必填    |
| --------- | ---- | ---------------------------------- | ------ | ------- |
| direction | -    | _&nbsp;&nbsp;string<br/>_          | -      | `false` |
| size      | -    | _&nbsp;&nbsp;0<br/>_               | -      | `false` |
| className | -    | _&nbsp;&nbsp;string<br/>_          | -      | `false` |
| children  | -    | _&nbsp;&nbsp;React.ReactNode<br/>_ | -      | `true`  |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                      | 默认值   |
| ----------------------------------------- | -------- |
| --swiper-pagination-item-background-color | ` #ddd;` |
