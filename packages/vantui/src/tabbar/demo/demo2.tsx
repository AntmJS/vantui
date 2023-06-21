/* eslint-disable */
import react from 'react'
import { Tabbar, TabbarItem } from '@antmjs/vantui'

export default function Demo() {
  const [active, setActive] = react.useState<string | number>('home')
  return (
    <Tabbar active={active} onChange={(e) => setActive(e.detail)}>
      <TabbarItem name="home" icon="home-o">
        标签
      </TabbarItem>
      <TabbarItem name="search" icon="search">
        标签
      </TabbarItem>
      <TabbarItem name="friends" icon="friends-o">
        标签
      </TabbarItem>
      <TabbarItem name="setting" icon="setting-o">
        标签
      </TabbarItem>
    </Tabbar>
  )
}
