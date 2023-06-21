/* eslint-disable */
import react from 'react'
import { View, Image as TaroImage, Text } from '@tarojs/components'
import { InfiniteScroll, InfiniteScrollProps } from '@antmjs/vantui'
import * as COMMON from './common'

const mockGoods = COMMON.mockGoods

export default function Demo() {
  const [data, setdata] = react.useState<any[]>([])

  const loadMore: InfiniteScrollProps['loadMore'] = async () => {
    return new Promise(async (resolve) => {
      const reslult = await mockGoods()
      const newData = data.concat(reslult)
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
