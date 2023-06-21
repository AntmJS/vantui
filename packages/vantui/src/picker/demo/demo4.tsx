/* eslint-disable */
import react from 'react'
import { Toast, Picker, IPickerInstance } from '@antmjs/vantui'

const citys = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门'],
}
export default function Demo() {
  const pickerRef = react.useRef<IPickerInstance>()

  react.useEffect(() => {
    // 模拟异步数据获取
    setTimeout(async () => {
      const res = ['浙江', '福建'] // 数组项可以是基础类型或对象类型
      await pickerRef.current?.setColumnValues(0, res)
      await pickerRef.current?.setColumnValues(1, citys[res[0] as any])
    }, 1000)
  }, [])

  const onChange = (event) => {
    const { picker, value } = event.detail
    picker.setColumnValues(1, citys[value[0]]).then((newValue) => {
      console.info(newValue)
      console.info(pickerRef.current?.getIndexes()) // 异步更新列数据的时候不要使用回调函数里面旧的 picker实例
    })
  }
  return (
    <>
      <Toast />
      <Picker
        ref={pickerRef}
        columns={[{ values: [] }, { values: [] }]}
        onChange={onChange}
      />
    </>
  )
}
