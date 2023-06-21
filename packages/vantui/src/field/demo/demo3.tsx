import { CellGroup, Field } from '@antmjs/vantui'

export default function Demo() {
  return (
    <CellGroup>
      <Field
        value="输入框已禁用"
        label="用户名"
        leftIcon="contact"
        disabled
        border={false}
      />
    </CellGroup>
  )
}
