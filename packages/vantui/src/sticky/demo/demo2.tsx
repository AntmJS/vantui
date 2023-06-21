import { Sticky, Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Sticky offsetTop={50}>
      <Button type="primary" style="margin-left: 120px">
        吸顶距离
      </Button>
    </Sticky>
  )
}
