/* eslint-disable */
import react from 'react'
import { Input, View } from '@tarojs/components'
import { Dialog, Cell } from '@antmjs/vantui'

const Dialog_ = Dialog.createOnlyDialog()
export default function Demo() {
  const [value, setValue] = react.useState('')
  const alert = react.useCallback((title) => {
    Dialog_.alert({
      title: title || '',
      message: '弹窗内容',
    }).then((value) => {
      console.log('dialog result', value)
    })
  }, [])

  const confirm = react.useCallback(() => {
    Dialog_.confirm({
      title: '标题',
      message: (
        <Input
          placeholder="请输入内容"
          value={value}
          onInput={(e) => setValue(e.detail.value)}
        />
      ),
    }).then((value) => {
      console.log('dialog result', value)
    })
  }, [value])

  return (
    <View>
      <Dialog_ />
      <Cell title="提示弹窗" onClick={() => alert('提示一下')} />
      <Cell title="提示弹窗（无标题）" onClick={() => alert('123')} />
      <Cell title="确认弹窗" onClick={confirm} />
    </View>
  )
}
