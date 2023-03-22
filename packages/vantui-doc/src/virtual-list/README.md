# VirtualList 虚拟列表

### 介绍

指渲染可视区域的元素，支持等高单列、不等高单列、瀑布流

### 引用

```js
import { VirtualList } from '@antmjs/vantui'

const { VirtualEqualList, VirtualHalfList, VirtualWaterfallList } = VirtualList
```

### 半虚拟列表

- `showCount`必须大于可视区域可展示的最大数量
- 半虚拟：是否区域最多渲染`N`个元素，组件内永远只渲染`2N`个元素
- 支持等高和不等高的单列列表
- 支持多列等高的列表：`dataSource`传入二维数组，请通过`ItemRender`去渲染多列
- 高度的设置尽量通过 className 去设置
- 虚拟列表里面的图片请使用`Taro`自带的

```jsx
const data = COMMON.mockGoods()

function Demo() {
  return (
    <VirtualList.VirtualHalfList
      style={{ padding: 10, boxSizing: 'border-box' }}
      height="calc(100vh - 125px)"
      dataSource={data}
      showCount={3}
      ItemRender={react.memo(({ index, item, className, ...props }) => {
        return (
          <View
            className={`van-demo-goods-item-wrapper ${className}`}
            {...props}
          >
            <View className="van-demo-goods-item">
              <TaroImage src={item.image} className="img" />
              <View className="title">{item.title}</View>
              {item.isCutPrice && <Text className="cutPrice">最近大降价</Text>}
              <View className="price">{item.price}</View>
            </View>
          </View>
        )
      })}
    />
  )
}
```

### 瀑布流

- `showCount`必须大于可视区域可展示的最大数量
- `gap`设置中间的间距
- 微信开发工具会卡，不建议在微信端使用
- 暂时不支持和`PullRefresh`使用

```jsx
const data = COMMON.mockGoods()

function Demo() {
  return (
    <VirtualList.VirtualWaterfallList
      style={{ padding: 10, boxSizing: 'border-box' }}
      height="calc(100vh - 125px)"
      dataSource={data}
      showCount={6}
      gap={10}
      ItemRender={react.memo(({ index, item, className, ...props }) => {
        return (
          <View
            className={`van-demo-goods-item-wrapper ${className}`}
            {...props}
          >
            <View className="van-demo-goods-item">
              <TaroImage src={item.image} className="img" />
              <View className="title">{item.title}</View>
              {item.isCutPrice && <Text className="cutPrice">最近大降价</Text>}
              <View className="price">{item.price}</View>
            </View>
          </View>
        )
      })}
    />
  )
}
```

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
  return new Array(27).fill('').map((item, index) => {
    return {
      index,
      ...initData[index % 4],
      isCutPrice: index % 2 === 0 ? true : false,
    }
  })
}
```
