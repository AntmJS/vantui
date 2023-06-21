/* eslint-disable */
import react from 'react'
import { View, Text } from '@tarojs/components'
import { WaterfallFlow } from '@antmjs/vantui'
import * as COMMON from './common'
export default function Demo() {
  const { genTextData } = COMMON
  const [list] = react.useState(genTextData('text_'))

  const renderItem = (item) => {
    return (
      <View style={{ background: '#EEE' }}>
        <Text>{item.content}</Text>
      </View>
    )
  }

  return (
    <WaterfallFlow
      dataSource={list}
      columnNum={3}
      gutter={4}
      renderItem={renderItem}
    />
  )
}
