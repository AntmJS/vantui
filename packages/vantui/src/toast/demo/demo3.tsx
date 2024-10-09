import { View } from '@tarojs/components'
import { Button, Toast } from '@antmjs/vantui'

export default function Demo() {
  const show = () => {
    Toast.success({
      message: '成功文案',
      selector: '#vanToast-demo2',
      mask: true,
    })
  }

  const showLong = () => {
    Toast.fail({
      message: '失败文案',
      selector: '#vanToast-demo2',
      mask: true,
    })
  }

  return (
    <View>
      <Button type="info" onClick={show}>
        成功
      </Button>
      <Button type="danger" onClick={showLong}>
        失败
      </Button>
      <Toast id="vanToast-demo2" />
    </View>
  )
}
