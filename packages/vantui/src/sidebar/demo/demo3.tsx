import { Sidebar, SidebarItem } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Sidebar activeKey={2}>
      <SidebarItem title="标签名" dot={true} />
      <SidebarItem title="标签名" disabled />
      <SidebarItem title="标签名" badge="66+" />
    </Sidebar>
  )
}
