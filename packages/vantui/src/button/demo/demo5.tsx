/* eslint-disable */
import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Button loading type="primary" />
      <Button loading type="primary" loadingType="spinner" />
      <Button loading type="info" loadingText="加载中..." />
    </View>
  )
}
