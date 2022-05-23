/* eslint-disable */
import react from 'react'
import { Toast, Picker } from '@antmjs/vantui'

const citys = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
}
export default function Demo() {
  const [columns, setColumns] = react.useState([
    {
      values: Object.keys(citys),
      className: 'column1',
    },
    {
      values: citys['浙江'],
      className: 'column2',
      defaultIndex: 2,
    },
  ])

  const onChange = (event) => {
    const { picker, value, index } = event.detail
    picker.setColumnValues(1, citys[value[0]])
  }
  return (
    <>
      <Toast />
      <Picker columns={columns} onChange={onChange} />
    </>
  )
}
