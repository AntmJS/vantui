# VirtualList 虚拟列表

### 介绍

指渲染可视区域的元素，支持等高单列、不等高单列、瀑布流

### 引用

```js
import { VirtualList } from '@antmjs/vantui'
```

### 基本使用

- `showCount`必须大于可视区域可展示的最大数量
- 半虚拟：是否区域最多渲染`N`个元素，组件内永远只渲染`2N`个元素
- 支持等高和不等高的单列列表
- 支持多列等高的列表：`dataSource`传入二维数组，请通过`ItemRender`去渲染多列
- 高度的设置尽量通过 className 去设置
- 虚拟列表里面的图片请使用`Taro`自带的

案例如下

::: $demo1 :::

模拟商品数据

```js common
const mockGoods = () => {
  const initData = [
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title:
        '中老年羽绒服男冬季爸爸装薄短款白鸭绒中年人男士保暖外套男装 夜空黑 L【建议115斤以内】',
      price: '¥165.00',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title: 'HLA海澜之家马丁靴男士高帮男靴复古工装鞋',
      price: '¥361.00',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title:
        '洁丽雅拖鞋男夏浴室洗澡防滑家居室内EVA大码男士凉拖鞋居家用夏季防臭 灰色 41-42【标准码】',
      price: '¥22.50',
    },
    {
      image: 'https://img.yzcdn.cn/vant/cat.jpeg',
      title: '夏季新款男士T恤宽松气质高端百搭时尚短袖体恤潮牌',
      price: '¥212.00',
    },
  ]
  return new Array(33).fill('').map((item, index) => {
    return {
      index,
      ...initData[index % 4],
      isCutPrice: index % 2 === 0 ? true : false,
    }
  })
}
```

### IVirtualListProps<T> [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/virtual-list.d.ts)

| 参数              | 说明                                                           | 类型                                                                                                                                                                                                                                                       | 默认值      | 必填    |
| ----------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------- |
| listStyle         | 列容器的样式                                                   | _&nbsp;&nbsp;CSSProperties<br/>_                                                                                                                                                                                                                           | -           | `false` |
| listClssName      | 列容器的样式名                                                 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                  | -           | `false` |
| height            | 滚动外层容器高度                                               | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                                                                                                        | -           | `true`  |
| footer            | 底部额外渲染                                                   | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                               | -           | `false` |
| showCount         | 可视区域展示的最大数量, 高度不一的时候按全部最小高度展示去计算 | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                  | -           | `true`  |
| dataSource        | 数据源，数组                                                   | _&nbsp;&nbsp;Array<T><br/>_                                                                                                                                                                                                                                | -           | `true`  |
| ItemRender        | 自定义渲染每一项                                               | _&nbsp;&nbsp;FunctionComponent<<br/>&nbsp;&nbsp;&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item:&nbsp;T<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index?:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&&nbsp;ViewProps<br/>&nbsp;&nbsp;><br/>_ | -           | `true`  |
| renderBackToTop   | 自定义回到顶部按钮渲染                                         | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                               | -           | `false` |
| backToTopSuccess  | 成功返回顶部后执行                                             | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                    | -           | `false` |
| backToTopCritical | 展示返回顶端按钮的临界值，上方隐藏了多少个 ItemRender          | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                  | `showCount` | `false` |

### 组件实例 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/virtual-list.d.ts)

| 方法      | 说明     | 类型                                    |
| --------- | -------- | --------------------------------------- |
| reset     | 重置状态 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| backToTop | 返回顶部 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
