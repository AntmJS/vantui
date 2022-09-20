/* eslint-disable */
import react from 'react'
import { Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <>
      <Button icon="starO" type="primary" />
      <Button icon="starO" type="primary">
        按钮
      </Button>
      <Button
        icon="https://antm-js.gitee.io/resource/antmjs-vantui.jpg"
        type="info"
      >
        按钮
      </Button>
    </>
  )
}
