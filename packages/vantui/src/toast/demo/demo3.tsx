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
    Toast.loading({
      message: '失败文案',
      selector: '#vanToast-demo2',
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
