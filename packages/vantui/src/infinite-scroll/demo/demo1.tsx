/* eslint-disable */
import react from 'react'
import { View, Image as TaroImage, Text } from '@tarojs/components'
import {
  PullToRefresh,
  InfiniteScroll,
  InfiniteScrollInstance,
  InfiniteScrollProps,
  IPullToRefreshProps,
} from '@antmjs/vantui'
import { mockGoods } from './common'

export default function Demo() {
  const [data, setdata] = react.useState<any[]>([])
  const InfiniteScrollInstance = react.useRef<InfiniteScrollInstance>()

  const loadMore: InfiniteScrollProps['loadMore'] = async () => {
    return new Promise(async (resolve) => {
      const reslult = await mockGoods()
      const newData = data.concat(reslult)
      setdata(newData)
      // 以下是简单的模拟请求，正常请求请按条件执行`resolve('complete')`
      // 设定一页10条数据,小于10则没有更多数据
      resolve(reslult.length < 10 ? 'complete' : 'loading')
    })
  }

  const onRefresh: IPullToRefreshProps['onRefresh'] = () => {
    return new Promise(async (resolve) => {
      const reslult = await mockGoods()
      setdata(reslult)
      if (data.length > 8) InfiniteScrollInstance.current?.reset()
      resolve(undefined)
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
