import { SubmitBar } from '@antmjs/vantui'

export default function Demo() {
  return (
    <SubmitBar
      price={3050}
      buttonText="提交订单"
      onSubmit={() => console.info('提交')}
    />
  )
}
