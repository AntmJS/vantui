import { View } from '@tarojs/components'
import { Button, Notify } from '@antmjs/vantui'

export default function Demo() {
  const primaryShow = () => {
    Notify.show({
      message: '-----通知内容-----',
      type: 'primary',
    })
  }

  const successShow = () => {
    Notify.show({
      message: '-----通知内容-----',
      type: 'success',
    })
  }

  const dangerShow = () => {
    Notify.show({
      message: '-----通知内容-----',
      type: 'danger',
    })
  }

  const warningShow = () => {
    Notify.show({
      message: '-----通知内容-----',
      type: 'warning',
    })
  }

  return (
    <View>
      <Button onClick={primaryShow} type="info">
        主要通知
      </Button>
      <Button onClick={successShow} type="primary">
        成功通知
      </Button>
      <Button onClick={dangerShow} type="danger">
        危险通知
      </Button>
      <Button onClick={warningShow} type="warning">
        警告用法
      </Button>
      <Notify id="vanNotify" />
    </View>
  )
}
