/* eslint-disable */
import react from 'react'
import { Text } from '@tarojs/components'
import { CountDown, ITimeData } from '@antmjs/vantui'

export default function Demo() {
  const [value] = react.useState(30 * 60 * 60 * 1000)
  const [timeData, setTimeData] = react.useState<ITimeData | null>()

  return (
    <CountDown time={value} onChange={(e) => setTimeData({ ...e.detail })}>
      <Text style={{ color: 'blue' }}>{timeData?.hours}</Text>时
      <Text style={{ color: 'green' }}>{timeData?.minutes}</Text>分
      <Text style={{ color: 'red' }}>{timeData?.seconds}</Text>秒
    </CountDown>
  )
}
