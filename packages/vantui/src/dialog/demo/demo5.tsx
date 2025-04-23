/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Dialog, Cell } from '@antmjs/vantui'
import Taro from '@tarojs/taro'

export default function Demo() {
  const beforeCloseResolve = react.useRef<(result: boolean) => void>()
  const alert = react.useCallback((title) => {
    const beforeClose = (): Promise<boolean> => {
      return new Promise((resolve) => {
        // 微信小程序
        if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
          beforeCloseResolve.current = resolve
        } else {
          resolve(true)
        }
      })
    }
    Dialog.alert({
      title: title || '',
      message: '弹窗内容',
      theme: 'round-button',
      selector: 'vanDialog4',
      beforeClose,
      openType: 'getPhoneNumber',
      onGetPhoneNumber: () => {
        beforeCloseResolve.current?.(true)
      },
      asyncClose: true,
    }).then((value) => {
      console.log('dialog result11', value)
    })
  }, [])

  return (
    <View>
      <Dialog id="vanDialog4" />
      <Cell title="获取手机号" onClick={() => alert('获取手机号')} />
    </View>
  )
}
