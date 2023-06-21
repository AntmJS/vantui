import { View } from '@tarojs/components'
import { Button, Toast } from '@antmjs/vantui'

const Toast_ = Toast.createOnlyToast()

export default function Demo() {
  const show = () => {
    Toast_.success({
      message: '成功文案',
    })
  }

  const showLong = () => {
    Toast_.fail({
      message: '失败文案',
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
      <Toast_ />
    </View>
  )
}
