/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Tag } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState({
    primary: true,
    success: true,
  })

  return (
    <View>
      {show.primary && (
        <Tag
          className="demo-margin-right"
          type="primary"
          size="medium"
          closeable
          onClose={() => setShow({ ...show, primary: false })}
        >
          标签
        </Tag>
      )}
      {show.success && (
        <Tag
          className="demo-margin-right"
          type="success"
          size="medium"
          closeable
          onClose={() => setShow({ ...show, success: false })}
        >
          标签
        </Tag>
      )}
    </View>
  )
}
