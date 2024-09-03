import { Text, View } from '@tarojs/components'
import icons from '@vant/icons'
import { Col, Icon } from '@antmjs/vantui'
import * as computed from '../wxs'

export default function Demo() {
  return (
    <View style={{ overflow: 'hidden' }}>
      {icons.basic.map((name, i) => (
        <Col
          key={i}
          span="6"
          style={{ paddingTop: '20px', paddingBottom: '20px' }}
          onClick={() => computed.copyIcon(name)}
        >
          <Icon name={name} size="32px" />
          <Text>{name}</Text>
        </Col>
      ))}
    </View>
  )
}
