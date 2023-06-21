/* eslint-disable */
import react from 'react'
import { View, Image as TaroImage, Text } from '@tarojs/components'
import { WaterfallFlow } from '@antmjs/vantui'
import * as COMMON from './common'

export default function Demo() {
  const { mockGoods } = COMMON
  const [list] = react.useState(mockGoods())

  const renderItem = (item, forceResize) => {
    return (
      <View className="van-demo-goods-item-wrapper">
        <View className="van-demo-goods-item">
          <TaroImage
            src={item.image}
            className="img"
            onLoad={forceResize} // 当图片加载完成时触发forceResize
          />
          <View className="title">{item.title}</View>
          {item.isCutPrice && <Text className="cutPrice">最近大降价</Text>}
          <View className="price">{item.price}</View>
        </View>
      </View>
    )
  }

  return (
    <>
      <WaterfallFlow
        dataSource={list}
        columnNum={2}
        gutter={8}
        renderItem={renderItem}
        calculationDelay={1000}
      />
    </>
  )
}
