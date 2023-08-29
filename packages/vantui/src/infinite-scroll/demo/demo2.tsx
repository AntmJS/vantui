/* eslint-disable */
import react from 'react'
import { View, Image as TaroImage, Text } from '@tarojs/components'
import {
  PullToRefresh,
  VirtualList,
  InfiniteScroll,
  InfiniteScrollInstance,
  IVirtualListInstance,
  InfiniteScrollProps,
  IPullToRefreshProps,
} from '@antmjs/vantui'
import * as COMMON from './common'

export default function Demo() {
  const [data, setdata] = react.useState<any[]>([])
  const mockGoods = COMMON.mockGoods
  const InfiniteScrollInstance = react.useRef<InfiniteScrollInstance>()
  const VirtualListInstance = react.useRef<IVirtualListInstance>()

  const loadMore: InfiniteScrollProps['loadMore'] = async () => {
    return new Promise(async (resolve) => {
      const reslult = await mockGoods()
      const newData = data.concat(reslult)
      setdata(newData)
      // 以下是简单的模拟请求，正常请求请按条件执行`resolve('complete')`
      resolve(newData.length > 110 ? 'complete' : 'loading')
    })
  }

  const onRefresh: IPullToRefreshProps['onRefresh'] = () => {
    return new Promise(async (resolve) => {
      InfiniteScrollInstance.current?.reset()
      const reslult = await mockGoods()
      await VirtualListInstance.current?.reset()
      setdata(reslult)
      resolve(undefined)
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
        ItemRender={react.memo(({ item }) => {
          return (
            <View className={`van-demo-goods-item-wrapper`} key={item.image}>
              <View className="van-demo-goods-item">
                <TaroImage key={item.image} src={item.image} className="img" />
                <View className="title">{item.title}</View>
                {item.isCutPrice && (
                  <Text className="cutPrice">最近大降价</Text>
                )}
                <View className="price">{item.price}</View>
              </View>
            </View>
          )
        })}
      />
    </PullToRefresh>
  )
}
