/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Button, Toast } from '@antmjs/vantui'

export default function Demo() {
  const show = () => {
    Toast.success({
      message: '成功文案',
      selector: '#vanToast-demo2',
    })
  }

  const showLong = () => {
    Toast.fail({
      message: '失败文案',
      selector: '#vanToast-demo2',
    })
  }

  return (
    <View>
      <Button type="primary" onClick={show}>
        加载提示
      </Button>
      <Button type="primary" onClick={showLong}>
        自定义加载图标
      </Button>
      <Toast id="vanToast-demo2" />
    </View>
  )
}
