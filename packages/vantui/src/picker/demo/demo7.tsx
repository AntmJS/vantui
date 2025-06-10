import { View } from '@tarojs/components'
import { useRef, useState } from 'react'
import { Button, IPickerInstance, Picker, PickerProps } from '@antmjs/vantui'

const columns = ['杭州', '宁波', '温州', '嘉兴', '湖州']
export default function Demo() {
  const [value, setValue] = useState<PickerProps['value']>('杭州')
  const pickerRef = useRef<IPickerInstance>(null)
  return (
    <View style="display: flex;">
      <Picker
        ref={pickerRef}
        value={value}
        onInput={(e) => {
          setValue(e.detail)
        }}
        mode="content"
        showToolbar
        title={
          <Button
            type="primary"
            hairline
            plain
            onClick={() => pickerRef?.current?.close()}
          >
            手动关闭
          </Button>
        }
        columns={columns}
      />
      <Button type="primary" onClick={() => pickerRef?.current?.open()}>
        手动打开
      </Button>
    </View>
  )
}
