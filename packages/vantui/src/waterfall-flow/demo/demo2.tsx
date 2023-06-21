/* eslint-disable */
import react from 'react'
import { View, Text } from '@tarojs/components'
import { WaterfallFlow, Button } from '@antmjs/vantui'
import * as COMMON from './common'

export default function Demo() {
  const { genTextData } = COMMON
  const [columnNum, setColumnNum] = react.useState(3)
  const [list] = react.useState(genTextData('daymic_'))

  const renderItem = (item) => {
    return (
      <View style={{ background: '#EEE' }}>
        <Text>{item.content}</Text>
      </View>
    )
  }

  const handleAddColumn = react.useCallback(() => {
    if (columnNum < 5) {
      setColumnNum(columnNum + 1)
    }
  }, [columnNum])

  const handleMinusColumn = react.useCallback(() => {
    if (columnNum > 2) {
      setColumnNum(columnNum - 1)
    }
  }, [columnNum])

  return (
    <>
      <WaterfallFlow
        dataSource={list}
        columnNum={columnNum}
        gutter={4}
        renderItem={renderItem}
      />
      <View style={{ display: 'flex', marginTop: '16px' }}>
        <Button onClick={handleAddColumn}>加一列</Button>
        <Button onClick={handleMinusColumn}>减一列</Button>
      </View>
    </>
  )
}
