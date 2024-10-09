import { View } from '@tarojs/components'
import { Button, Toast } from '@antmjs/vantui'

const Toast_ = Toast.createOnlyToast()

export default function Demo() {
  const show = () => {
    Toast_.loading({
      message: '加载中...',
    })
  }

  return (
    <View>
      <Button type="primary" onClick={show}>
        加载提示
      </Button>
      <Toast_ />
    </View>
  )
}
