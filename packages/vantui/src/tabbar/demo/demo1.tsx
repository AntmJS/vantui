/* eslint-disable */
import react from 'react'
import { Tabbar, TabbarItem } from '@antmjs/vantui'

export default function Demo() {
  const [active, setActive] = react.useState<string | number>(0)
  return (
    <Tabbar
      active={active}
      onChange={(e) => setActive(e.detail)}
      safeAreaInsetBottom={false}
    >
      <TabbarItem icon="home-o">标签</TabbarItem>
      <TabbarItem icon="search">标签</TabbarItem>
      <TabbarItem icon="friends-o">标签</TabbarItem>
      <TabbarItem icon="setting-o">标签</TabbarItem>
    </Tabbar>
  )
}
