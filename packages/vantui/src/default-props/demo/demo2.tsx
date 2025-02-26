import { useDidHide } from '@tarojs/taro'
import { DefaultProps, Empty } from '@antmjs/vantui'

const originProps = DefaultProps.set({
  Empty: {
    description: '空空如也～～',
  },
})

export default function Demo() {
  useDidHide(() => {
    DefaultProps.set(originProps)
  })

  return <Empty />
}
