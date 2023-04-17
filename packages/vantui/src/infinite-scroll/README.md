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

```jsx
function Demo() {
  const [data, setdata] = react.useState([])
  const mockGoods = COMMON.mockGoods
  const InfiniteScrollInstance = react.useRef()

  const loadMore = async () => {
    return new Promise(async (resolve) => {
      const reslult = await mockGoods()
      const newData = [].concat(data, reslult)
      setdata(newData)
      // 以下是简单的模拟请求，正常请求请按条件执行`resolve('complete')`
      resolve(newData.length > 60 ? 'complete' : 'loading')
    })
  }

  const onRefresh = () => {
    return new Promise(async (resolve) => {
      const reslult = await mockGoods()
      setdata(reslult)
      InfiniteScrollInstance.current.reset()
      resolve()
    })
  }

  return (
    <PullToRefresh onRefresh={onRefresh}>
      <View style={{ padding: '4px 6px' }}>
        {data.map((item, index) => (
          <View
            className={`van-demo-goods-item-wrapper`}
            key={`van-demo-goods-item-wrapper-infinite${index}`}
          >
            <View className="van-demo-goods-item">
              <TaroImage src={item.image} className="img" />
              <View className="title">{item.title}</View>
              {item.isCutPrice && <Text className="cutPrice">最近大降价</Text>}
              <View className="price">{item.price}</View>
            </View>
          </View>
        ))}
        <InfiniteScroll loadMore={loadMore} ref={InfiniteScrollInstance} />
      </View>
    </PullToRefresh>
  )
}
```

### 虚拟列表

```jsx
function Demo() {
  const [data, setdata] = react.useState([])
  const mockGoods = COMMON.mockGoods
  const InfiniteScrollInstance = react.useRef()
  const VirtualListInstance = react.useRef()

  const loadMore = async () => {
    return new Promise(async (resolve) => {
      const reslult = await mockGoods()
      const newData = [].concat(data, reslult)
      setdata(newData)
      // 以下是简单的模拟请求，正常请求请按条件执行`resolve('complete')`
      resolve(newData.length > 110 ? 'complete' : 'loading')
    })
  }

  const onRefresh = () => {
    return new Promise(async (resolve) => {
      InfiniteScrollInstance.current.reset()
      const reslult = await mockGoods()
      await VirtualListInstance.current.reset()
      setdata(reslult)
      resolve()
    })
  }
  return (
    <PullToRefresh onRefresh={onRefresh}>
      <VirtualList
        style={{ padding: 10, boxSizing: 'border-box' }}
        height="calc(100vh - 135px)"
        dataSource={data}
        showCount={3}
        ref={VirtualListInstance}
        footer={
          <InfiniteScroll
            parentClassName="van-virtual-list"
            loadMore={loadMore}
            ref={InfiniteScrollInstance}
          />
        }
        ItemRender={({ index, item, className, ...props }) => {
          return (
            <View
              className={`van-demo-goods-item-wrapper ${className}`}
              {...props}
            >
              <View className="van-demo-goods-item">
                <TaroImage src={item.image} className="img" />
                <View className="title">{item.title}</View>
                {item.isCutPrice && (
                  <Text className="cutPrice">最近大降价</Text>
                )}
                <View className="price">{item.price}</View>
              </View>
            </View>
          )
        }}
      />
    </PullToRefresh>
  )
}
```

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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Array(8).fill('').map((item, index) => {
          return {
            index,
            ...initData[index % 4],
            isCutPrice: index % 2 === 0 ? true : false,
          }
        }),
      )
    }, 1400)
  })
}
```

### 请求异常

```jsx
function Demo() {
  const [data, setdata] = react.useState([])
  const mockGoods = COMMON.mockGoods
  const InfiniteScrollInstance = react.useRef()

  const loadMore = async () => {
    return new Promise(async (resolve) => {
      const reslult = await mockGoods()
      const newData = [].concat(data, reslult)
      setdata(newData)
      // 以下是简单的模拟请求，正常请求请按条件执行`resolve('complete')`
      resolve(Math.random() > 0.6 ? 'loading' : 'error')
    })
  }

  return (
    <View style={{ padding: '4px 6px' }}>
      {data.map((item, index) => (
        <View
          className={`van-demo-goods-item-wrapper`}
          key={`van-demo-goods-item-wrapper-infinite${index}`}
        >
          <View className="van-demo-goods-item">
            <TaroImage src={item.image} className="img" />
            <View className="title">{item.title}</View>
            {item.isCutPrice && <Text className="cutPrice">最近大降价</Text>}
            <View className="price">{item.price}</View>
          </View>
        </View>
      ))}
      <InfiniteScroll loadMore={loadMore} />
    </View>
  )
}
```

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

| 方法  | 说明         | 类型                                             |
| ----- | ------------ | ------------------------------------------------ |
| reset | 重置加载状态 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;Promise<null><br/>_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                            | 默认值             |
| ------------------------------- | ------------------ |
| --infinite-scroll-primary-color | ` @primary-color;` |
| --infinite-scroll-color         | ` @gray-6;`        |
| --infinite-scroll-font-size     | ` @font-size-md;`  |
