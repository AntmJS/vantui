import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { Tabs, Tab } from '@antmjs/vantui'

export default function Demo() {
  const [tab, setTab] = useState('1')

  useEffect(() => {
    setTimeout(() => {
      setTab('3')
    }, 1000)
  }, [])

  return (
    <View>
      <Tabs sticky={true} active={tab} ellipsis={false}>
        <Tab title="标签 1" name="1">
          内容 1
        </Tab>
        <Tab title="标签 ～～ 2" name="2">
          内容 2
        </Tab>
        <Tab title="标签 3" name="3">
          内容 3
        </Tab>
        <Tab title="标签 4" name="4">
          内容 4
        </Tab>
      </Tabs>
    </View>
  )
}
