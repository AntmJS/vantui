import { View, Text } from '@tarojs/components'
import { DefaultProps, Icon, Image } from '@antmjs/vantui'

// 建议在入口文件使用
DefaultProps.set({
  Image: {
    renderError: <Icon name="smile-o" size="52px" />,
    style: {
      minHeight: '80px',
      minWidth: '80px',
      border: '1px solid #e3e3e3',
    },
  },
})

export default function Demo() {
  return (
    <View>
      <Text>图片加载错误：</Text>
      <Image src="" />
    </View>
  )
}
