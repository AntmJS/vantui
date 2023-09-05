/* eslint-disable */
import { Result } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Result
      title="无法完成操作"
      message="内容详情可折行，建议不超过两行\n建议不超过两行建议不超过两行"
      type="error"
    />
  )
}
