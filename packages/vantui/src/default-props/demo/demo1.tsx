import { View, Text } from '@tarojs/components'
import { useEffect } from 'react'
import { DefaultProps, Empty, Icon, Image } from '@antmjs/vantui'

// 建议在入口文件使用, 如果在单独页面使用个性化处理，在离开页面时还原defaultProps
const originProps = DefaultProps.set({
  Image: {
    renderError: <Icon name="smile-o" size="52px" />,
    style: {
      minHeight: '80px',
      minWidth: '80px',
      border: '1px solid red',
    },
  },
  Empty: {
    description: '此处空空如也～～',
  },
})

export default function Demo() {
  // 小程序使用useHide
  useEffect(() => {
    return () => {
      DefaultProps.set(originProps)
    }
  })

  return (
    <View>
      <Text>图片加载错误：</Text>
      <Image src="" />
      <View>空数据文案</View>
      <Empty />
    </View>
  )
}
