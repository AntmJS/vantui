import { View } from '@tarojs/components'
import { Steps, type Step } from '@antmjs/vantui'

const steps: Step[] = [
  {
    text: '步骤一',
    desc: '描述信息',
  },
  {
    text: '步骤二',
    desc: '描述信息',
  },
  {
    text: '步骤三',
    desc: '描述信息',
  },
]

const renderStep = (step: Step) => (
  <>
    <View>{step.text}</View>
    <View>自定义 Step 内容</View>
  </>
)

export default function Demo() {
  return (
    <Steps
      steps={steps}
      active={1}
      direction="vertical"
      activeColor="#ee0a24"
      renderStep={renderStep}
    />
  )
}
