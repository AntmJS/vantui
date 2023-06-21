/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Dialog, Cell } from '@antmjs/vantui'

const Dialog_ = Dialog.createOnlyDialog()

export default function Demo() {
  const alert = react.useCallback((title) => {
    Dialog_.alert({
      title: title || '',
      message: '弹窗内容',
      theme: 'round-button',
    }).then((value) => {
      console.log('dialog result', value)
    })
  }, [])

  return (
    <View>
      <Dialog_ />
      <Cell title="提示弹窗" onClick={() => alert('提示一下')} />
      <Cell title="提示弹窗（无标题）" onClick={() => alert('123')} />
    </View>
  )
}
