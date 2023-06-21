import { CellGroup, Field, Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <CellGroup>
      <Field
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        border
        renderButton={
          <Button size="small" type="primary">
            发送验证码
          </Button>
        }
      />
    </CellGroup>
  )
}
