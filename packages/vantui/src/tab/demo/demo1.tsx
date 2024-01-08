import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { Tabs, Tab } from '@antmjs/vantui'

export default function Demo() {
  const [active, setActive] = useState('a')

  useEffect(() => {
    setTimeout(() => {
      setActive('c')
    }, 3000)
  }, [])

  return (
    <View>
      <Tabs
        sticky={true}
        active={active}
        onChange={(e) => {
          console.info(e, '~~~~~~~')
          setActive(e.detail.name || '')
        }}
      >
        <Tab title="标签 a" name="a">
          内容 1
        </Tab>
        <Tab title="标签 b" name="b">
          内容 2
        </Tab>
        <Tab title="标签 b" name="c">
          内容 3
        </Tab>
        <Tab title="标签 d" name="d">
          内容 4
        </Tab>
      </Tabs>
    </View>
  )
}
