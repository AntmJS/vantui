import { Toast, Picker } from '@antmjs/vantui'

const columns = ['杭州', '宁波', '温州', '嘉兴', '湖州']
export default function Demo() {
  const onChange = (event) => {
    const { value, index } = event.detail
    Toast.show(`当前值：${value}, 当前索引：${index}`)
  }
  return (
    <>
      <Toast />
      <Picker columns={columns} onChange={onChange} />
    </>
  )
}
