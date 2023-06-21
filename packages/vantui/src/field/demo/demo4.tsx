import react from 'react'
import { CellGroup, Field } from '@antmjs/vantui'

export default function Demo() {
  const [state] = react.useState({
    username: '',
    phone: '',
  })
  return (
    <CellGroup>
      <Field
        value={state.username}
        label="用户名"
        placeholder="请输入用户名"
        error
      />
      <Field
        value={state.phone}
        label="手机号"
        placeholder="请输入手机号"
        errorMessage="手机号格式错误"
        border={false}
      />
    </CellGroup>
  )
}
