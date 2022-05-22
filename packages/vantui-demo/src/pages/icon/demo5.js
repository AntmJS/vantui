/* eslint-disable react/jsx-key */
import react from 'react'
import { Text } from '@tarojs/components'
import { Col, Icon } from '@antmjs/vantui'

import icons from '@vant/icons'
export default function Demo() {
  return (
    <>
      {icons.filled.map((name) => (
        <Col
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
