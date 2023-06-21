import { View } from '@tarojs/components'
import { Progress } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Progress pivotText="橙色" color="#f2826a" percentage="25" />
      <Progress pivotText="红色" color="#ee0a24" percentage="50" />
      <Progress
        percentage="75"
        pivotText="紫色"
        pivotColor="#7232dd"
        color="linearGradient(to right, #be99ff, #7232dd)"
      />
    </View>
  )
}
