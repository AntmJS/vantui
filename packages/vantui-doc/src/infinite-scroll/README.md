# InfiniteScroll 无限滚动

### 介绍

InfiniteScroll 组件在可见区域时自动加载更多数据。

### 引入

在 Taro 文件中引入组件

```js
import { InfiniteScroll } from '@antmjs/vantui'
```

### 基本使用

- 可见区域为窗口，如果滚动区域不是窗体则通过`parentClassName`设置父元素类名

```jsx
function Demo() {
  const [data, setdata] = react.useState([])
  const mockRequest = COMMON.mockRequest
  const InfiniteScrollInstance = react.useRef()

  const loadMore = async () => {
    return new Promise(async (resolve) => {
      const reslult = await mockRequest()
      const newData = [].concat(data, reslult)
      setdata(newData)
      // 以下是简单的模拟请求，正常请求请按条件执行`resolve('complete')`
      resolve(newData.length > 60 ? 'complete' : 'loading')
    })
  }

  const onRefresh = () => {
    return new Promise(async (resolve) => {
      const reslult = await mockRequest()
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
            style={{ padding: '12px 6px', borderBottom: '1px solid #eee' }}
            key={item}
          >
            <Text className="dataIndex">Index{index + 1}</Text>
            {item}
          </View>
        ))}
        <InfiniteScroll loadMore={loadMore} ref={InfiniteScrollInstance} />
      </View>
    </PullToRefresh>
  )
}
```

模拟获取数据

```js common
const mockRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Array(20).fill('').map((item) => `数据：${Math.random()}`))
    }, 1500)
  })
}
```

### 请求异常

```jsx
function Demo() {
  const [data, setdata] = react.useState([])
  const mockRequest = COMMON.mockRequest

  const loadMore = async () => {
    return new Promise(async (resolve) => {
      const reslult = await mockRequest()
      const newData = [].concat(data, reslult)
      setdata(newData)
      // 以下是简单的模拟请求，正常请求请按条件执行`resolve('error')`
      resolve(Math.random() > 0.3 ? 'error' : 'loading')
    })
  }

  return (
    <View style={{ padding: '4px 6px' }}>
      {data.map((item, index) => (
        <View
          style={{ padding: '12px 6px', borderBottom: '1px solid #eee' }}
          key={item}
        >
          <Text className="dataIndex">Index{index + 1}</Text>
          {item}
        </View>
      ))}
      <InfiniteScroll loadMore={loadMore} />
    </View>
  )
}
```
