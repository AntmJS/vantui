import { Picker } from '@antmjs/vantui'

const columns = ['杭州', '宁波', '温州', '嘉兴', '湖州']
export default function Demo() {
  return (
    <Picker
      mode="content"
      showToolbar
      title="请选择"
      defaultIndex={2}
      columns={columns}
    />
  )
}
