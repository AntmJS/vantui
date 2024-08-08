import { Text } from '@tarojs/components'
import icons from '@vant/icons'
import { Col, Icon } from '@antmjs/vantui'

export default function Demo() {
  return (
    <>
      {icons.filled.map((name, i) => (
        <Col
          key={i}
          span="6"
          style={{ paddingTop: '20px', paddingBottom: '20px', height: '100px' }}
        >
          <Icon name={name} size="32px" />
          <Text style={{ textAlign: 'center' }}>{name}</Text>
        </Col>
      ))}
    </>
  )
}
