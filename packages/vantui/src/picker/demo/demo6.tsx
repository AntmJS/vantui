import { Picker } from '@antmjs/vantui'

const columns = [
  {
    text: '宁波',
  },
  {
    text: '温州',
  },
  {
    text: '长沙',
  },
]
export default function Demo() {
  return <Picker columns={columns} loading />
}
