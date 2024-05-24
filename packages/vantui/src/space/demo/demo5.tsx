import { Button, Space } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Space justify="center" align="end" block>
      <Button type="primary">按钮1</Button>
      <Button type="warning" style={{ height: '50px' }}>
        按钮2
      </Button>
      <Button type="danger" style={{ height: '80px' }}>
        按钮3
      </Button>
    </Space>
  )
}
