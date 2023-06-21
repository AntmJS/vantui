/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Skeleton } from '@antmjs/vantui'

export default function Demo() {
  const [loading, setLoading] = react.useState(true)
  react.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Skeleton title avatar row="3" loading={loading}>
      <View>实际内容</View>
    </Skeleton>
  )
}
