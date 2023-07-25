/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Dialog, Cell } from '@antmjs/vantui'

export default function Demo() {
  const alert = react.useCallback((title) => {
    const beforeClose = (action: string): Promise<boolean> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (action === 'confirm') {
            resolve(true)
          } else {
            // 拦截取消操作
            resolve(false)
          }
        }, 1000)
      })
    }
    Dialog.alert({
      title: title || '',
      message: '弹窗内容',
      theme: 'round-button',
      selector: 'vanDialog2',
      beforeClose,
      asyncClose: true,
    }).then((value) => {
      console.log('dialog result11', value)
    })
  }, [])

  return (
    <View>
      <Dialog id="vanDialog2" />
      <Cell title="异步关闭" onClick={() => alert('点击等待1s关闭')} />
    </View>
  )
}
