/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Dialog, Cell } from '@antmjs/vantui'

export default function Demo() {
  const alert = react.useCallback((title) => {
    Dialog.alert({
      title: title || '',
      message: '弹窗内容',
      theme: 'roundButton',
      selector: '#vanDialog1',
    }).then((value) => {
      console.log('dialog result', value)
    })
  })

  return (
    <View>
      <Dialog id="vanDialog1" />
      <Cell title="提示弹窗" onClick={() => alert('提示一下')} />
      <Cell title="提示弹窗（无标题）" onClick={() => alert()} />
    </View>
  )
}
