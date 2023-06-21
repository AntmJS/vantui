import { CellGroup, Toast, Field } from '@antmjs/vantui'

export default function Demo() {
  return (
    <CellGroup>
      <Toast id="Field-demo2" />
      <Field
        required
        clearable
        label="用户名"
        icon="questionO"
        placeholder="请输入用户名"
      />
      <Field
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        border
      />
    </CellGroup>
  )
}
