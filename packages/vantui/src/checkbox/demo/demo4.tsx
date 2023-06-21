/* eslint-disable */
import react from 'react'
import { Checkbox, Image } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(true)

  return (
    <Checkbox
      value={value}
      onChange={(e) => setValue(e.detail)}
      renderIcon={
        <Image
          style={{ width: '30px', height: '30px' }}
          src={
            value
              ? 'https://img.yzcdn.cn/vant/user-active.png'
              : 'https://img.yzcdn.cn/vant/user-inactive.png'
          }
        />
      }
    >
      自定义图标
    </Checkbox>
  )
}
