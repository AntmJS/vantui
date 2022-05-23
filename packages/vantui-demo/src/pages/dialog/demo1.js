/* eslint-disable */
import react from 'react'
import { Input, View } from '@tarojs/components'
import { Dialog, Cell } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState('')
  const alert = react.useCallback((title) => {
    Dialog.alert({
      title: title || '',
      message: '弹窗内容',
      selector: 'vanDialog0',
    }).then((value) => {
      console.log('dialog result', value)
    })
  })

  const confirm = react.useCallback(() => {
    Dialog.confirm({
      // title: '标题',
      // message: '弹窗内容',
      renderTitle: (
        <Input
          placeholder="xxxx"
          value={value}
          onChange={(e) => setValue(e.detail.value)}
        />
      ),
      selector: 'vanDialog0',
    }).then((value) => {
      console.log('dialog result', value)
    })
  })

  return (
    <View>
      <Dialog id="vanDialog0" />
      <Cell title="提示弹窗" onClick={() => alert('提示一下')} />
      <Cell title="提示弹窗（无标题）" onClick={() => alert()} />
      <Cell title="确认弹窗" onClick={confirm} />
    </View>
  )
}
