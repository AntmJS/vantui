/* eslint-disable */
import react from 'react'
import { View, Image as TaroImage, Text } from '@tarojs/components'
import { VirtualList } from '@antmjs/vantui'
import * as COMMON from './common'
const data = COMMON.mockGoods()

export default function Demo() {
  return (
    <VirtualList
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
              <TaroImage src={item.image || ''} className="img" />
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
